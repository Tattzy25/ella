import { NextRequest } from 'next/server';
import { groqClient } from '@/lib/ai/groq-client';
import { streamGroqChatCompletion } from '@/lib/ai/groq-stream';
import type { GroqMessage } from '@/lib/ai/types';
import { groqChatRequestSchema } from './schema';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parseResult = groqChatRequestSchema.safeParse(body);
  if (!parseResult.success) {
    return new Response('Invalid request: ' + JSON.stringify(parseResult.error.format()), { status: 400 });
  }
  const { messages, model, stream, temperature, maxTokens, topP, stop } = parseResult.data;

  if (stream) {
    const encoder = new TextEncoder();
    const streamResponse = new ReadableStream({
      async start(controller) {
        for await (const delta of streamGroqChatCompletion({
          messages,
          model,
          temperature,
          maxTokens,
          topP,
          stop,
        })) {
          controller.enqueue(encoder.encode(delta));
        }
        controller.close();
      },
    });
    return new Response(streamResponse, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } else {
    const chatCompletion = await groqClient.chat.completions.create({
      messages,
      model,
      temperature,
      max_completion_tokens: maxTokens,
      top_p: topP,
      stop: stop ?? undefined,
      stream: false,
    });
    return Response.json({
      content: chatCompletion.choices[0]?.message?.content ?? '',
    });
  }
}
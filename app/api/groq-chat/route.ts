import { NextRequest } from 'next/server';
import { groqClient } from '@/lib/ai/groq-client';
import { streamGroqChatCompletion } from '@/lib/ai/groq-stream';
import type { GroqMessage } from '@/lib/ai/types';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { messages, model, stream, temperature, maxTokens, topP, stop } = body;

  if (!Array.isArray(messages) || typeof model !== 'string') {
    return new Response('Invalid request', { status: 400 });
  }

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
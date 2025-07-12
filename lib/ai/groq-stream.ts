import type { GroqMessage } from './types';
import { groqClient } from './groq-client';

export async function* streamGroqChatCompletion({
  messages,
  model,
  temperature = 0.5,
  maxTokens = 1024,
  topP = 1,
  stop,
}: {
  messages: GroqMessage[];
  model: string;
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  stop?: string | string[] | null;
}) {
  const stream = groqClient.chat.completions.create({
    messages,
    model,
    temperature,
    max_completion_tokens: maxTokens,
    top_p: topP,
    stop: stop ?? undefined,
    stream: true,
  });

  for await (const chunk of stream) {
    yield chunk.choices[0]?.delta?.content ?? '';
  }
}
import { z } from 'zod';

export const groqContentPartSchema = z.union([
  z.object({ type: z.literal('text'), text: z.string().min(1) }),
  z.object({
    type: z.literal('image_url'),
    image_url: z.object({ url: z.string().url() }),
  }),
]);

export const groqMessageSchema = z.object({
  role: z.enum(['system', 'user', 'assistant']),
  content: z.union([z.string(), z.array(groqContentPartSchema)]),
});

export const groqChatRequestSchema = z.object({
  messages: z.array(groqMessageSchema),
  model: z.string(),
  stream: z.boolean().optional(),
  temperature: z.number().optional(),
  maxTokens: z.number().optional(),
  topP: z.number().optional(),
  stop: z.union([z.string(), z.array(z.string()), z.null()]).optional(),
});
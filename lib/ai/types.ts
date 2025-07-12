export type GroqRole = 'system' | 'user' | 'assistant';

export type GroqContentPart =
  | { type: 'text'; text: string }
  | { type: 'image_url'; image_url: { url: string } };

export interface GroqMessage {
  role: GroqRole;
  content: string | GroqContentPart[];
}
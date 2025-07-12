export type GroqRole = 'system' | 'user' | 'assistant';

export interface GroqMessage {
  role: GroqRole;
  content: string;
}
import { customProvider } from 'ai';
import { groq } from '@ai-sdk/groq';

export const myProvider = customProvider({
  languageModels: {
    'chat-model': groq('meta-llama/llama-4-scout-17b-16e-instruct', {
      apiKey: process.env.GROQ_API_KEY,
    }),
  },
});

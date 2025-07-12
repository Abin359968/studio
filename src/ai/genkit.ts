// IMPORTANT: This file is used to register all AI plugins and should not be modified by the user.
// If you want to change the model, please do so in the flow file.
'use server';

import {genkit, GenerationCommonConfig, registerPlugin} from 'genkit';
import {googleAI, GoogleAIGenerativeAIModel} from '@google-ai/generativelanguage';
import {GoogleAuth} from 'google-auth-library';

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
if (!GOOGLE_API_KEY) {
  throw new Error(
    'GOOGLE_API_KEY is not set. Please set it in your .env file.'
  );
}

export const ai = genkit({
  plugins: [
    registerPlugin(
      {
        name: 'google-ai',
        modelMappings: {
          'gemini-1.5-flash': GoogleAIGenerativeAIModel.GEMINI_1_5_FLASH,
          'gemini-1.5-pro': GoogleAIGenerativeAIModel.GEMINI_1_5_PRO,
          'gemini-2.0-flash-preview-image-generation':
            'gemini-2.0-flash-preview-image-generation' as any,
        },
      },
      async (options) => {
        return googleAI({
          apiKey: GOOGLE_API_KEY,
          authClient: new GoogleAuth(options?.authOptions),
          ...options,
        });
      }
    ),
  ],
  defaultModel: {
    name: 'gemini-1.5-flash',
    config: {
      temperature: 0.2,
    } as GenerationCommonConfig,
  },
  flowStateStore: 'firebase',
  traceStore: 'firebase',
  enableTracing: true,
});

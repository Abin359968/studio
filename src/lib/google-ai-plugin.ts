/**
 * @fileoverview A custom Genkit plugin for Google AI.
 * This is a workaround to avoid issues with the official @genkit-ai/google-ai package.
 */
import {
  type GenerateRequest,
  type GenerateResponse,
} from 'genkit';
import {genkitPlugin} from 'genkit/plugin';
import {
  GoogleGenerativeAI,
  type Content,
  type GenerationConfig,
  type SafetySetting,
} from '@google-ai/generativelanguage';

export const googleAI = genkitPlugin(
  {
    name: 'google-ai',
  },
  async (options?: {apiKey?: string}) => {
    const apiKey = options?.apiKey ?? process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      throw new Error(
        'The Google AI API key must be provided in the plugin options or as an environment variable (GOOGLE_API_KEY).'
      );
    }
    const client = new GoogleGenerativeAI(apiKey);

    return {
      models: {
        'gemini-2.0-flash-preview-image-generation': {
          label: 'Gemini 2.0 Flash Preview Image Generation',
          supports: {
            generate: true,
            multimodality: true,
          },
          async generate(request: GenerateRequest): Promise<GenerateResponse> {
            const model = client.getGenerativeModel({
              model: 'gemini-2.0-flash-preview-image-generation',
              generationConfig: request.config?.generationConfig as GenerationConfig,
              safetySettings: request.config?.safetySettings as SafetySetting[],
            });
            
            const contents: Content[] = request.prompt.map((part) => {
                if (part.text) {
                    return {role: 'user', parts: [{text: part.text}]};
                }
                if (part.media) {
                    const [header, data] = part.media.url.split(',');
                    const mimeType = header.split(':')[1].split(';')[0];
                    return {role: 'user', parts: [{inlineData: {mimeType, data}}]};
                }
                throw new Error('Unsupported prompt part');
            });

            const result = await model.generateContent({contents});

            const response = result.response;
            if (!response) {
              throw new Error('No response from model');
            }
            
            return {
              candidates: response.candidates || [],
              usage: {},
            };
          },
        },
      },
    };
  }
);

/**
 * @fileoverview A custom Genkit plugin for Google AI image generation.
 */
'use server';
import {
  GenerateRequest,
  generateRequestSchema,
  generateResponseSchema,
  type GenerateResponse,
} from 'genkit';
import {genkitPlugin} from 'genkit/plugin';
import {
  GoogleGenerativeAI,
  type Content,
  type Part,
} from '@google-ai/generativelanguage';

export interface PluginOptions {
  apiKey?: string;
}

export const googleAI = genkitPlugin(
  'google-ai-image',
  async (options: PluginOptions) => {
    const apiKey = options?.apiKey ?? process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      throw new Error(
        'The Google AI API key must be provided in the plugin options or as an environment variable (GOOGLE_API_KEY).'
      );
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    return {
      async generate(
        req: GenerateRequest
      ): Promise<GenerateResponse> {
        const {messages, model, config} = req;
        const generativeModel = genAI.getGenerativeModel({
          model: model.name,
        });

        const contents: Content[] = messages.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: msg.content.map(content => content as Part),
        }));

        const result = await generativeModel.generateContent({
          contents,
          generationConfig: config,
        });

        const response = result.response;
        const candidates = response.candidates?.map(candidate => ({
          index: candidate.index,
          finishReason: candidate.finishReason,
          content: {
            role: 'model',
            parts: candidate.content.parts.map(part => {
              if (part.fileData) {
                return {
                  media: {
                    url: `data:${part.fileData.mimeType};base64,${part.fileData.fileUri}`,
                    contentType: part.fileData.mimeType,
                  },
                };
              } else if (part.text) {
                return { text: part.text };
              }
              return {};
            }),
          },
        }));

        return {
          candidates: candidates || [],
          usage: {},
        };
      },
    };
  }
);

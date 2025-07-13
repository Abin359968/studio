'use server';
/**
 * @fileOverview A flow for generating a project image based on a description.
 *
 * - generateProjectImage - Generates an image for a project.
 * - GenerateProjectImageInput - The input type for the generateProjectImage function.
 * - GenerateProjectImageOutput - The return type for the generateProjectImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const GenerateProjectImageInputSchema = z.object({
  description: z.string().describe('The project description for image generation.'),
});
export type GenerateProjectImageInput = z.infer<typeof GenerateProjectImageInputSchema>;

const GenerateProjectImageOutputSchema = z.object({
  imageUrl: z.string().describe('The data URI of the generated image.'),
});
export type GenerateProjectImageOutput = z.infer<typeof GenerateProjectImageOutputSchema>;

export async function generateProjectImage(
  input: GenerateProjectImageInput
): Promise<GenerateProjectImageOutput> {
  return generateProjectImageFlow(input);
}

const generateProjectImageFlow = ai.defineFlow(
  {
    name: 'generateProjectImageFlow',
    inputSchema: GenerateProjectImageInputSchema,
    outputSchema: GenerateProjectImageOutputSchema,
  },
  async (input: GenerateProjectImageInput) => {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      console.log('GOOGLE_API_KEY not set, returning placeholder image.');
      return {
        imageUrl: 'https://placehold.co/600x400.png',
      };
    }

    try {
      const {media} = await ai.generate({
        model: 'googleai/gemini-2.0-flash-preview-image-generation',
        prompt: `Generate an image that visually represents the following project description. The image should be professional, high-quality, and suitable for a technology portfolio. Focus on the key concepts and technologies mentioned. Do not include any text in the image. Project description: "${input.description}"`,
        config: {
          responseModalities: ['IMAGE'],
        },
      });

      if (!media || !media.url) {
        throw new Error('Image generation failed to return media.');
      }

      return {imageUrl: media.url};
    } catch (e) {
      console.error('Error generating project image with Genkit:', e);
      return {
        imageUrl: 'https://placehold.co/600x400.png',
      };
    }
  }
);

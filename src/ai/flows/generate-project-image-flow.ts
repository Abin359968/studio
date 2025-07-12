/**
 * @fileOverview A Genkit flow for generating project images.
 */
'use server';

import {genkit} from 'genkit';
import {z} from 'genkit';
import {googleAI} from '@/lib/google-ai-plugin';

const ai = genkit({
  plugins: [googleAI()],
});

export const GenerateProjectImageInputSchema = z.object({
  title: z.string().describe('The title of the project.'),
  description: z.string().describe('A short description of the project.'),
});

export type GenerateProjectImageInput = z.infer<
  typeof GenerateProjectImageInputSchema
>;

export const GenerateProjectImageOutputSchema = z.object({
  imageUrl: z.string().describe('The data URI of the generated image.'),
});

export type GenerateProjectImageOutput = z.infer<
  typeof GenerateProjectImageOutputSchema
>;

export async function generateProjectImage(
  input: GenerateProjectImageInput
): Promise<GenerateProjectImageOutput> {
  const {title, description} = input;
  const prompt = `Generate a visually stunning and professional image for a software project titled "${title}". 
  The project is about: "${description}". The image should be abstract and represent concepts like technology, gaming, or virtual reality.
  Avoid text and logos. Focus on high-quality visuals.`;

  if (!process.env.GOOGLE_API_KEY) {
    console.warn("GOOGLE_API_KEY not found. Returning placeholder image.");
    return { imageUrl: "https://placehold.co/600x400.png" };
  }
  
  try {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: prompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media || !media.url) {
      throw new Error('Image generation failed: No media URL returned.');
    }

    return {imageUrl: media.url};
  } catch (error) {
    console.error('Error generating project image:', error);
    // Return a placeholder if generation fails
    return { imageUrl: "https://placehold.co/600x400.png" };
  }
}

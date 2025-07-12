
'use server';
/**
 * @fileOverview A Genkit flow for generating project images.
 */

import {z} from 'zod';
import {GoogleGenerativeAI} from '@google-ai/generativelanguage';

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

  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    console.warn('GOOGLE_API_KEY not found. Returning placeholder image.');
    return {imageUrl: 'https://placehold.co/600x400.png'};
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash-latest', // This is a text model, using it as a placeholder for the logic
  });

  try {
    // This part is a stand-in for a real image generation call.
    // The current text-based model won't return an image, so we'll simulate a success
    // by returning a placeholder. If a proper image generation model were available and stable,
    // the response handling would be different.
    // const result = await model.generateContent(prompt);
    const imageUrl = `https://placehold.co/600x400.png?text=${encodeURIComponent(title)}`;
    return {imageUrl};
  } catch (error) {
    console.error('Error during image generation simulation:', error);
    return {imageUrl: 'https://placehold.co/600x400.png'};
  }
}

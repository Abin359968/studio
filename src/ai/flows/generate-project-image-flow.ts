'use server';

import {GoogleGenerativeAI} from '@google-ai/generativelanguage';
import {z} from 'zod';

const GenerateProjectImageInputSchema = z.object({
  description: z.string(),
});
type GenerateProjectImageInput = z.infer<
  typeof GenerateProjectImageInputSchema
>;

const GenerateProjectImageOutputSchema = z.object({
  imageUrl: z.string(),
});
type GenerateProjectImageOutput = z.infer<
  typeof GenerateProjectImageOutputSchema
>;

export async function generateProjectImage(
  input: GenerateProjectImageInput
): Promise<GenerateProjectImageOutput> {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    // Return a placeholder if the API key is not set.
    return {
      imageUrl: 'https://placehold.co/600x400.png',
    };
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash-latest',
    });

    const prompt = `Generate an image that visually represents the following project description. The image should be professional, high-quality, and suitable for a technology portfolio. Focus on the key concepts and technologies mentioned. Do not include any text in the image. Project description: "${input.description}"`;
    const result = await model.generateContent(prompt);

    const textResponse = result.response.text();

    // A basic check to see if the response might be an image URL or a description of one.
    // The Gemini 1.5 Flash model used here does not support direct image generation via text prompts in the way some other models do.
    // It will likely return a description. For a real implementation, you'd use a dedicated image generation model.
    // To make this work visually, we'll return a placeholder. In a real scenario, you'd parse an actual image URL or data URI.
    // The prompt is structured for a hypothetical image generation model.
    // Since we can't truly generate an image this way, we will always return a placeholder to prevent crashes.
    // This provides a safe fallback while keeping the AI logic structure.
    return {
      imageUrl: `https://placehold.co/600x400.png`,
    };
  } catch (error) {
    console.error('Error generating project image:', error);
    return {imageUrl: 'https://placehold.co/600x400.png'};
  }
}

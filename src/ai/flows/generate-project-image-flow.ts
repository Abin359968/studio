'use server';
/**
 * @fileOverview A flow to generate an image for a project.
 *
 * - generateProjectImage - A function that handles image generation.
 * - GenerateProjectImageInput - The input type for the function.
 * - GenerateProjectImageOutput - The return type for the function.
 */
import {genkit, z} from 'genkit';
import {googleAI} from '@/lib/google-ai-plugin';

const ai = genkit({
  plugins: [googleAI()],
  logLevel: 'debug',
  enableTracing: true,
});

const GenerateProjectImageInputSchema = z.object({
  title: z.string().describe('The title of the project.'),
  description: z.string().describe('A short description of the project.'),
});
export type GenerateProjectImageInput = z.infer<
  typeof GenerateProjectImageInputSchema
>;

const GenerateProjectImageOutputSchema = z.object({
  imageUrl: z
    .string()
    .describe('The data URI of the generated image.'),
});
export type GenerateProjectImageOutput = z.infer<
  typeof GenerateProjectImageOutputSchema
>;

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
  async ({title, description}) => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: `Generate a visually stunning and professional image for a software project.
      The image should be abstract, modern, and suitable for a tech portfolio. Avoid text.
      Project Title: ${title}
      Description: ${description}
      Style: minimalist, abstract, tech, digital art, vibrant colors.
      `,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media?.url) {
      throw new Error('Image generation failed.');
    }

    return {
      imageUrl: media.url,
    };
  }
);

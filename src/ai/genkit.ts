/**
 * @fileoverview This file initializes the Genkit AI singleton with the Google AI plugin.
 *
 * It sets up the configuration for the generative AI models used in the application.
 * The `googleAI` plugin is configured to use the `gemini-pro` model for text generation
 * and the experimental `gemini-2.0-flash-preview-image-generation` model for image generation.
 * This setup allows the application to leverage Google's AI capabilities for various features.
 */
import {genkit} from 'genkit';
import {googleAI} from 'genkit/googleai';

export const ai = genkit({
  plugins: [
    googleAI({
      apiVersion: ['v1beta'],
    }),
  ],
  logSinks: [],
  enableTracing: false,
});

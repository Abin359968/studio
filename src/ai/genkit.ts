/**
 * @fileoverview This file initializes the Genkit AI singleton with the Google AI plugin.
 *
 * It sets up the configuration for the generative AI models used in the application.
 * This setup allows the application to leverage Google's AI capabilities for various features.
 */
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-ai';

export const ai = genkit({
  plugins: [
    googleAI({
      apiVersion: ['v1beta'],
    }),
  ],
  logSinks: [],
  enableTracing: false,
});

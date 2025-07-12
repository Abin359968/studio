/**
 * @fileoverview This file initializes the Genkit AI singleton.
 */
import {genkit} from 'genkit';
import {googleAI} from '@/lib/google-ai-plugin';

export const ai = genkit({
  plugins: [googleAI()],
});

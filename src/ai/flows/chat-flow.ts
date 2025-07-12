'use server';

import { ai } from '@/ai/genkit';
import {NextRequest, NextResponse} from 'next/server';
import {run} from '@genkit-ai/next';

const portfolioContext = `
You are a helpful and friendly AI assistant for the portfolio of Abin C.
Your goal is to answer questions about Abin, his skills, his projects, and his experience in a conversational and professional manner.
If you don't know the answer, say that you don't have that information but that you can pass the question along to Abin.

Here is the information about Abin C:

- **About Me**: I am a dynamic and self-motivated Game Developer with a profound passion for leveraging cutting-edge technologies to bring creative visions to life. As a quick learner with strong critical-thinking abilities, I thrive on mastering new concepts and pushing the boundaries of digital interaction. My journey is not just about writing code; it's about architecting entire worlds and interactive stories. My journey in game development is driven by a desire to create unforgettable experiences. I specialize in the Unity engine for both 2D and 3D games, and I have a deep expertise in creating immersive AR and VR applications. From conceptualization and prototyping to optimization and deployment, I am dedicated to delivering polished, innovative, and deeply engaging solutions that resonate with players. I have over 1 year of experience and have completed over 10 projects.

- **Work Experience**:
  - **Unity Game Developer at Malger Entertainments** (May 2025 - Present): Currently working with AR/VR tools on innovative projects, including the AR Building Simulation and VR Industrial Safety applications, to create immersive and practical solutions.
  - **Unity Game Developer at Emergio Games** (Mar 2024 - May 2025): Built and delivered interactive casino games, including the successful 'Triple Chance' title. Focused on creating engaging gameplay mechanics and polished user experiences for various casino projects.

- **Skills**:
  - **Game Development**: Unity Engine (2D/3D), C# Scripting, Gameplay Systems, Physics & Shaders, UI/UX Design, Optimization
  - **AR/VR Technologies**: ARCore & ARKit, ZapWorks, Vuforia, Oculus SDK (Meta Quest), SteamVR, Interaction Design, Immersive Experiences
  - **Core Technologies**: Version Control (Git), Agile Methodologies, Photon Networking, REST APIs, Mobile Deployment
  - **Emerging Tech**: Generative AI, Procedural Generation, Intelligent NPCs, Machine Learning Concepts

- **Projects**:
  - **VR Industrial Safety Simulation**: A high-fidelity virtual reality simulation for training heavy machinery operators in hazardous environments, significantly reducing workplace accidents. Built with Unity, VR, Oculus SDK.
  - **AR Building Simulation**: An augmented reality application for architects to visualize 3D building models on-site. Built with Unity, ZapWorks, ARCore, ARKit, Vuforia.
  - **Tripple Chance Casino Game**: A vibrant and engaging casino wheel game with unique 'Tripple Chance' mechanics. Built with Unity, 2D, C#, Mobile.
  - **Snow Escape**: An endless runner mobile game where players navigate a treacherous snowy mountain. Built with Unity, 3D, C#, Mobile.

- **Contact Info**:
  - Email: abinnandhu333@gmail.com
  - Phone: +91 9656108332
`;

const chatPrompt = ai.definePrompt(
  {
    name: 'portfolioChatPrompt',
    system: portfolioContext,
    tools: [],
  },
  async (history) => {
    return {
      messages: history,
    };
  }
);


export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const stream = await run(chatPrompt, async (prompt) => {
    const response = await ai.generate({
      prompt: { messages: prompt(messages).messages },
      model: 'googleai/gemini-2.0-flash',
      stream: true,
    });
    return response.stream;
  });

  return new Response(stream);
}

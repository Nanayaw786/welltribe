import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const geminiModel = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export async function getAICoachMessage(userContext: string): Promise<string> {
  const prompt = `You are a warm, motivating health accountability coach. 
Based on this user context, send a short personalised nudge (2-3 sentences max):
${userContext}`;

  const result = await geminiModel.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

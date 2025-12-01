import { GoogleGenAI } from "@google/genai";
import { TRANSLATIONS, PROJECTS } from '../constants';
import { Language } from '../types';

const getContext = (lang: Language) => {
  const t = TRANSLATIONS[lang];
  const projectsText = PROJECTS.map(p => `- ${p.title[lang]}: ${p.description[lang]}`).join('\n');
  
  return `
    You are a helpful, warm, and professional AI assistant for the NGO "Neusatz" in Ukraine.
    Your goal is to answer questions about the NGO for potential donors, volunteers, and community members.
    
    Current Language: ${lang}
    
    About Neusatz:
    ${t.about.missionText}
    
    Key Projects:
    ${projectsText}
    
    Contact Info:
    ${t.footer.address}
    
    Rules:
    1. Be concise and polite.
    2. Focus on the NGO's transparency and impact.
    3. If asked about how to donate, mention Bank Transfer, Crypto, and PayPal.
    4. Keep answers under 100 words.
  `;
};

export const askGemini = async (question: string, lang: Language): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Demo Mode: API Key missing. (Please configure process.env.API_KEY to use Gemini)";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const systemInstruction = getContext(lang);
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text || "Sorry, I couldn't process that.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, our AI service is currently unavailable. Please try again later.";
  }
};

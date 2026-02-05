import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;
  private chatSession: Chat | null = null;

  constructor() {
    // Fix: Initialize GoogleGenAI using process.env.API_KEY directly as per the @google/genai coding guidelines.
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async startChat() {
    this.chatSession = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    if (!this.chatSession) {
      await this.startChat();
    }
    
    try {
      const response = await this.chatSession!.sendMessage({ message });
      // Fix: Ensure the response text is accessed as a property, not a method, as per SDK requirements.
      return response.text || "Maaf, saya sedang mengalami kendala teknis. Mohon coba lagi nanti.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Mohon maaf, terjadi kesalahan saat memproses permintaan Anda.";
    }
  }
}

export const geminiService = new GeminiService();

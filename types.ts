
export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  location: string;
  description: string;
  imageUrl: string;
}

export interface WorkExperience {
  id: string;
  name: string;
  client: string;
  year: string;
  sector: 'Swasta' | 'Pemerintah';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

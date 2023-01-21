export type Land = "land" | "water" | "mountain";

export type Question = {
  id: number;
  question: string;
  options: [
    { id: number; text: string },
    { id: number; text: string },
    { id: number; text: string },
    { id: number; text: string }
  ];
  correct: number;
  theme: Land;
  done: boolean;
  knowledge: string;
  wrongAnswerCount: number;
};

export type BoardEmojis = {
  waterEmojis: string[];
  landEmojis: string[];
  mountainEmojis: string[];
};

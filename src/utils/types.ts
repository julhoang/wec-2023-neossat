export type Land = "land" | "water" | "mountain";

export type Question = {
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
};

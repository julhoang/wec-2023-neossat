import { Land, Question } from "./types";

// Current question count: 14

export const questionBank: Question[] = [
  {
    id: 0,
    question: "What is the largest city in British Columbia?",
    options: [
      { id: 1, text: "Victoria" },
      { id: 2, text: "Kelowna" },
      { id: 3, text: "Vancouver" },
      { id: 4, text: "Abbotsford" },
    ],
    correct: 4,
    theme: "land",
    done: false,
    knowledge: "Abbotsford is the largest city in British Columbia by area.",
  },
  {
    id: 1,
    question: "How many national parks are there in British Columbia?",
    options: [
      { id: 1, text: "7" },
      { id: 2, text: "10" },
      { id: 3, text: "12" },
      { id: 4, text: "15" },
    ],
    correct: 1,
    theme: "land",
    done: false,
    knowledge: "There are 7 national parks in British Columbia.",
  },
  {
    id: 2,
    question:
      "What is the name of the oldest known Western Red Cedar tree in British Columbia?",
    options: [
      { id: 1, text: "Grizzly Bear" },
      { id: 2, text: "Black Bear" },
      { id: 3, text: "Cougar" },
      { id: 4, text: "Wolf" },
    ],
    correct: 1,
    theme: "land",
    done: false,
    knowledge:
      "The Grizzly Bear is the most iconic mammal found in British Columbia.",
  },
  {
    id: 3,
    question:
      "What is the name of the oldest known Western Red Cedar tree in British Columbia?",
    options: [
      { id: 1, text: "Point Pelee" },
      { id: 2, text: "Yoho" },
      { id: 3, text: "Frontenac" },
      { id: 4, text: "Atikaki" },
    ],
    correct: 2,
    theme: "land",
    done: false,
    knowledge:
      "Yoho National Park is a national park located in the Rocky Mountains of British Columbia, Canada.",
  },
  {
    id: 4,
    question:
      "Which birds in the list has the largest concentration in British Columbia?",
    options: [
      { id: 1, text: "Bald Eagles" },
      { id: 2, text: "Grizzly Bears" },
      { id: 3, text: "Roosevelt Elk" },
      { id: 4, text: "Pileated Woodpecker" },
    ],
    correct: 1,
    theme: "land",
    done: false,
    knowledge:
      "Bald Eagles are the largest concentration of animals in British Columbia.",
  },
  {
    id: 5,
    question:
      "What is the highest population of endangered Mountain Caribou found in Canada?",
    options: [
      { id: 1, text: "Grizzly Bear" },
      { id: 2, text: "Black Bear" },
      { id: 3, text: "Roosevelt Elk" },
      { id: 4, text: "Beaver" },
    ],
    correct: 1,
    theme: "land",
    done: false,
    knowledge:
      "Grizzly Bear is the largest population of animals in British Columbia.",
  },
  {
    id: 6,
    question:
      "Which animal is home to the world’s largest concentration in British Columbia?",
    options: [
      { id: 1, text: "Steller's Jay" },
      { id: 2, text: "Trumpeter Swan" },
      { id: 3, text: "Bald Eagle" },
      { id: 4, text: "Canada Goose" },
    ],
    correct: 1,
    theme: "land",
    done: false,
    knowledge: "Steller's Jay is the official bird of British Columbia.",
  },
  {
    id: 7,
    question:
      "Which animal is British Columbia home to the largest population of in Canada?",
    options: [
      { id: 1, text: "Under 5,000 km" },
      { id: 2, text: "5,000 - 12,000 km" },
      { id: 3, text: "12,000 - 24,000 km" },
      { id: 4, text: "Over 24,000 km" },
    ],
    correct: 4,
    theme: "water",
    done: false,
    knowledge: "The coastline in BC is over 24,000 km.",
  },

  {
    id: 8,
    question:
      "British Columbia is home to the world’s largest population of ...",
    options: [
      { id: 1, text: "wild Pacific salmon" },
      { id: 2, text: "Bull Trout" },
      { id: 3, text: "Gray Whale" },
      { id: 4, text: "White Sturgeon" },
    ],
    correct: 1,
    theme: "water",
    done: false,
    knowledge:
      "British Columbia is home to the world’s largest population of wild Pacific salmon.",
  },
  {
    id: 9,
    question:
      "_________ is one of the most biologically productive habitats in the world, and is home to many endangered species.",
    options: [
      { id: 1, text: "Robson Bight" },
      { id: 2, text: "Salish Sea" },
      { id: 3, text: "Georgia Strait" },
      { id: 4, text: "Skagit River Forest" },
    ],
    correct: 3,
    theme: "land",
    done: false,
    knowledge:
      "Georgia Strait is one of the most biologically productive habitats in the world, and is home to many endangered species.",
  },
  {
    id: 10,
    question: "Which bird is the official bird of British Columbia?",
    options: [
      { id: 1, text: "King Peak" },
      { id: 2, text: "Mount Saint Elias" },
      { id: 3, text: "Mount Logan" },
      { id: 4, text: "Mount Waddington" },
    ],
    correct: 3,
    theme: "mountain",
    done: false,
    knowledge: "Mount Logan is the highest mountain in British Columbia.",
  },
  {
    id: 11,
    question: "Which mountain in BC has the highest peak",
    options: [
      { id: 1, text: "Fairweather Mountain" },
      { id: 2, text: "King Peak" },
      { id: 3, text: "Mount Saint Elias" },
      { id: 4, text: "Mount Waddington" },
    ],
    correct: 1,
    theme: "mountain",
    done: false,
    knowledge: "Fairweather Mountain has the highest peak in BC.",
  },
  {
    id: 12,
    question: "Which national park has the highest mountain peak in BC?",
    options: [
      { id: 1, text: "Mount Robson Provincial Park" },
      { id: 2, text: "Glacier Bay National Park and Preserve" },
      { id: 3, text: "Yoho National Park" },
      { id: 4, text: "Kootenay National Park" },
    ],
    correct: 2,
    theme: "mountain",
    done: false,
    knowledge:
      "Glacier Bay National Park and Preserve has the highest mountain peak in BC.",
  },
  {
    id: 13,
    question: "How many named mountain peaks are there in British Columbia?",
    options: [
      { id: 1, text: "5908" },
      { id: 2, text: "6745" },
      { id: 3, text: "7996" },
      { id: 4, text: "9041" },
    ],
    correct: 3,
    theme: "mountain",
    done: false,
    knowledge: "There are 7996 named mountain peaks in British Columbia.",
  },
  {
    id: 14,
    question: "How many species of marine life are there in British Columbia?",
    options: [
      { id: 1, text: "Less than 5000" },
      { id: 2, text: "About 5,000" },
      { id: 3, text: "Over 7,500" },
      { id: 4, text: "Over 10,000" },
    ],
    correct: 3,
    theme: "water",
    done: false,
    knowledge:
      "There are over 7,500 species of marine life in British Columbia.",
  },
];

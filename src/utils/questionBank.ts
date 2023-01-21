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
  },
  {
    id: 4,
    question: "What is the most iconic mammal found in British Columbia?",
    options: [
      { id: 1, text: "Bald Eagles" },
      { id: 2, text: "Grizzly Bears" },
      { id: 3, text: "Roosevelt Elk" },
      { id: 4, text: "Pileated Woodpecker" },
    ],
    correct: 1,
    theme: "land",
    done: false,
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
  },
  {
    id: 6,
    question:
      "Which animal is home to the world’s largest concentration in British Columbia coastal temperate rainforest?",
    options: [
      { id: 1, text: "Great Blue Heron" },
      { id: 2, text: "Trumpeter Swan" },
      { id: 3, text: "Bald Eagle" },
      { id: 4, text: "Canada Goose" },
    ],
    correct: 1,
    theme: "land",
    done: false,
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
  },

  {
    id: 8,
    question:
      "... is one of the most biologically productive habitats in the world, and is home to many endangered species.",
    options: [
      { id: 1, text: "Robson Bight" },
      { id: 2, text: "Salish Sea" },
      { id: 3, text: "Georgia Strait" },
      { id: 4, text: "Skagit River Forest" },
    ],
    correct: 3,
    theme: "land",
    done: false,
  },
  {
    id: 9,
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
  },
  {
    id: 12,
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
  },
  {
    id: 13,
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
  },
  {
    id: 14,
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
  },
];

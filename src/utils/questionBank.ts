import { Land, Question } from "./types";

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
    wrongAnswerCount: 0,
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
    wrongAnswerCount: 0,
  },
  {
    id: 2,
    question: "Which animal below is the most iconic in British Columbia?",
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
    wrongAnswerCount: 0,
  },
  {
    id: 3,
    question: "Which one of these national parks is in British Columbia?",
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
    wrongAnswerCount: 0,
  },
  {
    id: 4,
    question:
      "Which birds in the list has the largest concentration in British Columbia?",
    options: [
      { id: 1, text: "Bald Eagles" },
      { id: 2, text: "Northern Spotted Owl" },
      { id: 3, text: "Great Blue Heron" },
      { id: 4, text: "Pileated Woodpecker" },
    ],
    correct: 1,
    theme: "mountain",
    done: false,
    knowledge:
      "Bald Eagles are the largest concentration of animals in British Columbia.",
    wrongAnswerCount: 0,
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
    wrongAnswerCount: 0,
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
    wrongAnswerCount: 0,
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
    wrongAnswerCount: 0,
  },

  {
    id: 8,
    question:
      "British Columbia is home to the world’s largest population of _________",
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
    wrongAnswerCount: 0,
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
    wrongAnswerCount: 0,
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
    wrongAnswerCount: 0,
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
    wrongAnswerCount: 0,
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
    wrongAnswerCount: 0,
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
    wrongAnswerCount: 0,
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
    wrongAnswerCount: 0,
  },
  {
    id: 15,
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
    wrongAnswerCount: 0,
  },
  {
    id: 16,
    question:
      "The coastal temperate rainforest of British Columbia is home to the world’s largest concentration of ___________",
    options: [
      { id: 1, text: "Hawks" },
      { id: 2, text: "Bald Eagles" },
      { id: 3, text: "Great Blue Heron" },
      { id: 4, text: "Pileated Woodpecker." },
    ],
    correct: 2,
    theme: "mountain",
    done: false,
    knowledge:
      "The coastal temperate rainforest of British Columbia is home to the world’s largest concentration of Bald Eagles.",
    wrongAnswerCount: 0,
  },
  {
    id: 17,
    question:
      "The coastal temperate rainforest of British Columbia is home to the world’s largest concentration of _________",
    options: [
      { id: 1, text: "Hawks" },
      { id: 2, text: "Bald Eagles" },
      { id: 3, text: "Great Blue Heron" },
      { id: 4, text: "Pileated Woodpecker." },
    ],
    correct: 2,
    theme: "mountain",
    done: false,
    knowledge:
      "The coastal temperate rainforest of British Columbia is home to the world’s largest concentration of Bald Eagles.",
    wrongAnswerCount: 0,
  },
  {
    id: 18,
    question: "What the approximate population of wild salmon in BC?",
    options: [
      { id: 1, text: "Under 1 millions" },
      { id: 2, text: "1 - around 10 millions" },
      { id: 3, text: "11 - around 18 millions" },
      { id: 4, text: "Over 19 millions" },
    ],
    correct: 4,
    theme: "water",
    done: false,
    knowledge: "There are over 19 millions of wild salmon in BC.",
    wrongAnswerCount: 0,
  },
  {
    id: 19,
    question: "British Columbia is home to the world’s largest ______",
    options: [
      { id: 1, text: "kelp" },
      { id: 2, text: "coral reef" },
      { id: 3, text: "Pacific Salmon" },
      { id: 4, text: "Gray Whale" },
    ],
    correct: 1,
    theme: "water",
    done: false,
    knowledge: "British Columbia is home to the world’s largest kelp forest.",
    wrongAnswerCount: 0,
  },
  {
    id: 20,
    question:
      "There are over 30,000 _____ off the coast of British Columbia, with the majority of them situated in the Inside Passage. ",
    options: [
      { id: 1, text: "mountain peaks" },
      { id: 2, text: "coral reef" },
      { id: 3, text: "islands" },
      { id: 4, text: "Gray Whale" },
    ],
    correct: 3,
    theme: "water",
    done: false,
    knowledge:
      "There are over 30,000 islands off the coast of British Columbia, with the majority of them situated in the Inside Passage.",
    wrongAnswerCount: 0,
  },
  {
    id: 21,
    question:
      "There are over 30,000 _____ off the coast of British Columbia, with the majority of them situated in the Inside Passage. ",
    options: [
      { id: 1, text: "mountain peaks" },
      { id: 2, text: "coral reef" },
      { id: 3, text: "islands" },
      { id: 4, text: "Gray Whale" },
    ],
    correct: 3,
    theme: "water",
    done: false,
    knowledge:
      "There are over 30,000 islands off the coast of British Columbia, with the majority of them situated in the Inside Passage.",
    wrongAnswerCount: 0,
  },
  {
    id: 22,
    question:
      "About ___ of electricity in B.C. is produced from hydroelectric sources.",
    options: [
      { id: 1, text: "around 30%" },
      { id: 2, text: "around 50%" },
      { id: 3, text: "around 70%" },
      { id: 4, text: "around 90%" },
    ],
    correct: 4,
    theme: "water",
    done: false,
    knowledge:
      "About 87% of electricity in B.C. is produced from hydroelectric sources.",
    wrongAnswerCount: 0,
  },
  {
    id: 23,
    question:
      "About ___ of electricity in B.C. is produced from hydroelectric sources.",
    options: [
      { id: 1, text: "around 30%" },
      { id: 2, text: "around 50%" },
      { id: 3, text: "around 70%" },
      { id: 4, text: "around 90%" },
    ],
    correct: 4,
    theme: "water",
    done: false,
    knowledge:
      "About 87% of electricity in B.C. is produced from hydroelectric sources.",
    wrongAnswerCount: 0,
  },
  {
    id: 24,
    question:
      "British Columbia is one of the top 3 producing regions of _______ in the world.",
    options: [
      { id: 1, text: "cranberries and blueberries" },
      { id: 2, text: "tomatoes" },
      { id: 3, text: "apples" },
      { id: 4, text: "grapes" },
    ],
    correct: 1,
    theme: "land",
    done: false,
    knowledge:
      "British Columbia is one of the top 3 producing regions of cranberries and blueberries in the world.",
    wrongAnswerCount: 0,
  },
  {
    id: 25,
    question:
      "BC’s capital city Victoria, located on Vancouver Island, has an annual flower count at the end of the winter. Each year the community gets together to count more than _______ blooms.",
    options: [
      { id: 1, text: "less than 100,000 millions" },
      { id: 2, text: "around 100,000 millions" },
      { id: 3, text: "around 500,000 millions" },
      { id: 4, text: "more than 1 billion" },
    ],
    correct: 4,
    theme: "land",
    done: false,
    knowledge: "Each year Victoria count more than 1 billion flower blooms.",
    wrongAnswerCount: 0,
  },
];

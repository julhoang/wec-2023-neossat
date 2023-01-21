import QuestionCard from "../components/QuestionCard";
import { Head, Main } from "next/document";
import { questionBank } from "../utils/questionBank";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  StackDivider,
} from "@chakra-ui/react";
import { Question } from "@/utils/types";
import { useState } from "react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [showSubmit, setShowSubmit] = useState(false);

  function prevQuestion(currentQuestion: number) {
    return setCurrentQuestion(currentQuestion - 1);
  }

  function nextQuestion(currentQuestion: number) {
    return setCurrentQuestion(currentQuestion + 1);
  }

  function selectOption(answer: number, ques: number) {
    const currentSelected: number[] = selectedOptions;
    currentSelected[ques] = answer;
    setSelectedOptions(currentSelected);
  }

  function submitQuiz() {
    if (selectedOptions.length < 9) {
      alert("Please answer all questions");
    } else {
      console.log("submit quiz");
    }
  }

  return (
    <VStack spacing={10} w="50%" my={40}>
      {currentQuestion < 10 && (
        <>
          <Box w="80%">
            <QuestionCard
              cardData={questionBank[currentQuestion]}
              selectOption={selectOption}
              currentQuestion={currentQuestion}
            />
          </Box>
        </>
      )}

      <HStack spacing="4">
        {currentQuestion > 0 && (
          <Button
            onClick={() => {
              prevQuestion(currentQuestion);
            }}
          >
            Previous
          </Button>
        )}

        {currentQuestion < 9 ? (
          <Button
            onClick={() => {
              nextQuestion(currentQuestion);
            }}
          >
            Next
          </Button>
        ) : (
          <Button
            onClick={() => {
              submitQuiz();
            }}
          >
            Submit
          </Button>
        )}
      </HStack>
    </VStack>
  );
};

export default Quiz;

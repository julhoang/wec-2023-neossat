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
import { useEffect, useState } from "react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [wrongAnsID, setWrongAnsID] = useState();
  const [showSubmit, setShowSubmit] = useState(false);

  //create quiz
  //get random 10 questions. if they were in localstorage, then get the other random ones

  useEffect(() => {
    createQuiz();
  }, []);

  function createQuiz() {
    const obj = localStorage.getItem("q");
    const questionList: Question[] = [];
 
    if (obj) {
      const items = JSON.parse(obj);

      for (let i = 0; i < 10; i++) {
        if (!questionList.includes(items[i])) {
          questionList[i] = items[i];
        }
      }

      if (questionList.length == 0) {
        for (let i = 0; i < 10; i++) {
          questionList[i] = items[i];
        }
      }

      if (questionList.length < 10) {
        for (let i = 0; i < 10; i++) {
          questionList[i] = items[i];
        }
      }
    } else {
      for (let i = 0; i < 10; i++) {
        questionList[i] = questionBank[i];
      }
    }
    console.log(questionList);

    localStorage.setItem("q", JSON.stringify(questionList))

    // questionList.map((ques) => {
    //   localStorage.setItem("q", JSON.stringify({ id: ques.id, count: 0 }));
    // });
  }

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
      verifyAnswers();
      console.log("submit quiz");
    }
  }

  function verifyAnswers() {
    questionBank.map((ques) => {});
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

import QuestionCard from "../components/QuestionCard";
import { Head, Main } from "next/document";
import { questionBank } from "../utils/questionBank";
import { Box, Button, Card, CardBody, CardHeader } from "@chakra-ui/react";
import { Question } from "@/utils/types";
import { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

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
    setCurrentQuestion(0);
    if (selectedOptions.length < 9) {
      alert("Please answer all questions");
    } else {
      console.log("submit quiz");
    }
  }

  return (
    <>
      {currentQuestion < 10 && (
        <Box w="80%">
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <CardHeader>{questionBank[currentQuestion].question}</CardHeader>
            <CardBody>
              {questionBank[currentQuestion].options.map((option) => {
                return (
                  <Button
                    key={option.id}
                    onClick={() => {
                      selectOption(option.id, questionBank[currentQuestion].id);
                      console.log(selectedOptions);
                    }}
                  >
                    {option.text}
                  </Button>
                );
              })}
            </CardBody>
          </Card>
        </Box>
      )}

      {currentQuestion > 0 && (
        <>
          <Button
            onClick={() => {
              prevQuestion(currentQuestion);
            }}
          >
            Previous
          </Button>
        </>
      )}

      {currentQuestion < 10 ? (
        <>
          <Button
            onClick={() => {
              nextQuestion(currentQuestion);
            }}
          >
            Next
          </Button>
        </>
      ) : (
        <>
          {/* {selectedOptions.length==9 && ()} */}
          <Button
            onClick={() => {
              submitQuiz();
            }}
          >
            Submit
          </Button>
        </>
      )}
    </>
  );
};

export default Quiz;

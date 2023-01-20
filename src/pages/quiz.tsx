import QuestionCard from "../components/QuestionCard";
import { Head, Main } from "next/document";
import { questionBank } from "../utils/questionBank";
import { Box, Button, Card, CardBody, CardHeader } from "@chakra-ui/react";
import { Question } from "@/utils/types";
import { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  function updateQuestion(currentQuestion: number) {
    return setCurrentQuestion(currentQuestion + 1);
  }

  function submitQuiz() {
    setCurrentQuestion(0);
    console.log("submit quiz");
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
                return <>{option.text}</>;
              })}
            </CardBody>
          </Card>
        </Box>
      )}

      {currentQuestion < 10 ? (
        <>
          <Button
            onClick={() => {
              updateQuestion(currentQuestion);
            }}
          />
        </>
      ) : (
        <>
          <Button
            onClick={() => {
              submitQuiz();
            }}
          />
        </>
      )}
    </>
  );
};

export default Quiz;

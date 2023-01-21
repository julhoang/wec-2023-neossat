import { questionBank } from "../utils/questionBank";
import { Box, Heading } from "@chakra-ui/react";
import { Question } from "@/utils/types";
import { useEffect, useState } from "react";
import { VStack } from "@chakra-ui/react";
import QuizQuestions from "@/components/QuizQuestions";
import QuestionDisplay from "@/components/QuestionDisplay";
import QuizButtons from "@/components/QuizButtons";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: number;
  }>({});
  const [questionList, setQuestionList] = useState<Question[]>([]);
  const [quizDone, setQuizDone] = useState(false);

  useEffect(() => {
    const obj = localStorage.getItem("explore-bc-questions");
    let allQuestions: Question[] = [];

    if (obj) {
      const items = JSON.parse(obj) as Question[];
      allQuestions = items;
    } else {
      allQuestions = questionBank;
    }

    const undoneQuestions = allQuestions.filter((item) => !item.done);
    const selectedQuestions = undoneQuestions.slice(0, 10);

    if (selectedQuestions.length < 10) {
      const remainingQuestions = questionBank.filter(
        (item) => !item.done && !undoneQuestions.includes(item)
      );
      const randomQuestions = remainingQuestions.sort(
        () => 0.5 - Math.random()
      );
      const finalQuestions = randomQuestions.slice(
        0,
        10 - selectedQuestions.length
      );
      setQuestionList([...selectedQuestions, ...finalQuestions]);
    } else {
      setQuestionList(selectedQuestions);
    }

    // Update the questions in local storage
    const correctQuestions = allQuestions.map((item) => {
      if (questionList.includes(item)) {
        item.done = true;
      }
      return item;
    });

    localStorage.setItem(
      "explore-bc-questions",
      JSON.stringify(correctQuestions)
    );
  }, []);

  const prevQuestion = () => setCurrentQuestion(currentQuestion - 1);

  const nextQuestion = () => setCurrentQuestion(currentQuestion + 1);

  const selectOption = (question: number, answer: number) => {
    setSelectedOptions({ ...selectedOptions, [question]: answer });
  };

  const [correctQs, setCorrectQs] = useState(0);

  const onSubmit = () => {
    setQuizDone(true);

    let correct = 0;
    questionList.forEach((question, index) => {
      if (question.correct === selectedOptions[index]) {
        correct++;
      }
    });

    setCorrectQs(correct);
  };

  return (
    <VStack p={8} spacing={8}>
      <Heading fontSize="5xl">ExploreBC Quiz</Heading>
      <QuizButtons quizDone={quizDone} />
      {quizDone ? (
        <VStack>
          <Heading>Quiz Done!</Heading>
          <Heading>You got {correctQs} out of 10 questions correct</Heading>
          {questionList.map((question, index) => (
            <Box w="80%">
              <QuestionDisplay
                index={index}
                question={question}
                selectedAnswer={selectedOptions[index]}
              />
            </Box>
          ))}
        </VStack>
      ) : (
        <Box w="80%">
          <QuizQuestions
            currentQuestion={currentQuestion}
            selectedOptions={selectedOptions}
            selectOption={selectOption}
            nextQuestion={nextQuestion}
            prevQuestion={prevQuestion}
            questionList={questionList}
            onSubmit={onSubmit}
          />
        </Box>
      )}
    </VStack>
  );
};

export default Quiz;

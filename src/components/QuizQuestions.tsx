import { Question } from "@/utils/types";
import { VStack, HStack, Button, Box } from "@chakra-ui/react";
import QuestionCard from "./QuestionCard";

const QuizQuestions = ({
  currentQuestion,
  selectedOptions,
  selectOption,
  nextQuestion,
  prevQuestion,
  questionList,
  onSubmit,
}: {
  currentQuestion: number;
  selectedOptions: { [key: number]: number };
  selectOption: (question: number, answer: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  questionList: Question[];
  onSubmit: () => void;
}) => {
  return (
    <VStack spacing={8}>
      {currentQuestion < 10 && (
        <Box w="80%">
          <QuestionCard
            cardData={questionList[currentQuestion]}
            selectOption={selectOption}
            selectedAnswer={selectedOptions[currentQuestion]}
            currentQuestion={currentQuestion}
          />
        </Box>
      )}

      <HStack justify="space-between" w="80%">
        <Button
          fontSize="2xl"
          onClick={prevQuestion}
          py={8}
          isDisabled={currentQuestion <= 0}
        >
          Previous
        </Button>

        {currentQuestion < 9 ? (
          <Button fontSize="2xl" onClick={nextQuestion} py={8}>
            Next
          </Button>
        ) : (
          <Button fontSize="2xl" onClick={onSubmit} py={8}>
            Submit
          </Button>
        )}
      </HStack>
    </VStack>
  );
};

export default QuizQuestions;

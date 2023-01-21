import { Question } from "@/utils/types";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  Button,
  Box,
  HStack,
  VStack,
} from "@chakra-ui/react";

const QuestionDisplay = ({
  question,
  index,
  selectedAnswer,
}: {
  question: Question;
  index: number;
  selectedAnswer: number;
}) => {
  return (
    <Card direction={{ base: "column" }} variant="outline">
      <CardHeader>
        <VStack align="start">
          <Heading fontSize="2xl">
            {index + 1}. {question.question}
          </Heading>
          <Heading
            fontSize="2xl"
            color={
              question.correct === selectedAnswer ? "green.600" : "red.600"
            }
          >
            {question.correct === selectedAnswer
              ? "Correct"
              : !selectedAnswer
              ? "Not Answered"
              : "Incorrect"}
          </Heading>
        </VStack>
      </CardHeader>
      <CardBody>
        <Stack spacing="4">
          {question.options.map((option: any) => {
            return (
              <Box
                borderRadius="lg"
                key={option.id}
                bgColor={
                  option.id === question.correct && selectedAnswer === option.id
                    ? "green.300"
                    : option.id === selectedAnswer
                    ? "red.300"
                    : option.id === question.correct
                    ? "green.300"
                    : "gray.100"
                }
                p={8}
              >
                <Heading fontSize="2xl" fontWeight="normal">
                  {option.text}
                </Heading>
              </Box>
            );
          })}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default QuestionDisplay;

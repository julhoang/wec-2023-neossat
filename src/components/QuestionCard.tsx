import {
  HStack,
  Heading,
  ButtonGroup,
  Button,
  Card,
  CardBody,
  CardHeader,
  Stack,
} from "@chakra-ui/react";
import { Question } from "../utils/types";

const QuestionCard = ({
  cardData,
  selectOption,
  currentQuestion,
  selectedAnswer,
}: {
  cardData?: Question;
  selectOption: (question: number, answer: number) => void;
  currentQuestion: number;
  selectedAnswer: number;
}) => {
  return (
    <Card direction={{ base: "column" }} variant="outline">
      <CardHeader>
        <Heading fontSize="2xl">
          {currentQuestion + 1}. {cardData?.question}
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack spacing="4">
          {cardData?.options.map((option: any) => {
            return (
              <Button
                key={option.id}
                onClick={() => {
                  selectOption(cardData.id, option.id);
                }}
                isActive={selectedAnswer === option.id}
                py={8}
                _active={{
                  bg: "blue.200",
                }}
              >
                <Heading fontSize="2xl" fontWeight="normal">
                  {option.text}
                </Heading>
              </Button>
            );
          })}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default QuestionCard;

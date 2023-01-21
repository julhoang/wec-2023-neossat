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
}: {
  cardData: Question;
  selectOption: any;
  currentQuestion: number;
}) => {
  return (
    <Card direction={{ base: "column" }} variant="outline">
      <CardHeader>
        {currentQuestion + 1}. {cardData.question}
      </CardHeader>
      <CardBody>
        <Stack spacing="4">
          {cardData.options.map((option: any) => {
            return (
              <Button
                key={option.id}
                onClick={() => {
                  selectOption(option.id, cardData.id);
                }}
              >
                {option.text}
              </Button>
            );
          })}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default QuestionCard;

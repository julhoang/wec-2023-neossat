import {
  HStack,
  Heading,
  ButtonGroup,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";
import { Question } from "../utils/types";

const QuestionCard = ({cardData}: {cardData: Question}) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <CardHeader>{cardData.question}</CardHeader>
      <CardBody>
        {cardData.options.map((option) => {
          return <div>{option.text}</div>;
        })}
      </CardBody>
    </Card>
  );
};

export default QuestionCard;

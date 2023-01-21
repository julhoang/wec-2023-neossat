import { ButtonGroup, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const QuizButtons = ({ quizDone }: { quizDone: boolean }) => {
  const router = useRouter();

  return (
    <ButtonGroup>
      <Button
        size="lg"
        fontSize="2xl"
        bgColor="blue.200"
        _hover={{
          bgColor: "blue.400",
        }}
        onClick={() => router.push("/game")}
      >
        Play the game
      </Button>
      {quizDone && (
        <Button
          size="lg"
          fontSize="2xl"
          bgColor="green.300"
          _hover={{
            bgColor: "green.500",
          }}
          onClick={() => router.reload()}
        >
          Try out the quiz again
        </Button>
      )}
    </ButtonGroup>
  );
};

export default QuizButtons;

import { ButtonGroup, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const GameButtons = () => {
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
        Play again
      </Button>
      <Button
        size="lg"
        fontSize="2xl"
        bgColor="green.300"
        _hover={{
          bgColor: "green.500",
        }}
        onClick={() => router.push("/quiz")}
      >
        Try out the quiz
      </Button>
    </ButtonGroup>
  );
};

export default GameButtons;

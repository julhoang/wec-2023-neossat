import { Center, Heading, VStack } from "@chakra-ui/react";

const Results = () => {
  return (
    <Center w="100%" h="100vh">
      <VStack spacing={10}>
        <Heading size="2xl">You're done!</Heading>
        <Heading size="xl">You found 4 out of the 5 emojis!</Heading>
      </VStack>
    </Center>
  );
};

export default Results;

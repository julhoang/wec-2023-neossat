import { VStack, Heading, Progress, Button, Box } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <VStack minW="300px" bgColor="gray.200" p={4} align="self-start">
      <Heading>Hello, John!</Heading>
      <Heading size="md">Your Knowledge Progress</Heading>
      <Heading size="sm">Land</Heading>
      <Progress value={30} colorScheme="green" w="100%" />
      <Heading size="sm">Water</Heading>
      <Progress value={60} colorScheme="blue" w="100%" />
      <Heading size="sm">Mountain</Heading>
      <Progress value={10} colorScheme="gray" w="100%" />
      <Box h="30px" />
      <Button w="100%">Instructions</Button>
      <Button w="100%">Try for the leaderboard!</Button>
    </VStack>
  );
};

export default Sidebar;

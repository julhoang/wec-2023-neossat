import GameButtons from "@/components/GameButtons";
import {
  targetLandEmojis,
  targetMountainEmojis,
  targetWaterEmojis,
} from "@/utils/constants";
import { Center, Heading, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Results = () => {
  const router = useRouter();

  const { foundEmojis } = router.query as {
    foundEmojis: string;
  };

  const allTarget = [
    ...targetLandEmojis,
    ...targetWaterEmojis,
    ...targetMountainEmojis,
  ];

  const obj = foundEmojis && foundEmojis.split(",");

  return (
    <Center w="100%" h="100vh">
      <VStack spacing={10}>
        <Heading size="2xl">You're done!</Heading>
        <Heading size="xl">
          {obj
            ? `You found ${obj.length} out of 6 emojis!`
            : "You found no emojis in time 😢"}
        </Heading>
        {obj && <Heading size="xl">You found: {obj}</Heading>}
        {obj && obj.length < 6 && (
          <Heading size="xl">
            You missed: {allTarget.filter((emj) => !foundEmojis.includes(emj))}
          </Heading>
        )}
        <GameButtons />
      </VStack>
    </Center>
  );
};

export default Results;

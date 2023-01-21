import {
  targetLandEmojis,
  targetMountainEmojis,
  targetWaterEmojis,
} from "@/utils/constants";
import { Land } from "@/utils/types";
import { VStack, Heading, Button } from "@chakra-ui/react";
import Timer from "./Timer";

const LeftSidebar = ({
  gridType,
  setGridType,
  foundEmojis,
}: {
  gridType: Land;
  setGridType: (gridType: Land) => void;
  foundEmojis: string[];
}) => {
  return (
    <VStack minW="300px" p={4} spacing={5}>
      <Timer foundEmojis={foundEmojis} />
      <Heading>Places</Heading>
      <VStack w="100%" align="stretch">
        <Button
          size="lg"
          fontSize="2xl"
          bgColor="blue.200"
          _hover={{
            bgColor: "blue.400",
          }}
          fontWeight={gridType === "water" ? "bold" : "normal"}
          onClick={() => setGridType("water")}
        >
          Sea
        </Button>
        <Button
          size="lg"
          fontSize="2xl"
          bgColor="green.300"
          _hover={{
            bgColor: "green.500",
          }}
          fontWeight={gridType === "land" ? "bold" : "normal"}
          onClick={() => setGridType("land")}
        >
          Land
        </Button>

        <Button
          size="lg"
          fontSize="2xl"
          bgColor="gray.400"
          _hover={{
            bgColor: "gray.600",
          }}
          fontWeight={gridType === "mountain" ? "bold" : "normal"}
          onClick={() => setGridType("mountain")}
        >
          Sky
        </Button>
      </VStack>
      <Heading>Find these:</Heading>
      <Heading size="4xl" p={4}>
        {gridType === "land" &&
          targetLandEmojis.filter((emoji) => !foundEmojis.includes(emoji))}
        {gridType === "water" &&
          targetWaterEmojis.filter((emoji) => !foundEmojis.includes(emoji))}
        {gridType === "mountain" &&
          targetMountainEmojis.filter((emoji) => !foundEmojis.includes(emoji))}
      </Heading>
    </VStack>
  );
};

export default LeftSidebar;

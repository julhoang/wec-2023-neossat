import { Land } from "@/utils/types";
import { VStack, Heading, Progress, Button, Box } from "@chakra-ui/react";
import Timer from "./Timer";

const LeftSidebar = ({
  gridType,
  setGridType,
}: {
  gridType: Land;
  setGridType: (gridType: Land) => void;
}) => {
  return (
    <VStack minW="300px" p={4} align="self-start">
      <Timer />
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
        bgColor="blue.200"
        _hover={{
          bgColor: "blue.400",
        }}
        fontWeight={gridType === "water" ? "bold" : "normal"}
        onClick={() => setGridType("water")}
      >
        Water
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
        Mountain
      </Button>
    </VStack>
  );
};

export default LeftSidebar;

import { Land } from "@/utils/types";
import { HStack, Heading, ButtonGroup, Button } from "@chakra-ui/react";

const Header = ({
  gridType,
  setGridType,
}: {
  gridType: Land;
  setGridType: (gridType: Land) => void;
}) => {
  return (
    <HStack my={4} px={4} py={1} justify="space-between">
      <Heading size="2xl">Explore BC</Heading>
      <ButtonGroup isAttached>
        <Button
          size="lg"
          fontSize="2xl"
          bgColor="green.300"
          fontWeight={gridType === "land" ? "bold" : "normal"}
          onClick={() => setGridType("land")}
        >
          Land
        </Button>
        <Button
          size="lg"
          fontSize="2xl"
          bgColor="blue.200"
          fontWeight={gridType === "water" ? "bold" : "normal"}
          onClick={() => setGridType("water")}
        >
          Water
        </Button>
        <Button
          size="lg"
          fontSize="2xl"
          bgColor="gray.400"
          fontWeight={gridType === "mountain" ? "bold" : "normal"}
          onClick={() => setGridType("mountain")}
        >
          Mountain
        </Button>
      </ButtonGroup>
    </HStack>
  );
};

export default Header;

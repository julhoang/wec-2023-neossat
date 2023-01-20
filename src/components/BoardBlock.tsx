import { Land } from "@/utils/types";
import { Center, GridItem, Text } from "@chakra-ui/react";
import { useMemo } from "react";

const BoardBlock = ({
  type,
  position,
  playerPosition,
}: {
  type: Land;
  position: number;
  playerPosition: number;
}) => {
  const randomColor = useMemo(
    () => Math.floor(Math.random() * (5 - 4 + 1) + 4) * 100,
    []
  );

  return (
    <GridItem
      bgColor={
        type === "land"
          ? `green.${randomColor}`
          : type === "water"
          ? `blue.${randomColor}`
          : `gray.${randomColor}`
      }
      border="1px"
      borderColor="gray.200"
    >
      <Center w="100%" h="100%">
        {position === playerPosition && <Text>👨‍🚀</Text>}
      </Center>
    </GridItem>
  );
};

export default BoardBlock;

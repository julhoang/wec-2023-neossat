import GameBoard from "@/components/GameBoard";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { Land } from "@/utils/types";
import { Center, HStack } from "@chakra-ui/react";
import { useState } from "react";

import { BoardEmojis } from "@/utils/types";
import {
  landEmojis,
  mountainEmojis,
  targetLandEmojis,
  targetMountainEmojis,
  targetWaterEmojis,
  waterEmojis,
} from "@/utils/constants";

export default function Game() {
  const [gridType, setGridType] = useState<Land>("land");
  const [foundEmojis, setFoundEmojis] = useState<string[]>([]);

  return (
    <HStack
      w="100%"
      spacing={0}
      align="stretch"
      h="100vh"
      bgColor="gray.200"
    >
      <LeftSidebar
        gridType={gridType}
        setGridType={setGridType}
        foundEmojis={foundEmojis}
      />
      <Center>
        <GameBoard
          gridType={gridType}
          foundEmojis={foundEmojis}
          setFoundEmojis={setFoundEmojis}
        />
      </Center>
      <RightSidebar
        gridType={gridType}
        foundEmojis={foundEmojis}
      />
    </HStack>
  );
}

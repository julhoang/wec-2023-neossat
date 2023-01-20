import GameBoard from "@/components/GameBoard";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { Land } from "@/utils/types";
import { Center, HStack } from "@chakra-ui/react";
import { useState } from "react";

export default function Game() {
  const [gridType, setGridType] = useState<Land>("water");
  return (
    <HStack w="100%" spacing={0} align="stretch" h="100vh" bgColor="gray.200">
      <LeftSidebar gridType={gridType} setGridType={setGridType} />
      <Center>
        <GameBoard gridType={gridType} />
      </Center>
      <RightSidebar />
    </HStack>
  );
}

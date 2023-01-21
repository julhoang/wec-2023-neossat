import GameBoard from "@/components/GameBoard";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { Land } from "@/utils/types";
import { Center, HStack } from "@chakra-ui/react";
import { useState } from "react";

import { BoardEmojis } from "@/utils/types";

export default function Game() {
  const [gridType, setGridType] = useState<Land>("water");

  let landEmojis = [
    "🌳",
    "🦌",
    "🌿",
    "🍃",
    "🌱",
    "🍂",
    "🍁",
    "🌲",
    "🌴",
    "🐻",
    "🐿️",
    "🦝",
    "🦬",
    "🐴",
    "🦚",
    "🪵",
    "🍀",
    "🌹",
    "🌺",
    "🌸",
    "🌷",
    "🌻",
    "🪷",
  ];
  let waterEmojis = [
    "💦",
    "🌊",
    "💧",
    "🐟",
    "🐠",
    "🦀",
    "🦞",
    "🐡",
    "🐳",
    "🐬",
    "🐙",
    "🦑",
    "🦈",
    "🛶",
    "🦐",
    "🪸",
    "🏝️",
    "🦭",
    "🦢",
    "🐋",
    "🚣",
    "🦩",
    "🦦",
    "🏄",
    "🤿",
  ];
  let mountainEmojis = [
    "🦅",
    "🦆",
    "🦉",
    "❄️",
    "⛷️",
    "🗻",
    "☃️",
    "🏂",
    "🌨️",
    "🏔️",
    "🌋",
    "⛰️",
    "🚵",
    "🧗",
    "🪨",
  ];

  // 6 emojis, 2 for each
  const randomEmojis = (emojis: string[]) => {
    const randomEmojis = [];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    randomEmojis.push(emojis[randomIndex]);
    emojis.splice(randomIndex, 1);
    const randomIndex2 = Math.floor(Math.random() * emojis.length);
    randomEmojis.push(emojis[randomIndex2]);
    emojis.splice(randomIndex2, 1);

    return randomEmojis;
  };

  let targetEmojis: BoardEmojis = {
    landEmojis: randomEmojis(landEmojis),
    waterEmojis: randomEmojis(waterEmojis),
    mountainEmojis: randomEmojis(mountainEmojis),
  };

  const boardEmojis: BoardEmojis = {
    landEmojis: landEmojis,
    waterEmojis: waterEmojis,
    mountainEmojis: mountainEmojis,
  };

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
      />
      <Center>
        <GameBoard
          gridType={gridType}
          boardEmojis={boardEmojis}
        />
      </Center>
      <RightSidebar gridType={gridType} />
    </HStack>
  );
}

import { Land } from "@/utils/types";
import { Center, GridItem, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { BoardEmojis } from "@/utils/types";

const BoardBlock = ({
  type,
  position,
  playerPosition,
  boardEmojis,
}: {
  type: Land;
  position: number;
  playerPosition: number;
  boardEmojis: BoardEmojis;
}) => {
  const randomColor = useMemo(() => Math.floor(Math.random() * (3 - 2 + 1) + 2) * 100, []);

  const [emoji, setEmoji] = useState("");

  const { waterEmojis, landEmojis, mountainEmojis } = boardEmojis;

  useEffect(() => {
    if (type === "water") {
      setEmoji(waterEmojis[Math.floor(Math.random() * waterEmojis.length)]);
    } else if (type === "mountain") {
      setEmoji(mountainEmojis[Math.floor(Math.random() * mountainEmojis.length)]);
    } else {
      setEmoji(landEmojis[Math.floor(Math.random() * landEmojis.length)]);
    }
  }, [type]);

  return (
    <GridItem
      bgColor={
        position === playerPosition
          ? "red.700"
          : type === "land"
          ? `green.${randomColor}`
          : type === "water"
          ? `blue.${randomColor}`
          : `gray.${randomColor}`
      }
    >
      <Center
        w="100%"
        h="100%"
      >
        {position === playerPosition ? (
          <Text fontSize={"3xl"}>👨‍🚀</Text>
        ) : (
          <Text fontSize={"3xl"}>{emoji}</Text>
        )}
      </Center>
    </GridItem>
  );
};

export default BoardBlock;

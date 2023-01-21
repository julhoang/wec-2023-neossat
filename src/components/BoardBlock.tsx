import { Land } from "@/utils/types";
import { Center, GridItem, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { BoardEmojis } from "@/utils/types";
import { landEmojis, mountainEmojis, waterEmojis } from "@/utils/constants";
import { useRouter } from "next/router";

const BoardBlock = ({
  type,
  position,
  playerPosition,
  targetEmoji,
  foundEmojis,
  setFoundEmojis,
}: {
  type: Land;
  position: number;
  playerPosition: number;
  targetEmoji?: string;
  foundEmojis: string[];
  setFoundEmojis: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const randomColor = useMemo(
    () => Math.floor(Math.random() * (3 - 2 + 1) + 2) * 100,
    []
  );

  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    if (type === "water") {
      setEmoji(waterEmojis[Math.floor(Math.random() * waterEmojis.length)]);
    } else if (type === "mountain") {
      setEmoji(
        mountainEmojis[Math.floor(Math.random() * mountainEmojis.length)]
      );
    } else {
      setEmoji(landEmojis[Math.floor(Math.random() * landEmojis.length)]);
    }
  }, [type]);

  useEffect(() => {
    if (targetEmoji && position === playerPosition) {
      if (!foundEmojis.includes(targetEmoji)) {
        setFoundEmojis((foundEmojis) => [...foundEmojis, targetEmoji]);
      }
    }
  }, [playerPosition]);

  const router = useRouter();

  useEffect(() => {
    if (foundEmojis.length === 6) {
      router.push({
        pathname: "/results",
        query: { foundEmojis: foundEmojis.join(",") },
      });
    }
  }, [foundEmojis]);

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
      <Center w="100%" h="100%">
        <Text fontSize="5xl">
          {position === playerPosition
            ? "👨‍🚀"
            : targetEmoji
            ? foundEmojis.includes(targetEmoji)
              ? ""
              : targetEmoji
            : emoji}
        </Text>
      </Center>
    </GridItem>
  );
};

export default BoardBlock;

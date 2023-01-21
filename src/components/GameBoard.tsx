import { Land } from "@/utils/types";
import { Grid } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import BoardBlock from "./BoardBlock";
import {
  targetLandEmojis,
  targetMountainEmojis,
  targetWaterEmojis,
} from "@/utils/constants";

const GameBoard = ({
  gridType,
  foundEmojis,
  setFoundEmojis,
}: {
  gridType: Land;
  foundEmojis: string[];
  setFoundEmojis: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [playerPosition, setPlayerPosition] = useState(0);

  useEffect(() => {
    document.onkeyup = (e) => {
      if (e.key === "ArrowUp" && playerPosition > 11) {
        setPlayerPosition((playerPosition) => playerPosition - 12);
      } else if (e.key === "ArrowDown" && playerPosition < 132) {
        setPlayerPosition((playerPosition) => playerPosition + 12);
      } else if (e.key === "ArrowLeft" && playerPosition % 12 !== 0) {
        setPlayerPosition((playerPosition) => playerPosition - 1);
      } else if (e.key === "ArrowRight" && playerPosition % 12 !== 11) {
        setPlayerPosition((playerPosition) => playerPosition + 1);
      }
    };
  }, [playerPosition]);

  const randomNumbers = useMemo(() => {
    return [Math.floor(Math.random() * 144), Math.floor(Math.random() * 144)];
  }, [gridType]);

  const [targetEmojis, setTargetEmojis] = useState<string[]>([]);

  useEffect(() => {
    if (gridType === "water") {
      setTargetEmojis(targetWaterEmojis);
    } else if (gridType === "mountain") {
      setTargetEmojis(targetMountainEmojis);
    } else {
      setTargetEmojis(targetLandEmojis);
    }
  }, [gridType]);

  return (
    <Grid templateColumns="repeat(12, 70px)" templateRows="repeat(12, 70px)">
      {Array.from({ length: 144 }).map((_, i) => (
        <BoardBlock
          key={i}
          type={gridType}
          position={i}
          playerPosition={playerPosition}
          targetEmoji={
            i === randomNumbers[0]
              ? targetEmojis[0]
              : i === randomNumbers[1]
              ? targetEmojis[1]
              : undefined
          }
          foundEmojis={foundEmojis}
          setFoundEmojis={setFoundEmojis}
        />
      ))}
    </Grid>
  );
};

export default GameBoard;

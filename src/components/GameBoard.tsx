import { Land } from "@/utils/types";
import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BoardBlock from "./BoardBlock";
import { BoardEmojis } from "@/utils/types";

const GameBoard = ({ gridType, boardEmojis }: { gridType: Land; boardEmojis: BoardEmojis }) => {
  const [playerPosition, setPlayerPosition] = useState(210);

  useEffect(() => {
    document.onkeyup = (e) => {
      console.log(e.key, playerPosition);
      if (e.key === "ArrowUp") {
        setPlayerPosition((playerPosition) => playerPosition - 20);
      } else if (e.key === "ArrowDown") {
        setPlayerPosition((playerPosition) => playerPosition + 20);
      } else if (e.key === "ArrowLeft") {
        setPlayerPosition((playerPosition) => playerPosition - 1);
      } else if (e.key === "ArrowRight") {
        setPlayerPosition((playerPosition) => playerPosition + 1);
      }
    };
  }, []);

  return (
    <Grid
      templateColumns="repeat(20, 45px)"
      templateRows="repeat(20, 45px)"
    >
      {Array.from({ length: 400 }).map((_, i) => (
        <BoardBlock
          key={i}
          type={gridType}
          position={i}
          playerPosition={playerPosition}
          boardEmojis={boardEmojis}
        />
      ))}
    </Grid>
  );
};

export default GameBoard;

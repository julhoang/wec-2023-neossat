import { Land } from "@/utils/types";
import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import BoardBlock from "./BoardBlock";

const GameBoard = ({ gridType }: { gridType: Land }) => {
  const [playerPosition, setPlayerPosition] = useState(210);

  document.onkeyup = (e) => {
    if (e.key === "ArrowUp") {
      setPlayerPosition(playerPosition - 20);
    } else if (e.key === "ArrowDown") {
      setPlayerPosition(playerPosition + 20);
    } else if (e.key === "ArrowLeft") {
      setPlayerPosition(playerPosition - 1);
    } else if (e.key === "ArrowRight") {
      setPlayerPosition(playerPosition + 1);
    }
  };

  return (
    <Grid
      bgColor="gray.600"
      // templateColumns="repeat(auto-fill, minmax(40px, 1fr))"
      // templateRows="repeat(auto-fill, minmax(40px, 1fr))"
      templateColumns="repeat(20, 40px)"
      templateRows="repeat(20, 40px)"
    >
      {/* Loop over 2500 grid items, all with a light gray border */}
      {Array.from({ length: 400 }).map((_, i) => (
        <BoardBlock
          key={i}
          type={gridType}
          position={i}
          playerPosition={playerPosition}
        />
      ))}
    </Grid>
  );
};

export default GameBoard;

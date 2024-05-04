import { Grid } from "@mui/material";
import X from "../drawable/X";
import O from "../drawable/O";
import I from "../drawable/I";
import useTicTacToeStore from "../../zustand/useTicTacToeStore";
import { useEffect, useState } from "react";
import checkWinner from "../../utils/checkWinner";
import winCrossOrientation from "../../utils/winCrossOrientation";

interface WinOrientation {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
}

export default function TicTacToeTable() {
  const { grid, xTurn, addDrawable, xMoves, oMoves } = useTicTacToeStore();

  const [winner, setWinner] = useState("");
  const [winningCoordinates, setWinningCoordinates] = useState<WinOrientation>({
    x1: "",
    y1: "",
    x2: "",
    y2: "",
  });

  const handleCheckWinner = (moves: number[]) => {
    const winnerArray = checkWinner(moves);

    if (winnerArray.length !== 0) {
      if (xTurn) {
        setWinningCoordinates(winCrossOrientation(winnerArray)!);
        setWinner("o");
      } else {
        setWinningCoordinates(winCrossOrientation(winnerArray)!);
        setWinner("x");
      }
    }
  };

  useEffect(() => {
    if (xMoves.length >= 3 || oMoves.length >= 3) {
      if (xTurn) {
        handleCheckWinner(oMoves);
      } else {
        handleCheckWinner(xMoves);
      }
    }
  }, [xMoves, oMoves]);

  return (
    <Grid
      container
      sx={{
        width: { xs: "300px", sm: "600px" },
        position: "relative",
        border: { xs: "2.5px solid #EFEFEF", sm: "5px solid #EFEFEF" },
      }}
    >
      <I winner={winner} coordinates={winningCoordinates} />
      {grid.map((item) => (
        <Grid
          sx={{
            height: { xs: "100px", sm: "200px" },
            width: { xs: "100px", sm: "200px" },
            border: { xs: "2.5px solid #EFEFEF", sm: "5px solid #EFEFEF" },
            cursor: item.filled ? "not-allowed" : "pointer",
          }}
          item
          xs={4}
          key={item.coord}
          onClick={() =>
            item.filled ? null : addDrawable(item.coord, xTurn ? "x" : "o")
          }
        >
          {item.filled ? item.drawable === "x" ? <X /> : <O /> : null}
        </Grid>
      ))}
    </Grid>
  );
}

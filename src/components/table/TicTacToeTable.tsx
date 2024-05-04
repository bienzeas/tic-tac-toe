import { Grid } from "@mui/material";
import X from "../drawable/X";
import O from "../drawable/O";
import I from "../drawable/I";

export default function TicTacToeTable() {
  return (
    <Grid
      container
      sx={{
        width: { xs: "300px", sm: "600px" },
        position: "relative",
      }}
    >
      <I winner="x" coordinates={[4, 5, 1]} />
      {Array.from(Array(9)).map((_, index) => (
        <Grid
          sx={{
            height: { xs: "100px", sm: "200px" },
            width: { xs: "100px", sm: "200px" },
            cursor: "pointer",
          }}
          item
          xs={4}
          key={index}
        >
          <X />
        </Grid>
      ))}
    </Grid>
  );
}

import { Grid } from "@mui/material";

export default function TicTacToeTable() {
  return (
    <Grid
      container
      sx={{
        width: { xs: "300px", sm: "600px" },
      }}
    >
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
        ></Grid>
      ))}
    </Grid>
  );
}

import { Backdrop, Typography } from "@mui/material";

interface WinnerPopupProps {
  winner: string;
  reset: () => void;
  setWinner: React.Dispatch<React.SetStateAction<string>>;
}

export default function WinnerPopup({
  winner,
  reset,
  setWinner,
}: WinnerPopupProps) {
  return (
    <Backdrop
      data-testid="winner-popup"
      open={winner !== ""}
      onClick={() => {
        reset();
        setWinner("");
      }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 3,
        zIndex: 1200,
        cursor: "pointer",
      }}
    >
      {winner !== "draw" ? (
        <Typography
          variant="h1"
          fontWeight={600}
          sx={{
            color: winner === "x" ? "rgb(129, 190, 246)" : "rgb(255, 140, 140)",
            filter:
              winner === "x"
                ? "drop-shadow(0px 0px 10px rgba(129, 190, 246, 1))"
                : "drop-shadow(0px 0px 10px rgba(255, 140, 140, 1))",
          }}
        >
          🎉🎉 {winner?.toUpperCase()} WINS 🎉🎉
        </Typography>
      ) : (
        <Typography
          variant="h1"
          fontWeight={600}
          sx={{
            color: "#EFEFEF",
            filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, 1))",
          }}
        >
          🏳️ {winner?.toUpperCase()} MATCH 🏳️
        </Typography>
      )}
      <Typography
        variant="h4"
        sx={{
          color: "#EFEFEF",
          border: "2px solid #EFEFEF",
          padding: "16px",
          filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, 1))",
          borderRadius: "24px",
          textTransform: "uppercase",
        }}
      >
        Click anywhere to play again
      </Typography>
    </Backdrop>
  );
}

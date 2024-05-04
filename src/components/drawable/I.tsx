import { motion, MotionStyle } from "framer-motion";
import { drawWin } from "../../utils/framer";
import winCrossOrientation from "../../utils/winCrossOrientation";

interface WinOrientation {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
}

interface IProps {
  coordinates: WinOrientation;
  winner: string;
}

interface IStylesType {
  filter: string;
  strokeWidth: string;
  strokeLinecap: string;
  fill: string;
}

interface WinnerStylesType {
  o: IStylesType;
  x: IStylesType;
}

export default function I({ coordinates, winner }: IProps) {
  const winnerStyles: WinnerStylesType = {
    o: {
      filter: "drop-shadow(0px 0px 10px rgba(255, 140, 140, 1))",
      strokeWidth: "5px",
      strokeLinecap: "round",
      fill: "transparent",
    },
    x: {
      filter: "drop-shadow(0px 0px 10px rgba(129, 190, 246, 1))",
      strokeWidth: "5px",
      strokeLinecap: "round",
      fill: "transparent",
    },
  };
  return (
    <>
      {winner?.length !== 0 && (
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          initial="hidden"
          animate="visible"
          style={{ zIndex: 1200, position: "absolute" }}
        >
          <motion.line
            x1={coordinates.x1}
            y1={coordinates.y1}
            x2={coordinates.x2}
            y2={coordinates.y2}
            stroke={
              winner === "x"
                ? "rgba(129, 190, 246, 1)"
                : "rgba(255, 140, 140, 1)"
            }
            variants={drawWin}
            style={
              winnerStyles?.[winner as keyof WinnerStylesType] as MotionStyle
            }
          />
        </motion.svg>
      )}
    </>
  );
}

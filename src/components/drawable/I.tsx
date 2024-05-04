import { motion, MotionStyle } from "framer-motion";
import { draw } from "../../utils/framer";
import winCrossOrientation from "../../utils/winCrossOrientation";

interface IProps {
  coordinates: Array<number>;
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
  const coords = winCrossOrientation(coordinates);
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
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      initial="hidden"
      animate="visible"
      style={{ position: "absolute" }}
    >
      <motion.line
        x1={coords?.x1}
        y1={coords?.y1}
        x2={coords?.x2}
        y2={coords?.y2}
        stroke="rgba(255, 255, 255, .8)"
        variants={draw}
        custom={2}
        style={winnerStyles[winner as keyof WinnerStylesType] as MotionStyle}
      />
    </motion.svg>
  );
}

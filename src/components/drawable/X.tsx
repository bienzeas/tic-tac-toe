import { motion } from "framer-motion";
import { draw } from "../../utils/framer";

export default function X() {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      initial="hidden"
      animate="visible"
    >
      <motion.line
        x1="30"
        y1="30"
        x2="170"
        y2="170"
        stroke="#069CD4"
        variants={draw}
        custom={2}
        style={{
          filter: "drop-shadow(0px 0px 10px rgba(129, 190, 246, 1))",
          strokeWidth: "10px",
          strokeLinecap: "round",
          fill: "transparent",
        }}
      />
      <motion.line
        x1="30"
        y1="170"
        x2="170"
        y2="30"
        stroke="#069CD4"
        variants={draw}
        custom={2.5}
        style={{
          filter: "drop-shadow(0px 0px 10px rgba(129, 190, 246, 1))",
          strokeWidth: "10px",
          strokeLinecap: "round",
          fill: "transparent",
        }}
      />
    </motion.svg>
  );
}

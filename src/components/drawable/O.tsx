import { motion } from "framer-motion";
import { draw } from "../../utils/framer";

export default function O() {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        stroke="#ff0055"
        variants={draw}
        custom={1}
        style={{
          filter: "drop-shadow(0px 0px 10px rgba(255, 140, 140, 1))",
          strokeWidth: "10px",
          strokeLinecap: "round",
          fill: "transparent",
        }}
      />
    </motion.svg>
  );
}

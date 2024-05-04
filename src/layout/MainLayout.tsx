import { motion } from "framer-motion";
import { ReactElement } from "react";
import { Box, Tooltip, Typography, useTheme } from "@mui/material";
import RestartAltTwoToneIcon from "@mui/icons-material/RestartAltTwoTone";
import useTicTacToeStore from "../zustand/useTicTacToeStore";
interface MainLayoutProps {
  children: ReactElement;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const theme = useTheme();
  const { reset } = useTicTacToeStore();
  return (
    <Box
      sx={{
        height: "100vh",
        background: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: { xs: "center", sm: "flex-start" },
        gap: 3,
        padding: 3,
      }}
    >
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", damping: 10, stiffness: 100 }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography variant="h1" fontWeight={600}>
            TIC TAC TOE
          </Typography>
          <motion.div
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <Typography
              variant="h1"
              fontWeight={600}
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => reset()}
            >
              <Tooltip title="Reset">
                <RestartAltTwoToneIcon fontSize="inherit" />
              </Tooltip>
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </Box>
  );
}

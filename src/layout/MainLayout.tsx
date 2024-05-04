import { motion } from "framer-motion";
import { ReactElement } from "react";
import { Box, Typography, useTheme } from "@mui/material";

interface MainLayoutProps {
  children: ReactElement;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const theme = useTheme();
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
        <Typography variant="h1" fontWeight={600}>
          TIC TAC TOE
        </Typography>
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

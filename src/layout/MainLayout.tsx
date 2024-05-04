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
      <Typography variant="h1" fontWeight={600}>
        TIC TAC TOE
      </Typography>
      {children}
    </Box>
  );
}

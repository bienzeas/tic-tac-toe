import { ReactElement } from "react";
import { Box } from "@mui/material";

interface MainLayoutProps {
  children: ReactElement;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "#2B2B2B",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
}

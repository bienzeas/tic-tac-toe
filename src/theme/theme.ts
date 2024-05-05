import { createTheme, responsiveFontSizes } from "@mui/material";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#222222",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      color: "#EFEFEF",
      filter: "drop-shadow(0px 0px 10px rgba(59, 240, 207, 1))",
    },
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          boxShadow:
            "inset 0 0 10px rgba(255, 255, 255, 0.5), inset 0 0 20px rgba(255, 255, 255, 1)",
        },
      },
    },
  },
});

const theme = responsiveFontSizes(baseTheme, {
  breakpoints: ["sm", "md", "lg", "xl"],
  factor: 2.5,
  variants: ["h1", "body1"],
});

export default theme;

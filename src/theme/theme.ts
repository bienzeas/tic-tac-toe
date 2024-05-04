import { createTheme, responsiveFontSizes } from "@mui/material";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#2B2B2B",
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
          border: "2.5px solid #EFEFEF",
          filter: "drop-shadow(0px 0px 10px rgba(47, 204, 12, 1))",
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

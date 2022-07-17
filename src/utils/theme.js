import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const base = createTheme({
  palette: {
    primary: {
      main: "#E50913",
    },
    secondary: {
      main: "#FFFFFF",
    },
    tertiary: {
      main: "#ffffff4d",
    },
    error: {
      main: red[400],
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#ffffff33",
      disabled: "##ffffff33",
    },
    divider: "#FFFFFF",
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    button: {
      fontWeight: 700,
    },
  },

  shape: {
    borderRadius: 4,
  },
});

const theme = responsiveFontSizes(base);

export default theme;

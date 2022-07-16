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
    error: {
      main: red[400],
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  shape: {
    borderRadius: 4,
  },
});

const theme = responsiveFontSizes(base);

export default theme;

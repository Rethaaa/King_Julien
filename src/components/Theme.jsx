import { createTheme } from "@mui/material/styles";
import '@fontsource/nunito/300.css';

const theme = createTheme({
  typography: {
    fontFamily: '"Nunito", Nunito, Arial',
  },
  palette: {
    primary: {
      main: "#F06197",
    },
    secondary: {
      main: "#73B432",
    },
    tertiary: {
      main: "#E8BE34",
    },
    quaternary: {
      main: "#c4f3ff",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "DM Sans, sans-serif",
    h6: {
      fontWeight: 600,
    },
  },
});

export default theme;
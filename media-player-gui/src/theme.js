import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#1d2124",
      main: "#ffffff",
      dark: "#fff",
      text: "#fff",
      contrastText: "#090909"
    },
    secondary: {
      light: "#0C0C0C",
      main: "#141414",
      dark: "#141414",
      text: "#fff",
      contrastText: "#ffffff"
    }
  }
});

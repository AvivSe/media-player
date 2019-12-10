import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#06c",
      main: "#3c4043",
      dark: "#282c2f",
      text: "#fff",
      contrastText: "#3c4043"
    },
    secondary: {
      light: "#757ce8",
      main: "#282c2f",
      dark: "#fff",
      text: "#fff",
      contrastText: "#282c2f"
    }
  }
});

import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import StatInput from "./components/inputs/StatInput";

const theme = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        color: "#fff",
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: "#fff",
      },
    },
    MuiInputBase: {
      input: {
        borderColor: "#fff",
      },
    },
  },
  palette: {
    primary: {
      main: "#fff",
      light: "#fff",
      dark: "#fff",
    },
    secondary: {
      main: "#fff",
      light: "#fff",
      dark: "#fff",
    },
  },
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <StatInput />
      </MuiThemeProvider>
    </div>
  );
}

export default App;

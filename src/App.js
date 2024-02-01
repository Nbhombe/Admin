import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./assets/style/globalStyle";
import { useState } from "react";
import { darkTheme, lightTheme } from "./assets/style/theme";
import AppRoutes from "./routes";
import ToggleComponent from "./componets/toggleComponent";

function App() {
  const [mode, setMode] = useState("light");
  const theme = mode === "light" ? lightTheme : darkTheme;

  const toggleMode = () => {
    setMode((m) => (m === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="theme">
          <ToggleComponent id="abc" onClick={toggleMode}/>
        </div>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/style/globalStyle';
import { useState } from 'react';
import { darkTheme, lightTheme } from './assets/style/theme';
import AppRoutes from './routes';
import ToggleComponent from './componets/toggleComponent';
import './index.css';
import { THEMES } from './utils/constants';

function App() {
  const [mode, setMode] = useState(THEMES.LIGHT);
  const theme = mode === THEMES.LIGHT ? lightTheme : darkTheme;

  const toggleMode = () => {
    setMode(m => (m === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="theme">
          <ToggleComponent id="abc" onClick={toggleMode} />
        </div>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;

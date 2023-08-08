import {ThemeProvider} from 'styled-components'
import { AppRouter } from "./router/AppRouter"
import { useContext } from "react";
import { GlobalStyles } from "./styles/Global.styles";
import { lightTheme,darktheme } from "./styles/theme";
import { ThemeContext } from './context/ThemeContext';


function App() {

  const { myTheme } = useContext(ThemeContext);
  const themes = myTheme === "light" ? lightTheme : darktheme;

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles/>
      <AppRouter/>
    </ThemeProvider>

  )
}

export default App

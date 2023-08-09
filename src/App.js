import {ThemeProvider} from 'styled-components'
import { AppRouter } from "./router/AppRouter"
import { useContext } from "react";
import { GlobalStyles } from "./styles/Global.styles";
import { lightTheme,darktheme } from "./styles/theme";
import { ThemeContext } from './context/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './app/store';


function App() {

  const { myTheme } = useContext(ThemeContext);
  const themes = myTheme === "light" ? lightTheme : darktheme;

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles/>
      <Provider store={store}>
      <AppRouter/>
      </Provider>
    </ThemeProvider>

  )
}

export default App

import {ThemeProvider} from 'styled-components'
import { AppRouter } from "./router/AppRouter"
import { useContext } from "react";
import { GlobalStyles } from "./styles/Global.styles";
import { lightTheme,darktheme } from "./styles/theme";
import { ThemeContext } from './context/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ToastContainer } from "react-toastify";

function App() {

  const { myTheme } = useContext(ThemeContext);
  const themes = myTheme === "light" ? lightTheme : darktheme;

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles/>
      <Provider store={store}>
      <AppRouter/>
      </Provider>
      <ToastContainer/>
    </ThemeProvider>

  )
}

export default App

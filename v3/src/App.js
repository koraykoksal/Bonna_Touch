import { ThemeProvider } from 'styled-components'
import { AppRouter } from "./router/AppRouter"
import { useContext } from "react";
import { GlobalStyles } from "./styles/Global.styles";
import { lightTheme, darktheme } from "./styles/theme";
import { ThemeContext } from './context/ThemeContext';
import { Provider } from 'react-redux';
import { store, persistor } from './app/store';
import { ToastContainer } from "react-toastify";
import { PersistGate } from 'redux-persist/integration/react';
import './index.css'


function App() {

  const { myTheme } = useContext(ThemeContext);
  const themes = myTheme === "light" ? lightTheme : darktheme;

  return (
    
    <ThemeProvider theme={themes}>

      <Provider store={store}>
        <GlobalStyles />
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
        <ToastContainer />
      </Provider>

    </ThemeProvider>

  )
}

export default App

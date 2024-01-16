import { AppRouter } from "./router/AppRouter"
import { useContext } from "react";
import { Provider } from 'react-redux';
import { store, persistor } from './app/store';
import { ToastContainer } from "react-toastify";
import { PersistGate } from 'redux-persist/integration/react';
import './index.css'


function App() {


  return (
    

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
        <ToastContainer />
      </Provider>


  )
}

export default App

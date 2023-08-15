import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider"
import { ThemeContextProvider } from "./context/ThemeContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
)

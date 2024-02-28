import React from "react"
import { createRoot } from "react-dom/client"
import { Provider as ReactReduxProvider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import {
  defaultTheme,
  Provider as ReactSpectrumProvider,
} from "@adobe/react-spectrum"
import "./main.css"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <ReactReduxProvider store={store}>
        <ReactSpectrumProvider
          theme={defaultTheme}
          colorScheme="dark"
          height="100vh"
        >
          <App />
        </ReactSpectrumProvider>
      </ReactReduxProvider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/app/styles/index.scss'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import App from "@/app/App.tsx";
import store from "@/store";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

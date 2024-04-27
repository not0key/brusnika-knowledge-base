import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/app/styles/index.scss'
import { BrowserRouter } from "react-router-dom";
import App from "@/app/App.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
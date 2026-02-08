import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Themecontext from "./context/Themecontext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Themecontext>
      <App />
    </Themecontext>
  </BrowserRouter>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PlaylistProvider } from "./context/PlaylistContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlaylistProvider>
      <App />
    </PlaylistProvider>
  </StrictMode>
);

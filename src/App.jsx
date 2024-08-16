import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Playlist from "./components/Playlist";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function About() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div onClick={toggleTheme} className={`about-container ${theme}`}>
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Whether you want to sit back and relax or have a dance party, you set
        the mood and do your thing
      </p>
      <p className="about-description">Let the music speak to your soul</p>
    </div>
  );
}

import React from "react";
import useDarkMode from "./useDarkMode";

const DarkModeToggle = () => {
  const { theme, toggletheme } = useDarkMode();
  return (
    <div>
      <h1>DarkModeToggle</h1>
      <p>Current Theme: {theme === "light" ? "Light" : "Dark"}</p>
      <button onClick={toggletheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"} mode
      </button>
    </div>
  );
};

export default DarkModeToggle;

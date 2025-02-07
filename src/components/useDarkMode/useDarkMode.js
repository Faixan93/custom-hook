import { useState, useEffect } from "react";

const useDarkMode = () => {
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme ? storedTheme : "light";

  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggletheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return { theme, toggletheme };
};

export default useDarkMode;

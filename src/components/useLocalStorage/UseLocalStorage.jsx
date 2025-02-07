import { useState, useEffect } from "react";

const UseLocalStorage = (key, initialValue) => {
  const [values, setValues] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.log("Error reading localstorage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(values));
    } catch (error) {
      console.log("Error writing localstorage", error);
    }
  }, [key, values]);
  return [values, setValues];
};

export default UseLocalStorage;

import { useState, useEffect } from "react";

function useKeyPress(targetKey, callback) {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === targetKey) {
        setKeyPressed(true);
        if (callback) callback(event);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === targetKey) {
        setKeyPressed(false);
      }
    };

    // Attach event listeners
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [targetKey, callback]);

  return keyPressed;
}

export default useKeyPress;

import React from "react";
import useKeyPress from "./useKeyPress";

const KeyPress = () => {
  const handleKeyPress = (event) => {
    alert(`You pressed the ${event.key} key!`);
  };

  const isEnterPressed = useKeyPress("Enter", handleKeyPress);
  const isSpacePressed = useKeyPress(" ", handleKeyPress);

  return (
    <div>
      <h1>Press the Enter or Space key</h1>
      {isEnterPressed && <p>You pressed Enter!</p>}
      {isSpacePressed && <p>You pressed Space!</p>}
    </div>
  );
};

export default KeyPress;

import React from "react";
import UseLocalStorage from "./UseLocalStorage";

const Counter = () => {
  const [count, setCount] = UseLocalStorage("counter", 0);
  return (
    <div>
      <h1>Counter</h1>
      <p>Check local Storage</p>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Icrement</button> <br />
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;

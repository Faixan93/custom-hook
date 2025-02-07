import { useState, useEffect } from "react";

const UseDebounce = (value, delay = 500) => {
  const [deBounceValue, setDeBounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDeBounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return deBounceValue;
};

export default UseDebounce;

import { useEffect, useState } from "react";

const UseMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    mediaQuery.addEventListener("change", () => {
      setMatches(mediaQuery.matches);
    });
  }, [query]);
  return matches;
};

export default UseMediaQuery;

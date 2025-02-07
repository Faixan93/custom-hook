import React, { useEffect, useState } from "react";
import UseDebounce from "./UseDebounce";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const debounceSearch = UseDebounce(search, 500);

  useEffect(() => {
    if (debounceSearch) {
      console.log("Fetching data:", debounceSearch);
    }
  }, [debounceSearch]);
  return (
    <div>
      <h1>SearchBar</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

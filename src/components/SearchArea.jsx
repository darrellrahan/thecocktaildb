import React from "react";
import { useGlobalContext } from "../context";

const SearchArea = () => {
  const { handleSearch, searchText } = useGlobalContext();

  return (
    <div className="search-area">
      <div className="box">
        <p>Search Your Favourite Drinks</p>
        <input
          onChange={handleSearch}
          value={searchText}
          placeholder="e.g. pina colada"
        />
      </div>
    </div>
  );
};

export default SearchArea;

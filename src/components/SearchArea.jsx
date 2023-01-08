import React from "react";
import { useGlobalContext } from "../context";
import { ACTIONS } from "../actions";

const SearchArea = () => {
  const { states, dispatch } = useGlobalContext();

  function handleSearchChange(e) {
    dispatch({
      type: ACTIONS.SET_SEARCH_TEXT,
      payload: { value: e.target.value },
    });
    dispatch({ type: ACTIONS.SET_DRINKID, payload: { value: null } });
  }

  return (
    <div className="search-area">
      <div className="box">
        <p>Search Your Favourite Drinks</p>
        <input
          onChange={handleSearchChange}
          value={states.searchText}
          placeholder="e.g. pina colada"
        />
      </div>
    </div>
  );
};

export default SearchArea;

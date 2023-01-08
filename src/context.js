import React, { useContext, useEffect, useState } from "react";

const GlobalContext = React.createContext();

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchText, setSeachText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isNull, setIsNull] = useState(false);
  const [currentDrinkData, setCurrentDrinkData] = useState({});
  const [currentIngredients, setCurrentIngredients] = useState([]);
  const [currentDrinkId, setCurrentDrinkId] = useState(null);
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  function handleSearch(e) {
    setSeachText(e.target.value);
    setCurrentDrinkId(null);
  }
  function setNullTrue() {
    setIsNull(true);
  }
  function openSidebar() {
    setIsShowSidebar(true);
  }
  function closeSidebar() {
    setIsShowSidebar(false);
  }

  async function fetchAPI() {
    setIsLoading(true);

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    );
    const responseJSON = await response.json();

    if (currentDrinkId !== null) {
      responseJSON.drinks.forEach((drink) => {
        if (drink.idDrink === currentDrinkId) {
          setCurrentDrinkData(drink);
          const {
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
          } = drink;
          setCurrentIngredients([
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
          ]);
        }
      });
    } else {
      setData(responseJSON.drinks);
      setIsNull(responseJSON.drinks !== null ? false : true);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchAPI();
  }, [searchText, currentDrinkId]); // eslint-disable-line

  useEffect(() => {
    document.body.style.overflow = isShowSidebar ? "hidden" : "auto";
  }, [isShowSidebar]);

  return (
    <GlobalContext.Provider
      value={{
        data,
        currentDrinkData,
        currentIngredients,
        isShowSidebar,
        searchText,
        isLoading,
        isNull,
        handleSearch,
        setNullTrue,
        setCurrentDrinkId,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

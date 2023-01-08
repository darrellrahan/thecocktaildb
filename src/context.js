import React, { useContext, useEffect, useReducer } from "react";
import { ACTIONS } from "./actions";
import reducer from "./reducer";

const GlobalContext = React.createContext();

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function AppProvider({ children }) {
  const initialState = {
    isLoading: false,
    drinks: [],
    searchText: "",
    searchNotFound: false,
    singleDrink: {},
    singleDrinkIngredients: [],
    currentDrinkId: null,
    isShowSidebar: false,
  };

  const [states, dispatch] = useReducer(reducer, initialState);

  async function fetchAPI() {
    dispatch({ type: ACTIONS.SET_ISLOADING, payload: { value: true } });

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${states.searchText}`
    );
    const responseJSON = await response.json();

    if (states.currentDrinkId !== null) {
      responseJSON.drinks.forEach((drink) => {
        if (drink.idDrink === states.currentDrinkId) {
          dispatch({
            type: ACTIONS.SET_SINGLEDRINK_DATA,
            payload: { value: drink },
          });
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
          dispatch({
            type: ACTIONS.SET_SINGLEDRINK_INGREDIENTS,
            payload: {
              value: [
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
              ],
            },
          });
        }
      });
    } else {
      dispatch({
        type: ACTIONS.SET_DRINKS_DATA,
        payload: { value: responseJSON.drinks },
      });
      dispatch({
        type: ACTIONS.SET_SEARCH_RESULT,
        payload: { value: responseJSON.drinks !== null ? true : false },
      });
    }

    dispatch({ type: ACTIONS.SET_ISLOADING, payload: { value: false } });
  }

  useEffect(() => {
    fetchAPI();
  }, [states.searchText, states.currentDrinkId]); // eslint-disable-line

  useEffect(() => {
    document.body.style.overflow = states.isShowSidebar ? "hidden" : "auto";
  }, [states.isShowSidebar]);

  return (
    <GlobalContext.Provider
      value={{
        states,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

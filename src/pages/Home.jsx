import React, { useEffect } from "react";
import DrinksArea from "../components/DrinksArea";
import SearchArea from "../components/SearchArea";
import { useGlobalContext } from "../context";
import { ACTIONS } from "../actions";

const Home = () => {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: ACTIONS.CLOSE_SIDEBAR });
  }, []); // eslint-disable-line

  return (
    <>
      <SearchArea />
      <DrinksArea />
    </>
  );
};

export default Home;

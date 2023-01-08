import React, { useEffect } from "react";
import DrinksArea from "../components/DrinksArea";
import SearchArea from "../components/SearchArea";
import { useGlobalContext } from "../context";

const Home = () => {
  const { closeSidebar } = useGlobalContext();

  useEffect(() => {
    closeSidebar();
  }, []); // eslint-disable-line

  return (
    <>
      <SearchArea />
      <DrinksArea />
    </>
  );
};

export default Home;

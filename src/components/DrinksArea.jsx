import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import SingleDrinkCard from "./SingleDrinkCard";

const DrinksSection = () => {
  const { states } = useGlobalContext();

  if (states.isLoading) return <Loading />;

  if (states.searchNotFound)
    return <h1 className="no-drinks">No Drinks Found</h1>;

  return (
    <div className="drinks-ct">
      <h1 className="title">Drinks</h1>
      <div className="drinks-area">
        {states.drinks.map((drink) => {
          const { idDrink, strDrinkThumb, strDrink, strGlass, strAlcoholic } =
            drink;
          return (
            <SingleDrinkCard
              key={idDrink}
              id={idDrink}
              img={strDrinkThumb}
              name={strDrink}
              glass={strGlass}
              alcoholic={strAlcoholic}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DrinksSection;

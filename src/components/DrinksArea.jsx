import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import SingleDrinkCard from "./SingleDrinkCard";

const DrinksSection = () => {
  const { data, isLoading, isNull } = useGlobalContext();

  if (isLoading) return <Loading />;

  if (isNull) return <h1 className="no-drinks">No Drinks Found</h1>;

  return (
    <div className="drinks-ct">
      <h1 className="title">Drinks</h1>
      <div className="drinks-area">
        {data.map((drink) => {
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

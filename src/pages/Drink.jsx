import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";

const Drink = () => {
  const { id } = useParams();
  const { currentDrinkData, currentIngredients, setCurrentDrinkId, isLoading } =
    useGlobalContext();

  useEffect(() => {
    setCurrentDrinkId(id);
  }, [id, setCurrentDrinkId]);

  const {
    strDrinkThumb,
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
  } = currentDrinkData;

  if (isLoading) return <Loading />;

  return (
    <div className="drink-ct">
      <div className="top">
        <h1 className="drink-title">
          {strDrink === undefined ? "Loading..." : strDrink}
        </h1>
      </div>
      <div className="middle drink-info">
        <div className="left">
          {strDrinkThumb !== undefined ? (
            <img src={strDrinkThumb} alt="img" />
          ) : (
            <div className="loading-thumb" />
          )}
        </div>
        <div className="right">
          <p>
            <span className="label">Name : </span>
            {strDrink === undefined ? "loading..." : strDrink}
          </p>
          <p>
            <span className="label">Category : </span>
            {strCategory === undefined ? "loading..." : strCategory}
          </p>
          <p>
            <span className="label">Info : </span>
            {strAlcoholic === undefined ? "loading..." : strAlcoholic}
          </p>
          <p>
            <span className="label">Glass : </span>
            {strGlass === undefined ? "loading..." : strGlass}
          </p>
          <p>
            <span className="label">Instructions : </span>
            {strInstructions === undefined ? "loading..." : strInstructions}
          </p>
          <p>
            <span className="label">Ingredients : </span>
            {currentIngredients.length === 0
              ? "loading..."
              : currentIngredients.map((ingredient, currentIndex) => {
                  if (
                    ingredient !== null &&
                    currentIngredients[currentIndex + 1] === null
                  ) {
                    return <span key={currentIndex}>{ingredient}</span>;
                  }
                  if (ingredient !== null) {
                    return <span key={currentIndex}>{ingredient}, </span>;
                  }
                  return null;
                })}
          </p>
        </div>
      </div>
      <div className="bottom">
        <Link to="/" className="back-btn">
          BACK
        </Link>
      </div>
    </div>
  );
};

export default Drink;

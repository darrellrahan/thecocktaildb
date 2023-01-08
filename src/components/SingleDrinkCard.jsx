import React from "react";
import { Link } from "react-router-dom";

const SingleDrink = ({ id, img, name, glass, alcoholic }) => (
  <div className="single-drink">
    <img src={img} alt="img" />
    <div className="footer">
      <h1>{name}</h1>
      <h3>{glass}</h3>
      <p>{alcoholic}</p>
      <Link to={`/drink/${id}`} className="details-link">
        DETAILS
      </Link>
    </div>
  </div>
);

export default SingleDrink;

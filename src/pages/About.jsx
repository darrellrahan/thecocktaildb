import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { ACTIONS } from "../actions";

const About = () => {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: ACTIONS.CLOSE_SIDEBAR });
  }, []); // eslint-disable-line

  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae architecto qui adipisci in officiis, aperiam sequi atque
        perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
        nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
        hic aspernatur error blanditiis?
      </p>
    </div>
  );
};

export default About;

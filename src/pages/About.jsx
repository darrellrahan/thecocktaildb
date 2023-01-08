import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const About = () => {
  const { closeSidebar } = useGlobalContext();

  useEffect(() => {
    closeSidebar();
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

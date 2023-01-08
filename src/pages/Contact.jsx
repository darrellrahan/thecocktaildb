import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { ACTIONS } from "../actions";

const Contact = () => {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: ACTIONS.CLOSE_SIDEBAR });
  }, []); // eslint-disable-line

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>+123 456 789</p>
    </div>
  );
};

export default Contact;

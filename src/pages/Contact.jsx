import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const Contact = () => {
  const { closeSidebar } = useGlobalContext();

  useEffect(() => {
    closeSidebar();
  }, []); // eslint-disable-line

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>+123 456 789</p>
    </div>
  );
};

export default Contact;

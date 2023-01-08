import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsFillTelephoneFill, BsFillInfoCircleFill } from "react-icons/bs";
import { IoIosHelpCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { ACTIONS } from "../actions";

const Sidebar = () => {
  const { states, dispatch } = useGlobalContext();

  function closeSidebar() {
    dispatch({ type: ACTIONS.CLOSE_SIDEBAR });
  }

  return (
    <div className={states.isShowSidebar ? "sidebar-overlay" : null}>
      <div
        className={
          states.isShowSidebar
            ? "sidebar-ct show-sidebar"
            : "sidebar-ct hide-sidebar"
        }
      >
        <div className="sidebar-top">
          <Link to="/" className="logo">
            The<span>Cocktail</span>DB
          </Link>
          <button onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className="sidebar-center">
          <ul>
            <li>
              <Link to="/" className="link">
                <AiFillHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                <BsFillInfoCircleFill /> About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                <BsFillTelephoneFill /> Contact
              </Link>
            </li>
            <li>
              <Link to="/help" className="link">
                <IoIosHelpCircle /> Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import Sidebar from "./Sidebar";

const Header = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <>
      <header>
        <div className="logo-area">
          <button onClick={openSidebar}>
            <FaBars />
          </button>
          <Link to="/" className="logo">
            The<span>Cocktail</span>DB
          </Link>
        </div>
        <div className="nav-area">
          <nav>
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/help" className="link">
                  Help
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Header;

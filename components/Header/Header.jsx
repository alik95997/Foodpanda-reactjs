import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header>
      <div>
        <img src="./assets/foodpanda_logo_2023.svg" alt="" />
      </div>

      <nav>
        <ul>
          <li>
            <a href="">About Us </a>
          </li>
          <li>
            <a href="">Why Foodpanda</a>
          </li>
          <li>
            <a href="">Jobs</a>
          </li>
          <li>
            <a href="">Locations</a>
          </li>
          <li>
            <a href="">pandaStories</a>
          </li>
        </ul>
      </nav>

      <div>
        <button className="btn">
          Saved Jobs
          <FontAwesomeIcon icon={faStar} />
        </button>
      </div>
    </header>
  );
};

export default Header;

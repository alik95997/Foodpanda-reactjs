import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FoodpandaLogo from "../../assets/logo.svg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import FindMoreButton from "../FindMoreButton/FindMoreButton";
const Header = () => {
  return (
    <header>
      <div>
        <img src={FoodpandaLogo} alt="" />
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
        <span className="saved-job">
          Saved Jobs
          <FontAwesomeIcon icon={faStar} />
        </span>
      </div>
    </header>
  );
};

export default Header;

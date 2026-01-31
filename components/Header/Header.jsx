import React from "react";
import "./header.css";
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
        <button class="btn">
          Saved Jobs
          <i class="fa-regular fa-star"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./herosection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-text">
          <h1>Hungry to make an impact</h1>
          <h2>There’s always room at our table.</h2>
        </div>
        <div className="search-wrapper">
          <input type="text" placeholder="Start your job search here" />

          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className="hero-img-container">
        <img
          src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/2Nn1Y5_G9EZl9Qjb1WHOsg/"
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroSection;

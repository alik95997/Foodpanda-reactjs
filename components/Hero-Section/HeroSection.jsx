import React from "react";
import "./herosection.css";
import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

const HeroSection = () => {
  return (
    <section class="hero">
      <div class="hero-left">
        <div class="hero-text">
          <h1>Hungry to make an impact</h1>
          <h2>There’s always room at our table.</h2>
        </div>
        <div class="search-wrapper">
          <input type="text" placeholder="Start your job search here" />
                <FontAwesomeIcon icon={faHouse} />
        </div>
      </div>
      <div class="hero-img-container">
        <img
          src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/2Nn1Y5_G9EZl9Qjb1WHOsg/"
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroSection;

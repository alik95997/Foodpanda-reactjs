import React from "react";
import "./about-section.css";
const AboutSection = () => {
  return (
    <section className="aboutSection">
      <div className="about-content">
        <h1>We love what we do</h1>
        <p>
          We love what we do foodpanda is the largest food and grocery delivery
          platform in Asia, outside of China. Operating in more than 400 cities
          across 11 markets, we continue to expand and grow in our core food
          delivery business, as well as in new verticals like grocery
          deliveries, with a strong tech infrastructure at our core. From our
          restaurants-partners, cloud kitchens and cloud grocery stores —
          foodpanda is just one tap away, getting everything you need into your
          hands quickly and conveniently!
        </p>
        <button className="btn">Find Out More</button>
      </div>
      <div>
        <img
          src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/0bc488e5-8713-4a1f-9d0f-08dc1849ff6f"
          alt=""
        />
      </div>
    </section>
  );
};

export default AboutSection;

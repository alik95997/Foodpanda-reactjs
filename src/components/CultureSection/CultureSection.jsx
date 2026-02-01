import React from "react";
import "./culture-section.css";
import FindMoreButton from "../FindMoreButton/FindMoreButton";
const CultureSection = () => {
  return (
    <section className="cultureSection">
      <div className="cultureSection-img">
        <img
          src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/5ad05d5a-d3c2-4d60-e1e9-08dbd6375a5b"
          alt=""
        />
      </div>
      <div className="CultureSection-Text">
        <h1>You can be yourself at foodpanda</h1>
        <p>
          With over 50 nationalities and 20 languages spoken across our markets,
          we pride ourselves on our focus on diversity and inclusion. We are
          able to exchange and bring to the table the best practices (and food!)
          from each corner of the world.
        </p>
          <FindMoreButton />
       
      </div>
    </section>
  );
};

export default CultureSection;

import React from "react";
import "./stats.css";
const Stats = () => {
  return (
    <section className="stats">
      <h1>A diverse and high-performing team</h1>
      <div className="stats-content">
        <div className="cards">
          <div className="card">
            <h1>7000 +</h1>
            <p>Employees</p>
          </div>
          <div className="card">
            <h1>4000 +</h1>
            <p>Cities</p>
          </div>
          <div className="card">
            <h1>50 +</h1>
            <p>nationalities</p>
          </div>
          <div className="card">
            <h1>20 +</h1>
            <p>languages</p>
          </div>
          <div>
            <img
              src="https://careers.foodpanda.com/blob/images/stats-image.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

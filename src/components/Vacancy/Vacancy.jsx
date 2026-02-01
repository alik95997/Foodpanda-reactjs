import React from "react";
import "./vacancy.css";
const Vacancy = () => {
  return (
    <section className="vacancy">
      <h1>Some roles you might be interested in</h1>
      <div className="vacancy-cards">
        <div className="vacancy-card">
          <div className="foodpanda-icon">
            <img
              src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/Blob/images/foodpanda-logo-small.png"
              alt=""
            />
          </div>
          <i className="fa-regular fa-star abc"></i>
          <div className="vacancy-card-texts">
            <h2>Associate Account management</h2>
            <p>
              <i className="fa-solid fa-location-dot"></i> Karachi, Pakistan
            </p>
            <button className="btn">
              read more <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>

        <div className="vacancy-card">
          <div className="foodpanda-icon">
            <img
              src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/Blob/images/foodpanda-logo-small.png"
              alt=""
            />
          </div>
          <i className="fa-regular fa-star abc"></i>
          <div className="vacancy-card-texts">
            <h2>Associate Account management</h2>
            <p>
              <i className="fa-solid fa-location-dot"></i> Karachi, Pakistan
            </p>
            <button className="btn">
              read more <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>

        <div className="vacancy-card">
          <div className="foodpanda-icon">
            <img
              src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/Blob/images/foodpanda-logo-small.png"
              alt=""
            />
          </div>
          <i className="fa-regular fa-star abc"></i>
          <div className="vacancy-card-texts">
            <h2>Associate Account management</h2>
            <p>
              <i className="fa-solid fa-location-dot"></i> Karachi, Pakistan
            </p>
            <button className="btn">
              read more
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacancy;

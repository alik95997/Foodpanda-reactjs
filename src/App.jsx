import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
      <HeroSection />
        
       
        <section class="card1">
          <div class="card-text">
            <h1>We love what we do</h1>
            <p>
              We love what we do foodpanda is the largest food and grocery
              delivery platform in Asia, outside of China. Operating in more
              than 400 cities across 11 markets, we continue to expand and grow
              in our core food delivery business, as well as in new verticals
              like grocery deliveries, with a strong tech infrastructure at our
              core. From our restaurants-partners, cloud kitchens and cloud
              grocery stores — foodpanda is just one tap away, getting
              everything you need into your hands quickly and conveniently!
            </p>
            <button class="btn">Find Out More</button>
          </div>
          <div>
            <img
              src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/0bc488e5-8713-4a1f-9d0f-08dc1849ff6f"
              alt=""
            />
          </div>
        </section>
        <section class="card2">
          <div class="card-img">
            <img
              src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/5ad05d5a-d3c2-4d60-e1e9-08dbd6375a5b"
              alt=""
            />
          </div>
          <div class="card-text">
            <h1>You can be yourself at foodpanda</h1>
            <p>
              With over 50 nationalities and 20 languages spoken across our
              markets, we pride ourselves on our focus on diversity and
              inclusion. We are able to exchange and bring to the table the best
              practices (and food!) from each corner of the world.
            </p>
            <button class="btn">Find Out More</button>
          </div>
        </section>

        <section class="stats">
          <h1>A diverse and high-performing team</h1>
          <div class="stats-content">
            <div class="cards">
              <div class="card">
                <h1>7000 +</h1>
                <p>Employees</p>
              </div>
              <div class="card">
                <h1>4000 +</h1>
                <p>Cities</p>
              </div>
              <div class="card">
                <h1>50 +</h1>
                <p>nationalities</p>
              </div>
              <div class="card">
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
        <section class="vacancy">
          <h1>Some roles you might be interested in</h1>
          <div class="vacancy-cards">
            <div class="vacancy-card">
              <div class="foodpanda-icon">
                <img
                  src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/Blob/images/foodpanda-logo-small.png"
                  alt=""
                />
              </div>
              <i class="fa-regular fa-star abc"></i>
              <div class="vacancy-card-texts">
                <h2>Associate Account management</h2>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Karachi, Pakistan
                </p>
                <button class="btn">
                  read more <i class="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>

            <div class="vacancy-card">
              <div class="foodpanda-icon">
                <img
                  src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/Blob/images/foodpanda-logo-small.png"
                  alt=""
                />
              </div>
              <i class="fa-regular fa-star abc"></i>
              <div class="vacancy-card-texts">
                <h2>Associate Account management</h2>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Karachi, Pakistan
                </p>
                <button class="btn">
                  read more <i class="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>

            <div class="vacancy-card">
              <div class="foodpanda-icon">
                <img
                  src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/Blob/images/foodpanda-logo-small.png"
                  alt=""
                />
              </div>
              <i class="fa-regular fa-star abc"></i>
              <div class="vacancy-card-texts">
                <h2>Associate Account management</h2>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Karachi, Pakistan
                </p>
                <button class="btn">
                  read more <i class="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section class="post-section">
          <h1>Read more about foodpanda</h1>
          <div class="posts">
            <div class="post">
              <div class="post-img-container">
                <p>Friday, 12 july 2024</p>
                <img
                  src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/__gtrPYlMEWeZAjcoAJNhA/APAC_pandapurpose-2023-cover-image-for-Newsroom-LinkedIn_FGD-190757_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F-1.jpg"
                  alt=""
                />
              </div>
              <div class="post-lower-container">
                <div class="post-lower-container-text">
                  <p>Company Update</p>
                  <p>
                    pandapurpose 2023: Delivering with purpose to local
                    communities across
                  </p>
                </div>
                <button class="">Read more</button>
              </div>
            </div>
            <div class="post">
              <div class="post-img-container">
                <p>Friday, 12 july 2024</p>
                <img
                  src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/__gtrPYlMEWeZAjcoAJNhA/APAC_pandapurpose-2023-cover-image-for-Newsroom-LinkedIn_FGD-190757_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F-1.jpg"
                  alt=""
                />
              </div>
              <div class="post-lower-container">
                <div class="post-lower-container-text">
                  <p>Company Update</p>
                  <p>
                    pandapurpose 2023: Delivering with purpose to local
                    communities across
                  </p>
                </div>
                <button class="">Read more</button>
              </div>
            </div>
            <div class="post">
              <div class="post-img-container">
                <p>Friday, 12 july 2024</p>
                <img
                  src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/__gtrPYlMEWeZAjcoAJNhA/APAC_pandapurpose-2023-cover-image-for-Newsroom-LinkedIn_FGD-190757_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F-1.jpg"
                  alt=""
                />
              </div>
              <div class="post-lower-container">
                <div class="post-lower-container-text">
                  <p>Company Update</p>
                  <p>
                    pandapurpose 2023: Delivering with purpose to local
                    communities across
                  </p>
                </div>
                <button class="">Read more</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div class="upper-footer">
          <div>
            <ul>
              <li>About Us</li>
              <li>Locations</li>
              <li>Teams</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Join Us</li>
              <li>Job Opening</li>
              <li>Our Values</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Privacy Policies</li>
              <li>Cookies and Similar Technologies Policy</li>
            </ul>
          </div>
          <div>
            <div class="search-wrapper">
              <input type="text" placeholder="Start your job search here" />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="down">
          <p>
            Connect with us: <i class="fa-brands fa-linkedin"></i>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;

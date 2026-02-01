import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero-Section/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import CultureSection from "./components/CultureSection/CultureSection";
import Stats from "./components/Stats/Stats";
import Vacancy from "./components/Vacancy/Vacancy";
import PostSection from "./components/PostSection/PostSection";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <AboutSection />
        <CultureSection />

        <Stats />
        <Vacancy />

        <PostSection />
      </main>

      <Footer />
    </>
  );
}

export default App;

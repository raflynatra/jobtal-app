import React from "react";
import Hero from "./components/hero";
import Strength from "./components/strength";
import Testimony from "./components/testimony";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Strength />
      <Testimony />
    </>
  );
};

export default Home;

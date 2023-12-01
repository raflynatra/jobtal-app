import React from "react";
import Hero from "../components/Home/Hero";
import HomeBottom from "../components/Home/HomeBottom";
import HomeTop from "../components/Home/HomeTop";
import LandingLayout from "../layouts/LandingLayout";

function Home() {
  return (
    <LandingLayout>
      <Hero />
      <HomeTop />
      <HomeBottom />
    </LandingLayout>
  );
}

export default Home;

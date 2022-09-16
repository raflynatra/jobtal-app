import React from "react";
import { useState } from "react";
import Hero from "../components/Home/Hero";
import HomeBottom from "../components/Home/HomeBottom";
import HomeTop from "../components/Home/HomeTop";

function Home() {
  useState(() => {}, []);
  return (
    <>
      <Hero />
      <HomeTop />
      <HomeBottom />
    </>
  );
}

export default Home;

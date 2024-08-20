import Home from "@/features/home";
import LandingLayout from "@/layouts/landing-layout";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <LandingLayout>
      <Home />
    </LandingLayout>
  );
};

export default HomePage;

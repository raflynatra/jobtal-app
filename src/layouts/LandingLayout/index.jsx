import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const LandingLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default LandingLayout;

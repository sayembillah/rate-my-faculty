import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="flex-grow"></div>
    </div>
  );
};

export default Home;

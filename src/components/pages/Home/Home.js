import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import Testimonials from "../../Testimonials/Testimonials";
import { homeObjOne, homeObjThree } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <Testimonials />
    </>
  );
}

export default Home;

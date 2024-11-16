import React from "react";
import CarouselHero from "../Components/CarouselHero";
import WelcomeSection from "../Components/WelcomeSection";
import LifeAtJay from "../Components/LifeAtJay";
import CoursePathway from "../Components/CoursePathway";
import Foooter from "../Components/Footer";
import AdmissionSection from "../Components/AdmissionSection";

const Home = () => {
  return (
    <div>
      <CarouselHero />
      <WelcomeSection />
      <LifeAtJay />
      <CoursePathway />
      <AdmissionSection />
      <Foooter />
    </div>
  );
};

export default Home;

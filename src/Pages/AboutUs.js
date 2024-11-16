import React from "react";
import AboutHero from "../Components/AboutHero";
import AboutText from "../Components/AboutText";
import Foooter from "../Components/Footer";
import PhotoGallery from "../Components/PhotoGallery";
import AdmissionSection from "../Components/AdmissionSection";
import MissionVisionSection from "../Components/MissionVisionSection";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <AboutText />
      <MissionVisionSection />
      <PhotoGallery />
      <AdmissionSection />
      <Foooter />
    </div>
  );
};

export default AboutUs;

import React from "react";
import AboutHero from "../Components/AboutHero";
import AboutText from "../Components/AboutText";
import Foooter from "../Components/Footer";
import PhotoGallery from "../Components/PhotoGallery";
import AdmissionSection from "../Components/AdmissionSection";
import MissionVisionSection from "../Components/MissionVisionSection";
import QuickAction from "../Components/QuickAction";

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <AboutHero />
      <AboutText />
      <MissionVisionSection />
      <QuickAction />
      <PhotoGallery />
      <AdmissionSection />
      <Foooter />
    </div>
  );
};

export default AboutUs;

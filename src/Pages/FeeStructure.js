import React from "react";
import Foooter from "../Components/Footer";
import AdmissionSection from "../Components/AdmissionSection";
import FeeStructures from "../Components/FeeStructures";
import AdmissionGuidelines from "../Components/AdmissionGuidlines";
import QuickAction from "../Components/QuickAction";
import FeeHero from "../Components/FeeHero";

const FeeStucture = () => {
  return (
    <div className="bg-gray-100">
      <FeeHero />
      <AdmissionGuidelines />
      <FeeStructures />
      <QuickAction />
      <AdmissionSection />
      <Foooter />
    </div>
  );
};

export default FeeStucture;

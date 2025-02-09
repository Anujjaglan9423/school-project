import React from "react";
import Foooter from "../Components/Footer";
import AdmissionSection from "../Components/AdmissionSection";
import QuickAction from "../Components/QuickAction";
import EnquiryForm from "../Components/EnquiryForm";
import EnquiryHero from "../Components/EnquiryHero";

const Enquiry = () => {
  return (
    <div className="bg-gray-100">
      <EnquiryHero />
      <EnquiryForm />
      <QuickAction />
      <AdmissionSection />
      <Foooter />
    </div>
  );
};

export default Enquiry;

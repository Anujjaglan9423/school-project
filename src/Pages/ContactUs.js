import React from "react";
import Foooter from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import AdmissionSection from "../Components/AdmissionSection";
import QuickAction from "../Components/QuickAction";
import ContactHero from "../Components/ContactHero";

const ContactUs = () => {
  return (
    <div className="bg-gray-100">
      <ContactHero />
      <ContactForm />
      <QuickAction />
      <AdmissionSection />
      <Foooter />
    </div>
  );
};

export default ContactUs;

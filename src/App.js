import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import FeeStructure from "./Pages/FeeStructure";
import Enquiry from "./Pages/Enquiry";
import LoginPage from "./Pages/Login";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/fee-structure" element={<FeeStructure />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;

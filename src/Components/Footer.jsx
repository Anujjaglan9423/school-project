import React from 'react';
import tw from 'tailwind-styled-components';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterWrapper = tw.div`bg-gray-900 text-white py-10 px-5 px-6`;
const FooterContainer = tw.div`flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-10 lg:space-y-0`;
const AddressSection = tw.div`flex flex-col space-y-5`;
const SchoolAddress = tw.div`text-gray-300`;
const KeyLinks = tw.div`flex flex-col space-y-2`;
const FooterLink = tw(Link)`text-gray-400 hover:text-white cursor-pointer`;
const FooterButton = tw(Link)`bg-red-600 text-white py-2 px-4 rounded-full font-bold hover:bg-red-700`;

const Footer = () => {
    return (
        <FooterWrapper>
            <div className="text-center lg:text-left">
                <h1 className="text-2xl font-bold">JAY INTERNATIONAL SCHOOL</h1>
            </div>

            <FooterContainer>
                {/* Address Section */}
                <AddressSection>
                    <h2 className="text-red-500 font-bold text-lg">Address</h2>
                    <SchoolAddress>
                        <h3 className="font-semibold">JAY INTERNATIONAL SCHOOL</h3>
                        <p>VPO. Jondhan Kalan, Israna, Panipat - 132103</p>
                        <p>
                            Tel: <a href="tel:+919053100557" className="text-gray-400 hover:text-white">+91-9053100557</a>, <a href="tel:+919053200557" className="text-gray-400 hover:text-white">+91-9053200557</a>
                        </p>
                        <p>
                            Email: <a href="mailto:jayinternational1@gmail.com" className="text-gray-400 hover:text-white">jayinternational1@gmail.com</a>
                        </p>
                        <div className="flex space-x-3 mt-2">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaYoutube /></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
                        </div>
                    </SchoolAddress>
                </AddressSection>

                {/* Key Links Section */}
                <KeyLinks>
                    <h2 className="text-red-500 font-bold text-lg">Key Links</h2>
                    <FooterLink to="/about-us">About Us</FooterLink>
                    <FooterLink to="/contact-us">Contact Us</FooterLink>
                    <FooterLink to="/fee-structure">Fee Structure</FooterLink>
                    <FooterLink to="/enquiry">Enquiry</FooterLink>
                </KeyLinks>
            </FooterContainer>

            {/* Buttons */}
            <div className="flex space-x-5 mt-10 justify-center lg:justify-start">
                <FooterButton to="/contact-us">Contact</FooterButton>
            </div>
        </FooterWrapper>
    );
};

export default Footer;

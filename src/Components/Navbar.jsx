import React, { useState } from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import Images from "../Images";

const NavbarContainer = tw.nav`flex items-center justify-between py-3 px-6 bg-white`;
const Logo = tw.div`text-xl font-bold`;
const NavLinks = tw.div`hidden md:flex space-x-6`;
const NavLink = tw(Link)`hover:text-white text-gray-800 transition-colors cursor-pointer hover:bg-red-600 bg-gray-50 rounded-full px-4 py-2 items-center`;
const MenuButton = tw.button`md:hidden text-gray-800 focus:outline-none`;
const MobileMenu = tw.div`absolute top-14 md:top-16 z-10 left-0 w-full bg-white text-white flex flex-col items-center space-y-4 py-4 md:hidden`;

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <NavbarContainer>
            <Logo>
                <Link to="/">
                    <img src={Images.Logo} alt="Logo" className=" h-10 w-auto" />
                </Link>
            </Logo>

            <NavLinks>
                <NavLink to="/about-us">About Us</NavLink>
                <NavLink to="/contact-us">Contact Us</NavLink>
                <NavLink to="/fee-structure">Fees</NavLink>
                <NavLink to="/enquiry">Enquiry</NavLink>
                <NavLink to="/login" className="bg-red-600 text-white hover:bg-red-800 px-6">Login</NavLink>
            </NavLinks>

            <MenuButton onClick={toggleMenu}>
                {isMenuOpen ? (
                    <FaTimes className="w-4 h-4" />
                ) : (
                    <FaBars className="w-4 h-4" />
                )}
            </MenuButton>

            {isMenuOpen && (
                <MobileMenu>
                    <NavLink to="/about-us" onClick={closeMenu}>About Us</NavLink>
                    <NavLink to="/contact-us" onClick={closeMenu}>Contact Us</NavLink>
                    <NavLink to="/fee-structure" onClick={closeMenu}>Fee Structure</NavLink>
                    <NavLink to="/enquiry" onClick={closeMenu}>Enquiry</NavLink>
                    <NavLink to="/login" onClick={closeMenu} className="bg-red-600 px-6 text-white hover:bg-red-800">Login</NavLink>
                </MobileMenu>
            )}
        </NavbarContainer>
    );
};

export default Navbar;

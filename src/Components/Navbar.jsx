import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import Images from '../Images';

// Styled components using Tailwind CSS
const NavbarContainer = tw.nav`flex items-center justify-between py-4 px-6 bg-gray-800 text-white`;
const Logo = tw.div`text-xl font-bold`;
const NavLinks = tw.div`hidden md:flex space-x-6`;
const NavLink = tw(Link)`hover:text-gray-300 transition-colors cursor-pointer`;
const MenuButton = tw.button`md:hidden text-white focus:outline-none`;
const MobileMenu = tw.div`absolute top-16 z-10 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 md:hidden`;

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <NavbarContainer>
            {/* Logo as an image */}
            <Logo>
                <Link to="/">
                    <img src={Images.Logo} alt="Logo" className="md:h-14 h-10 w-auto" />
                </Link>
            </Logo>

            {/* Desktop Nav Links */}
            <NavLinks>
                <NavLink to="/about-us">About Us</NavLink>
                <NavLink to="/contact-us">Contact Us</NavLink>
            </NavLinks>

            {/* Mobile Menu Button */}
            <MenuButton onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </MenuButton>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <MobileMenu>
                    <NavLink to="/about-us">About Us</NavLink>
                    <NavLink to="/contact-us">Contact Us</NavLink>
                </MobileMenu>
            )}
        </NavbarContainer>
    );
};

export default Navbar;

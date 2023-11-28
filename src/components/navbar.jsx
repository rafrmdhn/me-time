import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import '../App.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
    const pagesDropdownRef = useRef(null);
    const dropdownRef = useRef(null);
    const location = useLocation();
    const isHomePage = location.pathname === "/Home" || location.pathname === "/home";;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDocumentClick = (e) => {
        const navbarButton = document.getElementById("navbar-button");

        if (
            navbarButton &&
            !navbarButton.contains(e.target) &&
            dropdownRef.current &&
            !dropdownRef.current.contains(e.target)
        ) {
            setIsDropdownOpen(false);
            setIsMenuOpen(false);
        }

        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsDropdownOpen(false);
        }
    };

    const handleDropdownMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleDropdownMouseLeave = () => {
        setIsDropdownOpen(false);
    };
    
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
        if (window.innerWidth > 768 && isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    const handlePagesDropdownToggle = () => {
        setIsPagesDropdownOpen(!isPagesDropdownOpen);
    };

    const handlePagesDropdownMouseEnter = () => {
        setIsPagesDropdownOpen(true);
    };

    const handlePagesDropdownMouseLeave = () => {
        setIsPagesDropdownOpen(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        document.addEventListener("click", handleDocumentClick);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("click", handleDocumentClick);
        };
    }, [isMenuOpen]);

    return (
        <nav className={`fixed w-full z-20 top-0 start-0 ${isMenuOpen || isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/Home" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
                        <span className={`self-center text-2xl font-semibold whitespace-nowrap ${isScrolled || isHomePage ? 'text-black' : 'text-white'}`}>MeTime</span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link to="/ContactUs" type="button" className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-7 py-2 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">Contact Us</Link>
                        <button
                        id="navbar-button"
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                        </svg>
                    </button>
                    </div>
                    <div ref={dropdownRef} className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'} mobile-menu`} id="navbar-sticky">
                        <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 rounded-lg ${isScrolled || isHomePage ? 'text-black' : 'text-white'}`}>
                        <li>
                            <Link to="/Home" className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:hover:text-blue-700 dark:hover:bg-white dark:hover:text-blue-700 md:dark:hover:bg-transparent dark:border-gray-700 ${isScrolled || isHomePage ? 'menu-item-scrolled' : 'menu-item-transparent'}`}>Home</Link>
                        </li>
                        <li>
                            <Link to="/TentangKami" className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:hover:text-blue-700 dark:hover:bg-white dark:hover:text-blue-700 md:dark:hover:bg-transparent dark:border-gray-700 ${isScrolled || isHomePage ? 'menu-item-scrolled' : 'menu-item-transparent'}`}>About</Link>
                        </li>
                        <li className="relative" onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                            <a onClick={handleDropdownToggle} className={`flex justify-center item-center block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:hover:text-blue-700 dark:hover:bg-white dark:hover:text-blue-700 md:dark:hover:bg-transparent dark:border-gray-700 ${isScrolled || isHomePage ? 'menu-item-scrolled' : 'menu-item-transparent'}`}>Services
                            <svg className={`mt-2 w-2.5 h-2.5 ms-2.5 transform ${
                                isDropdownOpen ? "rotate-180" : "rotate-0"
                                }`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg></a>
                            {isDropdownOpen && (
                                <div className="z-10 absolute bg-white divide-y divide-white rounded-lg shadow w-44 dark:bg-white">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 justify-content">
                                        <li>
                                            <Link to="#" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-blue-400 dark:text-blue-700 dark:hover:text-white">Mental Konseling</Link>
                                        </li>
                                        <li>
                                            <Link to="/CekKesehatan" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-blue-400 dark:text-blue-700 dark:hover:text-white">Cek Kesehatan Mental</Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-blue-400 dark:text-blue-700 dark:hover:text-white">Meditasi</Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-blue-400 dark:text-blue-700 dark:hover:text-white">Forum Diskusi</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="relative"onMouseEnter={handlePagesDropdownMouseEnter} onMouseLeave={handlePagesDropdownMouseLeave}>
                            <a onClick={handlePagesDropdownToggle} className={`flex justify-center item-center block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:hover:text-blue-700 dark:hover:bg-white dark:hover:text-blue-700 md:dark:hover:bg-transparent dark:border-gray-700 ${isScrolled || isHomePage ? 'menu-item-scrolled' : 'menu-item-transparent'}`}>Pages
                            <svg className={`mt-2 w-2.5 h-2.5 ms-2.5 transform ${
                                isPagesDropdownOpen ? "rotate-180" : "rotate-0"
                                }`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg></a>
                            {isPagesDropdownOpen && (
                                <div className="z-10 absolute bg-white divide-y divide-white rounded-lg shadow w-44 dark:bg-white">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 justify-content">
                                        <li>
                                            <Link to="/TimKami" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-blue-400 dark:text-blue-700 dark:hover:text-white">Team</Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-blue-400 dark:text-blue-700 dark:hover:text-white">FaQ</Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-blue-400 dark:text-blue-700 dark:hover:text-white">Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;
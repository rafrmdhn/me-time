import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/img/me-time.png";
import '../App.css';

const Navbar = ({ isDiscussionPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [firstName, setFirstName] = useState ('');
    const [lastName, setlastName] = useState ('');
    const [email, setEmail] = useState('');
    const [profile, setProfile] = useState('');
    const [isUserOpen, setIsUserOpen] = useState(false);
    const localStorageKey = localStorage.getItem('UserKey');
    const dropdownRef = useRef(null);
    const location = useLocation();
    const history = useHistory();
    const isHomePage = location.pathname === "/Home" || location.pathname === "/home" || location.pathname === "/";
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsUserOpen(!isUserOpen);
    }

    const closeDropdown = () => {
        setIsUserOpen(false);
      };

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://195.35.8.190:4000/api/users/${localStorageKey}`);
            const { data } = response.data;
            setFirstName(data.firstName);
            setlastName(data.lastName);
            setEmail(data.email);
            setProfile(data.image);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
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

    const handleLogout = () => {
        localStorage.removeItem('UserKey');
        history.push("/Home");
      };

    useEffect(() => {
        if (localStorageKey) {fetchData();}
        return () => {window.removeEventListener("scroll", handleScroll);};
    }, [localStorageKey]);

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
        <nav className={`fixed w-full z-20 top-0 start-0 ${
            isDiscussionPage ? 'bg-gradient-to-r from-[#91C8E4] to-[#4682A9]' : isMenuOpen || isScrolled ? 'bg-gradient-to-r from-[#91C8E4] to-[#4682A9] navbar-scrolled' : 'navbar-transparent'}`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/Home" className="flex items-center">
                        <img src={Logo} className="h-12" alt="Me-Time"/>
                        <span className={`self-center text-2xl font-semibold whitespace-nowrap ${isScrolled || isHomePage ? 'text-black' : 'text-white'}`}>MeTime</span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {localStorageKey ? (
                            <div className="relative inline-block">
                                <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" class="flex items-center text-sm pe-3 py-1 font-medium text-white rounded-full bg-violet-700 hover:bg-violet-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-violet-200" type="button"
                                aria-expanded={isUserOpen}
                                onClick={toggleDropdown}>
                                    <span class="sr-only">Open user menu</span>
                                    <img class="w-8 h-8 rounded-full" src={profile} alt="user photo"/>
                                    {firstName} {lastName}
                                </button>
                                {isUserOpen && (
                                    <div class="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44" id="dropdownAvatar"  onBlur={closeDropdown}>
                                        <div class="px-4 py-3 text-sm text-gray-900">
                                            <div className="text-blue-700">{firstName} {lastName}</div>
                                            <div className="font-medium truncate text-blue-700">{email}</div>
                                        </div>
                                        <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownUserAvatarButton">
                                            <li>
                                                <Link to={`/Profile/${localStorageKey}`} className="block px-4 py-2 text-blue-700 hover:bg-gray-100">Settings</Link>
                                            </li>
                                        </ul>
                                        <div class="py-2">
                                            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 text-red-700 hover:bg-red-100" onClick={handleLogout}>Sign out</Link>
                                        </div>
                                    </div>   
                                )}
                            </div>
                        ) : (
                            <Link to="/Login" className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-3xl text-sm px-7 py-2 text-center">Sign In</Link>
                        )}
                        <button
                        id="navbar-button"
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
                    <div ref={dropdownRef} className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
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
                                <div className="z-20 absolute bg-white divide-y divide-white rounded-lg shadow w-44 dark:bg-white">
                                    <ul className="py-2 text-md text-gray-700 dark:text-gray-200 justify-content">
                                        <li>
                                            <Link to="/MentalKonseling" className="block px-4 py-3 hover:bg-gray-100 text-blue-700">Mental Konseling</Link>
                                        </li>
                                        <li>
                                            <Link to="/CekKesehatan" className="block px-4 py-3 hover:bg-gray-100 text-blue-700">Cek Kesehatan Mental</Link>
                                        </li>
                                        <li>
                                            <Link to="/Meditasi" className="block px-4 py-3 hover:bg-gray-100 text-blue-700">Meditasi</Link>
                                        </li>
                                        <li>
                                            <Link to="/ForumDiskusi" className="block px-4 py-3 hover:bg-gray-100 text-blue-700">Forum Diskusi</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link to="/ContactUs" className={`flex justify-center item-center block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:hover:text-blue-700 dark:hover:bg-white dark:hover:text-blue-700 md:dark:hover:bg-transparent dark:border-gray-700 ${isScrolled || isHomePage ? 'menu-item-scrolled' : 'menu-item-transparent'}`}>Contact Us</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;
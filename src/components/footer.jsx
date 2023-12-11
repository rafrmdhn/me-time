import React from "react";
import '../App.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
    const localStorageKey = localStorage.getItem('UserKey');
    return (
        <footer className="bg-gradient-to-r from-[#91C8E4] to-[#4682A9]">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 ">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MeTime</span>
                        </a>
                        <p className="text-left mt-4 text-white dark:text-white mr-1">Temukan solusi yang terjangkau dan dapat diakses<br />untuk mengelola kesehatan mental Anda.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-20 sm:grid-cols-3">
                        <div>
                            {localStorageKey ? ( 
                                <>
                                <h2 className="text-left mb-6 text-xl font-bold text-gray-900 uppercase dark:text-white">Services</h2>
                                <ul className="text-left text-white dark:text-white text-sm">
                                <li className="mb-4">
                                    <Link to="/MentalKonseling" className="hover:underline">Mental Konseling</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/CekKesehatan" className="hover:underline">Cek Kondisi Mental</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/Meditasi" className="hover:underline">Meditasi</Link>
                                </li>
                                <li>
                                    <Link to="/ForumDiskusi" className="hover:underline">Forum Diskusi</Link>
                                </li>
                                </ul>
                                </>
                                ) : (
                                <>
                                    <h2 className="text-left mb-6 text-xl font-bold text-gray-900 uppercase dark:text-white">Services</h2>
                                <ul className="text-left text-white dark:text-white text-sm">
                                <li className="mb-4">
                                    <Link to="/Login" className="hover:underline">Mental Konseling</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/Login" className="hover:underline">Cek Kondisi Mental</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/Login" className="hover:underline">Meditasi</Link>
                                </li>
                                <li>
                                    <Link to="/Login" className="hover:underline">Forum Diskusi</Link>
                                </li>
                                </ul>
                                </>
                            )};
                        </div>
                        <div>
                            <h2 className="text-left mb-6 text-xl font-bold text-gray-900 uppercase dark:text-white">Contact Us</h2>
                            <ul className="text-left text-white dark:text-white text-sm">
                            <li className="mb-4 md:flex">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 33 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.14556 6.7476C6.14822 6.7476 6.08156 6.81693 5.99756 6.8996C5.67489 7.21293 5.00689 7.86493 5.00016 9.22893C4.98956 11.1369 6.24422 14.6796 12.2856 20.7196C18.2989 26.7303 21.8362 27.9996 23.7482 27.9996H23.7762C25.1402 27.9929 25.7909 27.3236 26.1056 27.0023C26.2016 26.9036 26.2789 26.8316 26.3336 26.7863C27.6616 25.4503 28.3416 24.4556 28.3349 23.8183C28.3256 23.1676 27.5162 22.3983 26.3976 21.3343C26.0416 20.9956 25.6549 20.6276 25.2469 20.2196C24.1896 19.1649 23.6656 19.3449 22.5136 19.7503C20.9202 20.3089 18.7336 21.0689 15.3362 17.6703C11.9336 14.2703 12.6949 12.0863 13.2522 10.4929C13.6549 9.34093 13.8389 8.8156 12.7802 7.75693C12.3656 7.3436 11.9936 6.9516 11.6509 6.5916C10.5936 5.4796 9.83089 4.6756 9.18422 4.66627H9.17356C8.53489 4.66627 7.54289 5.34893 6.13889 6.75293C6.14289 6.74893 6.14422 6.7476 6.14556 6.7476ZM23.7496 29.9996C20.4269 29.9996 16.0949 27.3543 10.8722 22.1343C5.62956 16.8929 2.98022 12.5476 3.00011 9.21827C3.01222 7.01827 4.16556 5.8916 4.59889 5.46893C4.62156 5.44093 4.69889 5.36493 4.72556 5.33827C6.63756 3.42493 7.92689 2.6516 9.20956 2.66606C10.6989 2.68627 11.7589 3.80093 13.1002 5.21293C13.4322 5.56227 13.7922 5.94227 14.1936 6.34227C16.1402 8.28893 15.5856 9.87693 15.1402 11.1516C14.6549 12.5423 14.2349 13.7423 16.7496 16.2569C19.2669 18.7716 20.4669 18.3516 21.8522 17.8623C23.1282 17.4169 24.7122 16.8596 26.6616 18.8063C27.0562 19.2009 27.4309 19.5569 27.7762 19.8863C29.1949 21.2343 30.3149 22.2996 30.3338 23.7929C30.3496 25.0663 29.5762 26.3636 27.6669 28.2743L26.8216 27.7009L27.5362 28.3996C27.1136 28.8329 25.9882 29.9876 23.7869 29.9996H23.7496Z" fill="white"/>
                                    </svg>
                                    <a href="#" className="hover:underline ml-3">-</a>
                                </div>
                            </li>
                            <li className="mb-4 md:flex">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 33 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5447 2.66667C26.9847 2.66667 30.3327 6.28934 30.3327 11.0933V20.2507C30.3327 22.7093 29.4633 24.9307 27.8833 26.5067C26.466 27.9187 24.6273 28.6667 22.566 28.6667H9.42868C7.37135 28.6667 5.53402 27.92 4.11535 26.5067C2.53535 24.9307 1.66602 22.7093 1.66602 20.2507V11.0933C1.66602 6.28934 5.01402 2.66667 9.45402 2.66667H22.5447ZM22.5447 4.66667H9.45402C6.10068 4.66667 3.66602 7.36934 3.66602 11.0933V20.2507C3.66602 22.1747 4.32735 23.8933 5.52735 25.0893C6.56202 26.1227 7.91268 26.6667 9.43268 26.6667H22.5447C22.5473 26.664 22.558 26.6667 22.566 26.6667C24.0873 26.6667 25.4367 26.1227 26.4713 25.0893C27.6727 23.8933 28.3327 22.1747 28.3327 20.2507V11.0933C28.3327 7.36934 25.898 4.66667 22.5447 4.66667ZM24.646 10.8384C24.994 11.2664 24.9287 11.8957 24.5007 12.2451L18.5753 17.0611C17.826 17.6557 16.93 17.9531 16.0353 17.9531C15.1433 17.9531 14.254 17.6584 13.51 17.0691L7.53002 12.2477C7.09935 11.9011 7.03268 11.2704 7.37802 10.8411C7.72602 10.4131 8.35535 10.3451 8.78468 10.6904L14.7593 15.5064C15.51 16.1011 16.5673 16.1011 17.3233 15.5011L23.238 10.6931C23.6673 10.3424 24.2967 10.4091 24.646 10.8384Z" fill="white"/>
                                    </svg>
                                    <a href="#" className="hover:underline ml-3">-</a>
                                </div>
                            </li>
                            <li className="md:flex">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 33 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6655 2.66667C22.7309 2.66667 27.6655 7.63867 27.6655 13.7507C27.6655 21.264 19.0575 28.6667 16.6655 28.6667C14.2735 28.6667 5.66553 21.264 5.66553 13.7507C5.66553 7.63867 10.6002 2.66667 16.6655 2.66667ZM16.6655 4.66667C11.7029 4.66667 7.66553 8.74267 7.66553 13.7507C7.66553 20.1227 15.1642 26.3307 16.6655 26.6613C18.1669 26.3293 25.6655 20.1213 25.6655 13.7507C25.6655 8.74267 21.6282 4.66667 16.6655 4.66667ZM16.6669 9.33333C19.0562 9.33333 21.0002 11.2773 21.0002 13.668C21.0002 16.0573 19.0562 18 16.6669 18C14.2775 18 12.3335 16.0573 12.3335 13.668C12.3335 11.2773 14.2775 9.33333 16.6669 9.33333ZM16.6669 11.3333C15.3802 11.3333 14.3335 12.38 14.3335 13.668C14.3335 14.9547 15.3802 16 16.6669 16C17.9535 16 19.0002 14.9547 19.0002 13.668C19.0002 12.38 17.9535 11.3333 16.6669 11.3333Z" fill="white"/>
                                    </svg>
                                    <a href="#" className="hover:underline ml-3">-</a>
                                </div>
                            </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-left text-xl font-bold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-left text-white dark:text-white text-sm">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
                <div className="sm:flex mt-4 justify-center">
                    <span className="text-sm text-white sm:text-center dark:text-white">© 2023 MeTime™. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
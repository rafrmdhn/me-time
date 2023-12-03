import React from "react";
import '../App.css';

const Footer = () => {
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
                            <h2 className="text-left mb-6 text-xl font-bold text-gray-900 uppercase dark:text-white">Services</h2>
                            <ul className="text-left text-white dark:text-white text-sm">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Mental Konseling</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Cek Kondisi Mental</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Meditasi</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Forum Diskusi</a>
                            </li>
                            </ul>
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
                <div className="flex mt-4 justify-center sm:mt-0">
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                        </svg>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                        </svg>
                        <span className="sr-only">Discord community</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                        </svg>
                        <span className="sr-only">Twitter page</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                        </svg>
                        <span className="sr-only">GitHub account</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
                        </svg>
                        <span className="sr-only">Dribbble account</span>
                    </a>
                    </div>
                <div className="sm:flex mt-4 justify-center">
                    <span className="text-sm text-white sm:text-center dark:text-white">© 2023 MeTime™. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
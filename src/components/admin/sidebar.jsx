import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const [activeButton, setActiveButton] = useState("dashboard");

    // Retrieve activeButton from local storage on component mount
    useEffect(() => {
        const storedActiveButton = localStorage.getItem("activeButton");
        if (storedActiveButton) {
            setActiveButton(storedActiveButton);
        }
    }, []);

    const handleItemClick = (itemName) => {
        setActiveButton(itemName);
        // Store activeButton in local storage
        localStorage.setItem("activeButton", itemName);
    };

    const isButtonActive = (buttonName) => {
        return activeButton === buttonName;
    };

    return (
        <aside class="bg-gradient-to-r from-[#91C8E4] to-[#4682A9] -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
            <div class="relative border-b border-white/20">
                 <a class="flex items-center gap-4 py-6 px-8" href="#/">
                        <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">MeTime Dashboard</h6>
                    </a>
                    <button class="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden" type="button">
                        <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true" class="h-5 w-5 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        </span>
                    </button>
                    </div>
                    <div class="m-4">
                    <ul class="mb-4 flex flex-col gap-1">
                        <li>
                        <Link to="/admin/Dashboard">
                            <button className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-violet-800 active:bg-violet-700 w-full flex items-center gap-4 px-4 capitalize ${isButtonActive("Dashboard") ? 'bg-violet-600' : ''}`} type="button"
                            onClick={() => handleItemClick("Dashboard")}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit">
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                            </svg>
                            <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Dashboard</p>
                            </button>
                        </Link>
                        </li>
                        <li>
                        <Link to="/admin/User">
                            <button class={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-violet-800 active:bg-violet-700 w-full flex items-center gap-4 px-4 capitalize ${isButtonActive("User") ? 'bg-violet-600' : ''}`} type="button"
                            onClick={() => handleItemClick("User")}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit">
                                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                            </svg>
                            <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">User</p>
                            </button>
                        </Link>
                        </li>
                        <li>
                        <Link to="/admin/Table">
                            <button class={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-violet-800 active:bg-violet-700 w-full flex items-center gap-4 px-4 capitalize ${isButtonActive("Tables") ? 'bg-violet-600' : ''}`} type="button"
                            onClick={() => handleItemClick("Tables")}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit">
                                <path fill-rule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clip-rule="evenodd"></path>
                            </svg>
                            <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">tables</p>
                            </button>
                        </Link>
                        </li>
                        <li>
                        <Link to="/admin/Inbox">
                            <button class={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-violet-800 active:bg-violet-700 w-full flex items-center gap-4 px-4 capitalize ${isButtonActive("Inbox") ? 'bg-violet-600' : ''}`} type="button"
                            onClick={() => handleItemClick("Inbox")}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-inherit">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                            </svg>
                            <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Inbox</p>
                            </button>
                        </Link>
                        </li>
                    </ul>
                    <ul class="mb-4 flex flex-col gap-1">
                        <li class="mx-3.5 mt-4 mb-2">
                        <p class="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">auth pages</p>
                        </li>
                        <li>
                        <Link class="" to="/Login">
                            <button class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-violet-800 active:bg-violet-700 w-full flex items-center gap-4 px-4 capitalize" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit">
                                <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
                            </svg>
                            <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">sign out</p>
                            </button>
                        </Link>
                        </li>
                    </ul>
                </div>
        </aside>
    );
};

export default Sidebar;
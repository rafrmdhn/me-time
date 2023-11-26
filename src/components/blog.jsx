import React from "react";
import { Link } from 'react-router-dom';
import BlogAssets1 from '../assets/img/blogassets1.jpg';
import BlogAssets2 from '../assets/img/blogassets2.jpg';
import BlogAssets3 from '../assets/img/blogassets3.webp';

const Blog = () => {
    return (
        <section class="text-gray-600 body-font">
            <p className="mb-2 text-sm text-black dark:text-black">
                Blog
            </p>
            <h3 className="text-4xl font-semibold text-black dark:text-black">
                Our Blog For You
            </h3>
            <div class="container px-5 py-20 mx-auto">
                <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/3">
                    <div class="h-full rounded-lg overflow-hidden">
                    <img class="lg:h-64 md:h-56 w-full object-cover object-center rounded-3xl" src={BlogAssets2} alt="blog"/>
                    <div class="p-2 mt-4">
                        <h1 class="text-left text-2xl font-medium text-black mb-3">Kenali Jenis-jenis Gangguan Mental dan...</h1>
                        <p class="text-left leading-relaxed mb-3">Gangguan mental merupakan kondisi yang bisa saja dialami siapapun..</p>
                        <div class="flex items-center flex-wrap ">
                        <Link to="" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="p-4 md:w-1/3">
                    <div class="h-full rounded-lg overflow-hidden">
                    <img class="lg:h-64 md:h-56 w-full object-cover object-center rounded-3xl" src={BlogAssets3} alt="blog"/>
                    <div class="p-2 mt-4">
                        <h1 class="text-left text-2xl font-medium text-black mb-3">Mental Illness (Gangguan Mental)</h1>
                        <p class="text-left leading-relaxed mb-3">Mental illness atau gangguan mental merupakan salah satu masalah kesehatan...</p>
                        <div class="flex items-center flex-wrap ">
                        <Link to="" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="p-4 md:w-1/3">
                    <div class="h-full rounded-lg overflow-hidden">
                    <img class="lg:h-64 md:h-56 w-full object-cover object-center rounded-3xl" src={BlogAssets1} alt="blog"/>
                    <div class="p-2 mt-4">
                        <h1 class="text-left text-2xl font-medium text-black mb-3">GEJALA DAN PENYEBAB GANGGUAN MENTAL</h1>
                        <p class="text-left leading-relaxed mb-3">Gangguan mental atau gangguan jiwa adalah penyakit yang memengaruhi..</p>
                        <div class="flex items-center flex-wrap ">
                        <Link to="" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    );
};

export default Blog;
import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
import AboutAssets from '../assets/img/about-homeassets.png';

const About = () => {
    return (
        <section className="dark:bg-[#F6F4EB] py-8">
            <div className="flex items-center justify-center  dark:text-gray-100 p-8 xl:mx-20 min-[320px]:mx-auto">
                <div classNameName="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full mb-10 md:w-1/2 lg:mb-0">
                            <img src={AboutAssets} alt=""
                                className="z-40 object-right w-full rounded-md md:h-96 h-68"/>
                        </div>
                        <div className="px-8 mb-10 md:w-1/2 lg:mb-0 text-left">
                            <p className="mb-2 text-lg font-sm text-black ">
                                Tentang Kami
                            </p>
                            <h2 className="pb-2 text-5xl font-semibold md:text-4xl text-black">
                                Temukan Wajah Dibalik Konsultasi Kesehatan Mental Kami
                            </h2>
                            <p className="mb-4 mt-10 text-base leading-7 text-black">
                                MeTime adalah platform inovatif yang menyatukan terapi mental dan meditasi untuk membantu 
                                individu mengelola kesehatan mental mereka. Dengan akses mudah, fitur terapeutik, dan dukungan ahli, 
                                MeTime memberikan solusi terjangkau dan efektif untuk meningkatkan kesejahteraan mental.
                            </p>
                            <Link to="#"
                                className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-7 py-2 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                                See Detail
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
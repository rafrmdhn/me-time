import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import HeroAssets from '../assets/img/heroassets.png';

const Hero = () => {
    return (
        <section className="dark:bg-[#F6F4EB] dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col p-4 justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left mt-20">
                    <h1 className="text-5xl font-bold leadi text-black sm:text-5xl">Temukan <span className="dark:text-violet-700">Ketenangan </span>
                    Dalam Genggaman Anda
                    </h1>
                    <p className="mt-6 mb-8 text-xs text-black sm:mb-12">Bersama MeTime, Anda dapat menyesuaikan perjalanan kesehatan mental Anda, mengeksplorasi sumber daya yang relevan, dan meraih kebahagiaan sejati.</p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link rel="noopener noreferrer" to="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-7 py-2 text-center dark:bg-violet-600 dark:hover:bg-violet-700  dark:text-white">Get Started</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-128 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 mt-20">
                    <img src={HeroAssets} alt="" className="object-contain h-128 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
        
    );
};

export default Hero;
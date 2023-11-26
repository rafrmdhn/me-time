import React from "react";
import '../App.css';

const Header = ({ title, description }) => {        
    return (
       <header className="h-100 bg-gradient-to-r from-[#91C8E4] to-[#4682A9]" >
            <div className="flex flex-wrap"> 
                <div className="w-full text-left mt-20 mb-10">
                    <div className="container mx-auto h-full sm:p-10">
                        <div className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                            <div className="vector"></div>
                            <div className="w-full mt-10 ml-10 mr-20">
                                <h1 className="text-4xl lg:text-5xl text-white font-bold">{title}</h1>
                                <p className="text-l text-white mb-10 mt-10 mr-20">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header> 
    );
};

export default Header;
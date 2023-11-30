import React from "react";

const User = () => {
    return (
        <div className="bg-gradient-to-r from-[#91C8E4] to-[#4682A9] py-5">
            <div className="container mx-auto flex flex-col md:flex-row justify-evenly">
                <div className="text-center">
                    <h1 className="text-xs md:text-sm mb-2 text-white">Experienced</h1>
                    <h1 className="text-3xl md:text-5xl font-medium text-white">8+</h1>
                </div>
                <div className="text-center">
                    <h1 className="text-xs md:text-sm mb-2 text-white">Teams</h1>
                    <h1 className="text-3xl md:text-5xl font-medium text-white">5</h1>
                </div>
                <div className="text-center">
                    <h1 className="text-xs md:text-sm mb-2 text-white">Client</h1>
                    <h1 className="text-3xl md:text-5xl font-medium text-white">99+</h1>
                </div>
            </div>
        </div>
    );
};

export default User;
import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import EditProfile from "../components/editprofile";
import Footer from "../components/footer";

const UserProfile = () => {
    return (
        <div className="bg-[#F6F4EB]">
            <Header
                title = "Personal Information"
            />
            <Navbar />
            <EditProfile />
            <Footer />
        </div>
    );
};

export default UserProfile;
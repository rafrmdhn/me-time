import React from "react";
import '../App.css';
import Navbar from "../components/navbar";
import Header from "../components/header";
import About from "../components/aboutus";
import Question from "../components/question";
import Welcome from "../components/welcome_massage";
import Quote from "../components/quote";
import Team from "../components/team";
import User from "../components/user";
import Story from "../components/story";
import Subscription from "../components/subscription";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const TentangKami = () => {
    return (
        <div className="bg-[#F6F4EB]">
            <Header
                title = "Tentang Kami"
                description="MeTime adalah pelopor dalam perawatan kesehatan mental yang terjangkau 
                dan dapat diakses oleh siapa saja. Temukan ketenangan dalam genggaman Anda dengan 
                menggabungkan kekuatan terapi mental dan meditasi dalam satu platform. Dengan MeTime, 
                Anda dapat menyesuaikan perjalanan kesehatan mental Anda, mengeksplorasi sumber daya 
                yang relevan, dan meraih kebahagiaan sejati. Mulailah perjalanan Anda menuju kesehatan 
                mental yang optimal - satu langkah kebahagiaan setiap saat."
            />
            <Navbar />
            <br /><br />
            <About />
            <br /><br />
            <Question />
            <Welcome />
            <Quote />
            <Team />
            <User />
            <Story />   
            <Subscription />
            <Testimonial /><br />
            <Footer />
        </div>
    );
};

export default TentangKami;
import React from "react";
import '../App.css';
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import User from "../components/user";
import Question from "../components/question";
import About from "../components/aboutus";
import Feature from "../components/feature";
import Psychiatrist from "../components/psychiatrist";
import Team from "../components/team";
import Quote from "../components/quote";
import Subscription from "../components/subscription";
import Testimonial from "../components/testimoni/testimonial";
import FaQ from "../components/faq";
import Blog from "../components/blog";
import Footer from "../components/footer";

const Home = () => {
    return (
        <div className="bg-[#F6F4EB]">
            <Navbar/>
            <Hero />
            <User />
            <Question />
            <About />
            <Feature />
            <Psychiatrist />
            <Team />
            <Quote />
            <Subscription />
            <Testimonial />
            <FaQ />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;
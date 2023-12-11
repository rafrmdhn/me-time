import React from "react";
import '../../App.css';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Konseling from "../../components/konseling";
import Psychiatrist from "../../components/psychiatrist";
import Video from "../../components/fitur/video";
import Subscription from '../../components/subscription';
import Testimonial from "../../components/testimoni/testimonial";
import Footer from '../../components/footer';

const MentalKonseling = () => {
    return (
        <div className="bg-[#F6F4EB]"> 
            <Header
                title = "Detail Layanan"
                description="Dengan fokus pada kebutuhan individu, kami menyediakan solusi yang disesuaikan untuk memenuhi harapan Anda. Dari konsultasi mendalam hingga pendekatan praktis, setiap detail dirancang dengan cermat untuk memastikan kepuasan pelanggan. Temukan keunggulan dalam layanan kami yang membawa dampak positif dan memberikan solusi terbaik bagi Anda."
            />
            <Navbar />
            <Konseling />
            <Psychiatrist />
            <Video />
            <Subscription />
            <Testimonial /><br />
            <Footer />
        </div>
    );
};

export default MentalKonseling;
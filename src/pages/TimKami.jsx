import React from "react";
import '../App.css';
import Header from "../components/header";
import Navbar from "../components/navbar";
import Member from "../components/member";
import Subscription from "../components/subscription";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const TimKami = () => {
    return (
        <div className="bg-[#F6F4EB]">
            <Header
                title = "Tim Kami"
                description="Bertemu dengan Tim Profesional Kami yang Berdedikasi. 
                Dibentuk oleh individu berbakat dan berpengalaman, tim kami adalah inti dari 
                pelayanan kami yang unggul. Setiap anggota tim memiliki komitmen yang tinggi 
                untuk memberikan layanan terbaik, dengan fokus pada keahlian dan dedikasi terhadap 
                kepuasan pelanggan. Jelajahi keberagaman dan keunggulan yang dimiliki setiap anggota 
                tim kami, yang siap membantu Anda mencapai tujuan dan kebutuhan Anda dengan penuh 
                dedikasi."
            />
            <Navbar/>
            <Member />
            <Subscription />
            <Testimonial /><br />
            <Footer />
        </div>
    );
};

export default TimKami;
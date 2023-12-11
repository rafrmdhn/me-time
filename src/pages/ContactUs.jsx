import React from 'react'

import Navbar from '../components/navbar';
import Header from '../components/header';
import Contact from '../components/fitur/contact';
import Footer from '../components/footer';

const ContactUs = () => {
    return (
        <div className="bg-[#F6F4EB]">
            <Navbar />
            <Header
                title='Contact Us'
                description='
                    Apakah Anda memiliki pertanyaan, umpan balik, atau ingin berbagi pengalaman? 
                    Kami siap membantu! Silakan hubungi tim kami melalui formulir kontak di bawah ini 
                    atau melalui informasi kontak yang tercantum. Kami berkomitmen untuk merespons dengan 
                    cepat dan memberikan dukungan yang Anda butuhkan. Terima kasih atas kepercayaan Anda 
                    kepada kami. Kami berharap dapat mendengar dari Anda segera.'
            />
            <Contact />
            <Footer />
        </div>
    );
};

export default ContactUs;
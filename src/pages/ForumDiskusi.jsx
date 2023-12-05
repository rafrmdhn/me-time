import React from 'react'

import Navbar from '../components/navbar';
import Header from '../components/header';
import Forum from '../components/forum';
import Footer from '../components/footer';

const ForumDiskusi = () => {
    return (
        <div className="bg-[#F6F4EB]">
            <Navbar />
            <Header
                title='Forum Diskusi'
                description='
                Ruang online yang mendukung dan inklusif, dirancang khusus untuk membuka dialog terbuka tentang kesehatan mental. 
                Dalam forum ini, pengguna MeTime dapat berbagi pengalaman, cerita, dan strategi yang mereka temukan dalam perjalanan kesehatan mental mereka. 
                Dengan suasana yang penuh empati, pengguna dapat merasa didengar dan mendukung satu sama lain.'
            />
            <Forum />
            <Footer />
        </div>
    );
};

export default ForumDiskusi;
import React from "react";
import '../App.css';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Feature from "../components/feature";
import CardLayanan from "../components/CardLayanan";
import Subscription from "../components/subscription";
import TestimonialPage from "../components/TestimonialPage";

const OurServices = () => {
    return (
        <div>
            <Navbar />
            <Header
                title="Layanan Kami"
                description="Dengan komitmen tinggi terhadap kualitas, tim profesional kami siap memberikan pelayanan terbaik dalam berbagai bidang. Dari Mental Konseling hingga solusi Meditasi, kami hadir untuk memenuhi setiap tuntutan Anda. Temukan pengalaman layanan yang tak tertandingi dan percayakan kebutuhan Anda pada kami."
            />

                <h1 className='text-3xl text-center font-medium my-3'>Meningkatkan Kualitas Hidup dengan Layanan <br /> Konsultasi Kesehatan Mental Kami</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2'>
              
                <CardLayanan
                  image={'https://d3uhejzrzvtlac.cloudfront.net/compro/articleContent/703d5bda-019c-4500-a2f4-d6d6e46aff92.jpg'}
                  layanan='Mental Konseling'
                  deskripsi='Temukan ketenangan dan keseimbangan melalui beragam meditasi panduan.'
                  link='/konsultasi'
                />
                <CardLayanan
                  image={'https://d3uhejzrzvtlac.cloudfront.net/compro/articleContent/703d5bda-019c-4500-a2f4-d6d6e46aff92.jpg'}
                  layanan='Cek Kondisi Mental'
                  deskripsi='Lakukan penilaian kesehatan mental untuk memahami keadaan emosional dan psikologis Anda.'
                  link='/screening'
                />
                <CardLayanan
                  image={'https://d3uhejzrzvtlac.cloudfront.net/compro/articleContent/703d5bda-019c-4500-a2f4-d6d6e46aff92.jpg'}
                  layanan='Meditasi'
                  deskripsi='Temukan ketenangan dan keseimbangan melalui beragam meditasi panduan.'
                  link='/meditation'
                />
                <CardLayanan
                  image={'https://d3uhejzrzvtlac.cloudfront.net/compro/articleContent/703d5bda-019c-4500-a2f4-d6d6e46aff92.jpg'}
                  layanan='Forum Diskusi'
                  deskripsi='Jelajahi ruang aman dan mendukung di Forum Diskusi MeTime.'
                  link='/forum'
                />
            </div>

            {/* <Feature /> */}
            <Subscription />
            <TestimonialPage />
            <Footer />
        </div>
    );
}


export default OurServices;
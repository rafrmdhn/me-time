import React from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import BurnOutQuiz from '../components/quizburnout';
import Footer from '../components/footer';

const TestBurnOut = () => {
    return (
        <div className='bg-[#F6F4EB]'>
            <Navbar/>
            <Header
                title="Test Burn Out"
                description="
                    Burnout adalah salah satu bentuk gangguan psikososial akibat situasi tempat kerja yang paling sering 
                    terjadi dikalangan masyarakat yang banyak menghabiskan biaya baik dari sisi individunya dan juga 
                    organisasinya. Burnout dapat terjadi kepada siapapun.
                    Burnout adalah reaksi respon seseorang terhadap berkepanjangan ditempat 
                    kerja yang dapat mengakibatkan gangguan kesehatan, seperti gangguan proses 
                    berpikir, emosi, perilaku ke arah yang negatif. Dampak perubahan perilaku 
                    negatif ini dapat berpengaruh kepada pekerjaan, rekan kerja dan pelanggan di 
                    lingkungan pekerjaanya. Ini bukan merupakan masalah yang personal, tetapi 
                    karakteristik dari aktifitas pekerjaan tertentu.
                "
            />
            <div className="container mx-auto">
                <BurnOutQuiz/>
            </div>
            <Footer/>
        </div>
    )
}

export default TestBurnOut;
import React from 'react';

import Navbar from '../components/navbar';
import Header from '../components/header';
import DepressionQuiz from '../components/quizdepression';
import Footer from '../components/footer';

const TestDepresi = () => {
    return (
        <div className='bg-[#F6F4EB]'>
            <Navbar/>
            <Header
                title="Test Level Depresi"
                description="
                    Gangguan Depresi adalah salah satu gangguan emosi dan perilaku yang cukup sering terjadi di masyarakat dan 
                    dapat menggangu fungsi dalam kehidupan sehari-hari. apakah anda mengalami depresi? Beck Depression Inventory 
                    (BDI) adalah salah satu tes psikometri yang digunakan untuk mengukur tingkat depresi seseorang BDI telah diuji 
                    dan diteliti validitasnya dalam berbagai penelitian di beberapa negara dan dinilai konsisten serta layak digunakan."
            />
            <div className="container mx-auto">
              <DepressionQuiz />
            </div>
            <Footer/>
        </div>
    )
}

export default TestDepresi;
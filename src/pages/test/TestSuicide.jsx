import React from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import SuicideQuiz from '../../components/quiz/quizsuicide';
import Footer from '../../components/footer';

const TestSuicide = () => {
    return (
        <div className='bg-[#F6F4EB]'>
            <Navbar/>
            <Header
                title="Test Pecobaan Bunuh Diri"
                description="
                    Bunuh diri merupakan fenomena global dan terjadi sepanjang hidup. Bunuh diri menjadi penyebab 
                    utama kematian pada kelompok umur 15-29 tahun secara global. Sebanyak 79% bunuh diri terjadi 
                    di Negara dengan pendapatan rendah sampai menengah. Bunuh diri juga menyumbang 1.4% kematian di 
                    seluruh dunia, dan menjadi salah satu penyebab kematian tahun 2016 (Asosiasi Pencegahan Bunuh Diri 
                    Indonesia, 2020; WHO, 2021). Kuisioner diabawah ini adalah salah satu alat yang dapat digunakan untuk menentukan adanya 
                    risiko bunuh diri pada seseorang
                "
            />
            <div className="container mx-auto">
                <SuicideQuiz/>
            </div>
            <Footer/>
        </div>
    )
}

export default TestSuicide;
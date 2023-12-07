import React from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import PersonalityQuiz from '../components/quizpersonality';
import Footer from '../components/footer';

const TestPersonality = () => {
    return (
        <div className='bg-[#F6F4EB]'>
            <Navbar/>
            <Header
                title="Test Personality"
                description="
                    Para peneliti psikologi secara umum membedakan lima kategori utama yang membedakan masing-masing individu di 
                    dalam berperilaku sehari-hari yang unik yaitu seperti kepribadian utama, ketertarikan, 
                    dorongan, nilai, konsep diri, kemampuan dan pola emosional. The Big Five Personality Traits adalah salah 
                    satu pembagian karakteristik yang paling populer di dalam pembelajaran dunia psikologi dalam 20 tahun terakhir."   
            />
            <div className="container mx-auto">
                <PersonalityQuiz/>
            </div>
            <Footer/>
        </div>
    )
}

export default TestPersonality;
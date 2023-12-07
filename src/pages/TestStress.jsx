import React from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import StressQuiz from '../components/quizstress';
import Footer from '../components/footer';

const TestStres = () => {
    return (
        <div className="bg-[#F6F4EB]">
            <Navbar />
            <Header
                title="Test Level Stress"
                description="
                    Dengan mengetahui level stres yang ada di dalam kondisi tubuh kita, maka akan mudah untuk dapat kita mengelola stres, 
                    sehingga dampak stres yang berlebihan tidak sampai menyebbkan munculnya gangguan pada fisik atau psikologis kita.
                    Beberapa pertanyaan tampak sama, tetapi mereka memiliki makna yang berbeda, dan sebaiknya anda menjawab masing-masing 
                    pertanyaan sesuai apa yang anda alami atau anda rasakan saat ini. Hasil terbaik adalah dengan menjawab pertanyaan secara cepat 
                    Jangan mencoba untuk menghitung berapa kali anda merasakannya, yang dapat memberikan jawaban yang berbeda yang mungkin tidak 
                    mewakili perasaan anda sekarang.dan sejujur-jujurnya."
            />
            <div className="container mx-auto">
                <StressQuiz />
            </div>
            <Footer />
        </div>
    )
}

export default TestStres;
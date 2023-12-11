import React from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import CemasQuiz from '../../components/quiz/quizcemas';
import Footer from '../../components/footer';

const TestCemas = () => {
    return (
        <div className='bg-[#F6F4EB]'>
            <Navbar/>
            <Header
                title="Deteksi Gangguan Cemas"
                description="
                    Cemas merupakan respon normal dan adaptasi seseorang dalam menghadapi suatu kejadian. 
                    Secara alami adanya perasaan cemas bertujuan untuk menyelamatkan kehidupan dari hal yang 
                    kurang menyenangkan, rasa nyeri, memerlukan pertolongan, adanya rasa frustrasi, perpisahan 
                    dengan orang yang dicintai, dll. Dengan mengetahui secara dini adanya gangguan cemas maka penanganan 
                    dapat lebih awal dilakukan sehingga dapat dilakukan penangan lebih awal dengan harapan 
                    agar segera dapat diatasi dan gejala tidak menjadi lebih berat."
            />
            <div className="container mx-auto">
                <CemasQuiz/>
            </div>
            <Footer/>
        </div>
    )
}

export default TestCemas;
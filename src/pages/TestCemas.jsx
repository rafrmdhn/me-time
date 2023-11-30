import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';

const TestCemas = () => {

    const DeteksiKecemasan = () => {
        const quizQuestions = [
            {
                question: 'Kibas-kibas atau kesemutan.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Perasaan panas.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Lemas atau goyah pada kaki.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Tidak dapat rileks.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Takut sesuatu jelek akan terjadi.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Pusing atau kepala terasa dingin.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Jantung berdebar-debar.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Goyah dan tidak tahan berdiri.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Ketakutan.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Gugup.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Perasaan tercekik atau tersedak.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Tangan gemetaran.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Badan gemetar atau goyah.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Takut hilang kendali.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Kesulitan bernafas.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Takut sekarat.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Ciut hati/hilang nyali.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Pencernaan atau lambung perut terganggu.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'ingsan atau perasaan mau pingsan.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
              {
                question: 'Wajah merona/kemerahan.',
                options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
              },
        ];
      
        const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(0));
        const [showScore, setShowScore] = useState(false);
      
        const handleAnswerChange = (questionIndex, value) => {
          setShowScore(false);
      
          setAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[questionIndex] = value;
            return newAnswers;
          });
        };
      
        const calculateScore = () => {
          const score = answers.reduce((acc, answer) => acc + answer, 0);
          return score;
        };
      
        const interpretScore = (score) => {
          if (score >= 0 && score <= 44) return { level: 'Rendah', solution: 'Jika Anda mengalami gangguan kecemasan pada tingkat rendah, pertimbangkan untuk mengintegrasikan kegiatan relaksasi ke dalam rutinitas harian Anda. Latihan pernapasan dalam, meditasi ringan, atau yoga dapat membantu menurunkan tingkat kecemasan. ' };
          else if (score >= 45 && score <= 70) return { level: 'Sedang', solution: 'Untuk gangguan kecemasan pada tingkat sedang, pertimbangkan konseling atau terapi. Seorang profesional kesehatan mental dapat membantu Anda mengidentifikasi penyebab kecemasan dan memberikan strategi koping yang efektif. Selain itu, pertimbangkan teknik kognitif perilaku yang dapat membantu mengubah pola pikir yang tidak sehat.' };
          else return { level: 'Tinggi', solution: 'Jika Anda mengalami gangguan kecemasan pada tingkat tinggi, penting untuk mencari bantuan profesional segera. Konsultasikan dengan seorang psikiater atau psikolog yang dapat memberikan perawatan dan dukungan yang sesuai. ' };
        };
      
      
        const handleCheckScore = () => {
          setShowScore(true);
        };
      
        return (
          <div className="my-8 max-w-4xl px-3 py-2 mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">CEK LEVEL GANGGUAN CEMAS ANDA</h2>
      
            {quizQuestions.map((question, index) => (
              <div key={index} className="mb-6 border-b pb-4 text-left">
                <p className="text-lg mb-2">{`${index + 1}. ${question.question}`}</p>
      
                  <div className="flex flex-wrap items-center px-4">
                      {question.options.map((option, optionIndex) => (
                          <label key={optionIndex} className="mb-2 mr-3 flex items-center">
                              <input  
                                      type="radio" name={`q${index + 1}`} value={optionIndex + 1} checked={answers[index] === optionIndex + 1} 
                                      onChange={() => handleAnswerChange(index, optionIndex + 1)} className="mr-2"
                              />
                              {option}
                          </label>
                      ))}
                  </div>
              </div>
            ))}
      
            <div className="mt-6">
              <button onClick={handleCheckScore} className="bg-blue-500 text-white px-4 py-2 rounded w-full">Check Score</button>
              {showScore && (
                  <>
                      <p className="text-xl mt-4 text-left">Skor: {calculateScore()}</p><br />
                      <p className="text-xl text-left">Interpretasi Skor: {interpretScore(calculateScore()).level}</p><br />
                      <p className="text-xl text-left">Solusi:  <br />{interpretScore(calculateScore()).solution}</p>
                  </>
              )}
            </div>
          </div>
        );
    };


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
                <DeteksiKecemasan/>
            </div>
            <Footer/>
        </div>
    )
}

export default TestCemas
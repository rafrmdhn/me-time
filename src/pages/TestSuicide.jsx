import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';

const TestSuicide = () => {

    const SuicideQuiz = () => {
        const quizQuestions = [
            {
                question: 'S-ex: Jenis kelamin - Laki-laki',
                options: ['Tidak', 'Ya'],
              },
              {
                question: 'A-ge: < 19 tahun atau > 45 tahun',
                options: ['Tidak', 'Ya'],
              },
              {
                question: 'D-epression: Pasien MRS dengan depresi atau penurunan konsentrasi, gangguan tidur, gangguan pola makan, dan/atau gangguan libido',
                options: ['Tidak', 'Ya'],
              },
              {
                question: 'P-revious suicide: Ada riwayat percobaan bunuh diri atau perawatan psikiatri',
                options: ['Tidak', 'Ya'],
              },
              {
                question: 'E-xcessive alcohol or substance: Ketergantungan alkohol atau pemakai narkoba',
                options: ['Tidak', 'Ya'],
              },
              {
                question: 'R-ational thinking loss: Kehilangan pikiran rasional: psikosis, organic brain syndrome',
                options: ['Tidak', 'Ya'],
              },
              {
                question: 'S-eparated: Bercerai atau janda',
                options: ['Tidak', 'Ya'],
              },
              {
                question: 'O-rganized plan: Menunjukkan rencana bunuh diri yang terorganisasi atau niat yang serius',
                options: ['Tidak', 'Ya'],
              },
              {
                question: 'N-o Social support: Tidak ada teman/saudara/keluarga yang mendukung',
                options: ['Tidak', 'Ya'],
              },
              {
                question: 'S-tate future intent: Niat masa depan (bertekad untuk mengulang hidup atau ambivalen)',
                options: ['Tidak', 'Ya'],
              },
        ];
      
        const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(1));
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
          if (score >= 0 && score <= 6) return { level: 'Rendah', solution: '-' };
          else if (score >= 7 && score <= 12) return { level: 'Sedang', solution: 'penting untuk mencari dukungan segera. Hubungi teman atau anggota keluarga yang dapat memberikan pendengaran dan dukungan emosional. Selain itu, pertimbangkan untuk membuat janji dengan seorang konselor atau psikolog untuk membahas perasaan Anda lebih dalam.' };
          else return { level: 'Tinggi', solution: 'Jangan tinggal sendirian dan pastikan ada seseorang di sekitar Anda. Berbicaralah dengan teman atau keluarga tentang apa yang Anda alami dan minta bantuan profesional segera. ' };
        };
      
      
        const handleCheckScore = () => {
          setShowScore(true);
        };
      
        return (
          <div className="my-8 max-w-4xl px-3 py-2 mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">CEK TINGKAT PERCOBAAN BUNUH DIRI</h2>
      
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
        <div>
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

export default TestSuicide
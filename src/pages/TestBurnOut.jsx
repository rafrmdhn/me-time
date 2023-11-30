import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';

const TestBurnOut = () => {


    const BurnOutQuiz = () => {
        const quizQuestions = [
            {
                question: 'Saya merasakan emosi saya terkuras karena pekerjaan saya',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Bekerja dengan orang lain seharian membuat saya tertekan',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya merasa pekerjaan ini membuat saya jenuh dan lelah',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya merasa frustasi dengan pekerjaan saya',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya merasa bekerja terlalu keras di pekerjaan saya saat ini',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Terlalu banyak orang membuat saya merasa stres dan tertekan',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya merasa seakan hidup dan karir saya tidak akan berubah',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya merasa menyelesaikan pekerjaan saya, seolah-olah mereka hanya obyek',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya merasa lesu ketika bangun pagi karena harus menjalani hari untuk bekerja',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya merasa rekan kerja saya menyalahkan saya atas masalah yang terjadi',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya merasakan kelelahan fisik yang amat sangat di akhir hari saya bekerja',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya benar-benar tidak peduli terhadap apa yang terjadi pada rekan kerja saya',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya kawatir pekerjaan saya membuat saya dingin secara emosional',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya menjadi kaku terhadap orang lain sejak bekerja disini',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya telah mendapatkan banyak hal yang berharga saat bekerja saat ini',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya merasa gembira setelah melakukan tugas saya secara langsung',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya dengan mudah memahami perasaan rekan kerja saya',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya mampu menjawab dan bekerjasama dengan rekan kerja saya',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya menghadapi masalah emosional dalam pekerjaan saya dengan tenang dan kepala dingin',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
              },
              {
                question: 'Saya dapat memberikan pengaruh positif terhadap kehidupan orang lain melalui pekerjaan saya',
                options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
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
          if (score >= 0 && score <= 45) return { level: 'Rendah', solution: 'Jika Anda merasa mengalami burnout pada tingkat rendah, pertimbangkan untuk memberikan diri Anda waktu istirahat yang cukup. Tetapkan batas waktu kerja yang jelas dan pastikan Anda menyisihkan waktu untuk kegiatan yang menyenangkan di luar pekerjaan. ' };
          else if (score >= 46 && score <= 80) return { level: 'Sedang', solution: 'JUntuk tingkat burnout yang lebih sedang, pertimbangkan untuk mengambil cuti atau waktu istirahat. Berbicaralah dengan seorang profesional kesehatan mental atau konselor untuk membahas stres dan tekanan yang Anda alami.' };
          else return { level: 'Tinggi', solution: 'Jika Anda menghadapi tingkat burnout yang tinggi, langkah pertama adalah mencari bantuan profesional. Konsultasikan dengan seorang psikolog atau konselor yang dapat membantu Anda mengelola stres dan mendukung pemulihan. Pertimbangkan untuk berbicara dengan atasan Anda tentang kemungkinan perubahan dalam tanggung jawab atau penugasan.' };
        };
      
      
        const handleCheckScore = () => {
          setShowScore(true);
        };
      
        return (
          <div className="my-8 max-w-4xl px-3 py-2 mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">CEK LEVEL BURNOUT ANDA</h2>
      
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
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';

const TestPersonality = () => {
    const PersonalityQuiz = () => {
        const quizQuestions = [
            {
                question: 'Ramah, mau bergaul.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Berbelas kasih, suka menolong.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Cenderung tidak teroganisir, tidak sistematis dalam beraktivitas.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Tenang, mampu menangani stres dengan baik.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Hanya memiliki sedikit minat dan ketertarikan pada kesenian.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Berterus terang secara tegas.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Memperlakukan orang lain dengan hormat.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Cenderung malas atau lamban ketika mengerjakan tugas.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Tetap optimis ketika mengalami kegagalan atau kemunduran.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Ingin tahu mengenai banyak hal.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Jarang merasa penuh tenaga (energik) atau bersemangat.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Cenderung mencari kesalahan orang lain, atau cenderung mempersalahkan kesalahan orang lain.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Dapat diandalkan untuk bekerja, konsisten, tekun.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Memiliki suasana hati yang mudah berubah (naik-turun).',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Pandai berkreasi, mampu memikirkan banyak cara cerdas untuk melakukan sesuatu.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Cenderung diam ketika bersama dengan orang lain.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Memberikan sedikit kepedulian kepada orang lain.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Runtut dan teratur, suka menjaga kerapian.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Cenderung tegang (takut dan cemas).',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
              },
              {
                question: 'Mengagumi seni, musik atau sastra.',
                options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
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
          if (score >= 0 && score <= 35) return { level: 'Rendah', solution: 'Jika Anda merasa bahwa tingkat kepribadian Anda rendah, pertama-tama, ingatlah bahwa perubahan positif membutuhkan waktu dan kesabaran. Cobalah untuk lebih sadar terhadap kekuatan dan bakat Anda, dan fokus pada pengembangan aspek-aspek positif dalam diri Anda. ' };
          else if (score >= 36 && score <= 80) return { level: 'Sedang', solution: 'Jika Anda merasa memiliki tingkat kepribadian yang sedang, pertimbangkan untuk melakukan evaluasi diri secara mendalam. Identifikasi area yang ingin Anda tingkatkan dan kembangkan rencana tindakan yang realistis. ' };
          else return { level: 'Tinggi', solution: 'Jika tingkat kepribadian Anda dianggap tinggi, pertimbangkan untuk menjaga keseimbangan antara kepercayaan diri dan empati terhadap orang lain. Jika ada aspek kepribadian yang mungkin terlalu mendominasi, pertimbangkan untuk mengembangkan keterampilan interpersonal dan kerja sama tim. ' };
        };
      
      
        const handleCheckScore = () => {
          setShowScore(true);
        };
      
        return (
          <div className="my-8 max-w-4xl px-3 py-2 mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">CEK LEVEL PERSONALITY ANDA</h2>
      
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

export default TestPersonality
import React, { useState } from 'react';

import Navbar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';

const TestDepresi = () => {

    const DepressionQuiz = () => {
        const quizQuestions = [
          {
            question: 'Saya tidak merasa sedih.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
          },
          {
            question: 'Saya merasa sedih.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
          },
          {
            question: 'Sepanjang waktu saya sedih dan tidak bisa menghilangkan perasaan itu.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
          },
          {
            question: 'Saya sedemikian sedih atau tidak bahagia sehingga saya tidak tahan lagi rasanya.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
          },
          {
            question: 'Saya tidak terlalu berkecil hati mengenai masa depan.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
          },
          {
            question: 'Saya merasa kecil mengenai masa depan.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
          },
          {
            question: 'Saya merasa tidak ada suatu pun yang dapat saya harapkan.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
          },
          {
            question: 'Saya merasa bahwa masa depan saya tanpa harapan dan bahwa semuanya tidak akan dapat membaik.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
          },
          {
            question: 'Saya tidak menganggap diri saya sebagai orang yang gagal.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
          },
          {
            question: 'Saya merasa bahwa saya telah gagal lebih dari kebanyakan orang.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
          },
          {
            question: 'Saat saya menengok masa lalu maka yang terlihat oleh saya hanyalah kegagalan.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
          },
          {
            question: 'Saya merasa bahwa saya adalah seorang yang gagal total.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
          },
          {
            question: 'Saya memperoleh banyak kepuasan dari hal-hal yang saya lakukan sama seperti sebelumnya.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
          },
          {
            question: 'Saya tidak lagi menikmati berbagai hal seperti yang pernah saya rasakan dulu.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
          },
          {
            question: 'Saya tidak memperoleh kepuasan sejati dari apapun lagi.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
          },
        ];
      
        const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(1));
        const [showScore, setShowScore] = useState(false);
      
        const handleAnswerChange = (questionIndex, value) => {
          setShowScore(false); // Reset showScore state when the user changes the answer
      
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
          if (score >= 0 && score <= 20) return { level: 'Rendah', solution: '-' };
          else if (score >= 21 && score <= 45) return { level: 'Sedang', solution: 'Pada tingkat stres sedang, fokus pada teknik relaksasi dan manajemen waktu dapat memberikan bantuan yang signifikan. Latihan pernapasan dalam, peregangan, dan manajemen waktu yang bijak dapat membantu meredakan ketegangan. Prioritaskan tugas dan pastikan waktu istirahat yang cukup untuk memulihkan tubuh dan pikiran. Aktivitas rekreasi seperti olahraga ringan atau hobi juga dapat berperan dalam mengurangi tingkat stres.' };
          else if (score >= 46 && score <= 50) return { level: 'Tinggi', solution: 'Ketika stres mencapai tingkat yang lebih tinggi, komunikasi dan dukungan menjadi kunci. Berbicara dengan teman, keluarga, atau seorang profesional dapat memberikan perspektif baru dan dukungan emosional. Delegasi tugas dan aktivitas fisik seperti olahraga dapat membantu mengurangi tekanan. Teknik meditasi atau mindfulness juga dapat digunakan untuk menenangkan pikiran dan mengurangi tingkat kecemasan.' };
          else return { level: 'Sangat Tinggi', solution: 'Pada tingkat stres yang sangat tinggi, konsultasi dengan seorang profesional kesehatan mental adalah langkah krusial. Mengambil cuti sementara untuk fokus pada pemulihan, serta mempertimbangkan terapi psikologis atau konseling, dapat memberikan dukungan yang lebih intensif.' };
        };
      
      
        const handleCheckScore = () => {
          setShowScore(true);
        };
      
        return (
          <div className="my-8 max-w-4xl px-3 py-2 mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">CEK LEVEL DEPRESI</h2>
      
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
        <div className='bg-white'>
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

export default TestDepresi
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';

const TestStres = () => {

    const StressQuiz = () => {
        const quizQuestions = [
            {
                question: 'Dalam satu bulan terakhir, seberapa sering anda terganggu dengan sesuatu yang terjadi secara mendadak (terkaget-kaget)?',
                options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
              },
              {
                question: 'Dalam satu bulan terakhir, seberapa sering anda sulit dalam mengontrol pekerjaan anda yang penting?',
                options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
              },
              {
                question: 'Dalam satu bulan terakhir, seberapa sering anda merasa gugup dan stress?',
                options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
              },
              {
                question: 'Dalam satu bulan terakhir, seberapa sering anda merasa percaya diri akan kemampuan anda untuk menyelesaikan masalah anda?',
                options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
              },
              {
                question: 'Dalam satu bulan terakhir, seberapa sering anda merasa segala sesuatu berjalan sesuai rencana anda?',
                options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
              },
              {
                question: 'Dalam satu bulan terakhir, seberapa sering anda merasa bahwa anda tidak dapat mengatasi segala sesuatu yang anda telah lakukan?',
                options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
              },
              {
                question: 'Dalam satu bulan terakhir, seberapa sering anda merasa mampu mengontrol masalah dalam kehidupan anda?',
                options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
              },
              {
                question: 'Dalam satu bulan terakhir, seberapa sering anda merasa berada pada level tertinggi dari usaha yang anda lakukan?',
                options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
              },
              {
                question: 'Dalam satu bulan terakhir, seberapa sering anda merasa marah karena sesuatu yang terjadi di luar kontrol anda?',
                options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
              },
              {
                question: 'Dalam satu bulan terakhir, seberapa sering anda merasa kesulitan dalam mengatasi masalah anda?',
                options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
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
          if (score >= 0 && score <= 20) return { level: 'Rendah', solution: '-' };
          else if (score >= 21 && score <= 35) return { level: 'Sedang', solution: 'Pada tingkat stres sedang, fokus pada teknik relaksasi dan manajemen waktu dapat memberikan bantuan yang signifikan. Latihan pernapasan dalam, peregangan, dan manajemen waktu yang bijak dapat membantu meredakan ketegangan. Prioritaskan tugas dan pastikan waktu istirahat yang cukup untuk memulihkan tubuh dan pikiran. Aktivitas rekreasi seperti olahraga ringan atau hobi juga dapat berperan dalam mengurangi tingkat stres.' };
          else if (score >= 36 && score <= 45) return { level: 'Tinggi', solution: 'Ketika stres mencapai tingkat yang lebih tinggi, komunikasi dan dukungan menjadi kunci. Berbicara dengan teman, keluarga, atau seorang profesional dapat memberikan perspektif baru dan dukungan emosional. Delegasi tugas dan aktivitas fisik seperti olahraga dapat membantu mengurangi tekanan. Teknik meditasi atau mindfulness juga dapat digunakan untuk menenangkan pikiran dan mengurangi tingkat kecemasan.' };
          else return { level: 'Sangat Tinggi', solution: 'Pada tingkat stres yang sangat tinggi, konsultasi dengan seorang profesional kesehatan mental adalah langkah krusial. Mengambil cuti sementara untuk fokus pada pemulihan, serta mempertimbangkan terapi psikologis atau konseling, dapat memberikan dukungan yang lebih intensif.' };
        };
      
      
        const handleCheckScore = () => {
          setShowScore(true);
        };
      
        return (
          <div className="my-8 max-w-4xl px-3 py-2 mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">CEK LEVEL STRESS</h2>
      
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

export default TestStres
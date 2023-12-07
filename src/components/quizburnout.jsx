import React, { useState } from "react";
import Review from "./review";

const BurnOutQuiz = () => {
    const quizQuestions = [
        {
            question: 'Saya merasakan emosi saya terkuras karena pekerjaan saya',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Bekerja dengan orang lain seharian membuat saya tertekan',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya merasa pekerjaan ini membuat saya jenuh dan lelah',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya merasa frustasi dengan pekerjaan saya',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya merasa bekerja terlalu keras di pekerjaan saya saat ini',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Terlalu banyak orang membuat saya merasa stres dan tertekan',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya merasa seakan hidup dan karir saya tidak akan berubah',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya merasa menyelesaikan pekerjaan saya, seolah-olah mereka hanya obyek',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya merasa lesu ketika bangun pagi karena harus menjalani hari untuk bekerja',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya merasa rekan kerja saya menyalahkan saya atas masalah yang terjadi',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya merasakan kelelahan fisik yang amat sangat di akhir hari saya bekerja',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya benar-benar tidak peduli terhadap apa yang terjadi pada rekan kerja saya',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya kawatir pekerjaan saya membuat saya dingin secara emosional',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya menjadi kaku terhadap orang lain sejak bekerja disini',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya telah mendapatkan banyak hal yang berharga saat bekerja saat ini',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya merasa gembira setelah melakukan tugas saya secara langsung',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya dengan mudah memahami perasaan rekan kerja saya',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya mampu menjawab dan bekerjasama dengan rekan kerja saya',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya menghadapi masalah emosional dalam pekerjaan saya dengan tenang dan kepala dingin',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
        {
            question: 'Saya dapat memberikan pengaruh positif terhadap kehidupan orang lain melalui pekerjaan saya',
            options: ['Tidak Pernah', '1-3x/ tahun', '1x/ bulan', '2-4x/ bulan', '1x/ minggu', '2-4x/ minggu', 'Setiap hari'],
            required: true,
        },
    ];
  
    const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(0));
    const [showScore, setShowScore] = useState(false);
    const [showReview, setShowReview] = useState(false);
  
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
        if (score >= 0 && score <= 45) return { level: 'Anda merasa mengalami burnout pada tingkat rendah.', 
            solution: ["Berikan diri Anda waktu istirahat yang cukup.",
            "Tetapkan batas waktu kerja yang jelas dan pastikan Anda menyisihkan waktu untuk kegiatan yang menyenangkan di luar pekerjaan.",
            "Pertimbangkan untuk merinci prioritasmu dan fokus pada tugas yang paling penting."] };
        else if (score >= 46 && score <= 80) return { level: 'Anda mengalami tingkat burnout yang lebih sedang.', 
            solution: ["Pertimbangkan untuk mengambil cuti atau waktu istirahat untuk mengatasi kelelahan.",
            "Berbicaralah dengan seorang profesional kesehatan mental atau konselor untuk membahas stres dan tekanan yang Anda alami.",
            "Evaluasi dan atur ulang beban kerja Anda jika memungkinkan."] };
        else return { level: 'Anda menghadapi tingkat burnout yang tinggi.', 
            solution: ["Cari bantuan profesional segera dari seorang psikolog atau konselor.",
            "Diskusikan dengan atasan Anda tentang kemungkinan perubahan dalam tanggung jawab atau penugasan untuk mengurangi beban kerja.",
            "Pertimbangkan untuk mencari dukungan dari rekan kerja atau tim Anda.",
            "Prioritaskan kesehatan dan pemulihan Anda, dan pertimbangkan untuk mencari saran dari spesialis burnout."] };
    };
  
  
    const handleCheckScore = () => {
        const isAllQuestionsAnswered = quizQuestions.every((question, index) => {
            return !question.required || answers[index] !== 0;
        });
      
            if (!isAllQuestionsAnswered) {
                alert("Pilih opsi untuk pertanyaan yang diperlukan.");
                return;
        }

        setShowScore(true);
        setTimeout(() => {
            setShowReview(true);
        }, 10000);
    };

    const closeReview = () => {
        setShowReview(false);
    };
  
    return (
      <div className="my-8 max-w-4xl px-3 py-2 mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">CEK LEVEL BURNOUT ANDA</h2>
  
            {quizQuestions.map((question, index) => (
            <div key={index} className="mb-6 border-b pb-4 text-left">
            <p className="text-lg mb-2">{`${index + 1}. ${question.question}`}</p>
  
              <div className="flex flex-wrap items-center px-4">
                  {question.options.map((option, optionIndex) => (
                      <label key={optionIndex} className="mb-2 mr-2 flex items-center">
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
                <button onClick={handleCheckScore} className="bg-violet-600 text-white px-4 py-2 rounded-3xl w-full">
                    Check Score
                </button>
                {showScore && (
                    <>
                    <p className="text-xl mt-4 text-left">Skor: {calculateScore()}</p>
                    <br />
                    <p className="text-xl text-left">
                        Interpretasi Skor: {interpretScore(calculateScore()).level}
                    </p>
                    <br />
                    <p className="text-xl text-left">
                        Solusi: <br />
                        <ul>
                        {interpretScore(calculateScore()).solution.map((item, index) => (
                            <li key={index}>• {item}</li>
                        ))}
                        </ul>
                    </p>
                    {showReview && (
                        <Review onClose={closeReview} />
                    )}
                    </>
                )}
            </div>
      </div>
    );
};

export default BurnOutQuiz;
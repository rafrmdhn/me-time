import React, { useState } from "react";
import Review from "./review";

const StressQuiz = () => {
    const quizQuestions = [
        {
            question: 'Dalam satu bulan terakhir, seberapa sering anda terganggu dengan sesuatu yang terjadi secara mendadak (terkaget-kaget)?',
            options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
            required: true,
        },
        {
            question: 'Dalam satu bulan terakhir, seberapa sering anda sulit dalam mengontrol pekerjaan anda yang penting?',
            options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
            required: true,
        },
        {
            question: 'Dalam satu bulan terakhir, seberapa sering anda merasa gugup dan stress?',
            options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
            required: true,
        },
        {
            question: 'Dalam satu bulan terakhir, seberapa sering anda merasa percaya diri akan kemampuan anda untuk menyelesaikan masalah anda?',
            options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
            required: true,
        },
        {
            question: 'Dalam satu bulan terakhir, seberapa sering anda merasa segala sesuatu berjalan sesuai rencana anda?',
            options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
            required: true,
        },
        {
            question: 'Dalam satu bulan terakhir, seberapa sering anda merasa bahwa anda tidak dapat mengatasi segala sesuatu yang anda telah lakukan?',
            options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
            required: true,
        },
        {
            question: 'Dalam satu bulan terakhir, seberapa sering anda merasa mampu mengontrol masalah dalam kehidupan anda?',
            options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
            required: true,
        },
        {
            question: 'Dalam satu bulan terakhir, seberapa sering anda merasa berada pada level tertinggi dari usaha yang anda lakukan?',
            options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
            required: true,
        },
        {
            question: 'Dalam satu bulan terakhir, seberapa sering anda merasa marah karena sesuatu yang terjadi di luar kontrol anda?',
            options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
            required: true,
        },
        {
            question: 'Dalam satu bulan terakhir, seberapa sering anda merasa kesulitan dalam mengatasi masalah anda?',
            options: ['Tidak Pernah', 'Jarang', 'Kadang-kadang', 'Sering', 'Sangat Sering'],
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
        if (score >= 0 && score <= 20) return { level: 'Anda berada pada tingkat stres yang rendah.', 
            solution: ["Berikan diri Anda waktu istirahat yang cukup.",
                "Coba teknik relaksasi seperti meditasi ringan.",
                "Identifikasi dan hindari pemicu stres kecil sebisa mungkin.",
                "Fokus pada kegiatan yang memberikan kebahagiaan dan relaksasi."] };
        else if (score >= 21 && score <= 35) return { level: 'Tingkat stres Anda sedang.', 
            solution: ["Terapkan teknik pernapasan dalam untuk menenangkan pikiran.",
                "Atur jadwal harian dengan lebih efisien untuk mengelola waktu.",
                "Lakukan aktivitas fisik ringan seperti berjalan kaki atau peregangan.",
                "Pertimbangkan hobi atau kegiatan rekreasi yang menyenangkan."] };
        else if (score >= 36 && score <= 45) return { level: 'Anda mengalami tingkat stres yang tinggi.', 
            solution: ["Komunikasikan perasaan Anda dengan teman, keluarga, atau profesional.",
                "Delegasikan tugas yang dapat ditangani oleh orang lain.",
                "Prioritaskan tidur yang berkualitas untuk pemulihan optimal.",
                "Pertimbangkan teknik meditasi atau mindfulness untuk menenangkan pikiran."] };
        else return { level: 'Tingkat stres Anda sangat tinggi, memerlukan perhatian khusus.', 
            solution: ["Segera konsultasikan dengan seorang profesional kesehatan mental.",
                "Pertimbangkan cuti sementara untuk fokus pada pemulihan.",
                "Terapi psikologis atau konseling dapat memberikan dukungan intensif.",
                "Libatkan dukungan dari teman dan keluarga untuk membantu mengelola beban emosional."] };
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
            <h2 className="text-2xl font-semibold mb-4 text-center">CEK LEVEL STRESS</h2>
    
            {quizQuestions.map((question, index) => (
            <div key={index} className="mb-6 border-b pb-4 text-left">
                <p className="text-lg mb-2">{`${index + 1}. ${question.question}`}</p>
    
                <div className="flex flex-wrap items-center px-4">
                    {question.options.map((option, optionIndex) => (
                        <label key={optionIndex} className="mb-2 mr-3 flex items-center">
                            <input
                                type="radio"
                                name={`q${index + 1}`}
                                value={optionIndex + 1}
                                checked={answers[index] === optionIndex + 1}
                                onChange={() => handleAnswerChange(index, optionIndex + 1)}
                                required={question.required}
                                className="mr-2"
                                />
                            {option}
                        </label>
                    ))}
                </div>
            </div>
            ))}
  
            <div className="mt-6">
                <button
                onClick={handleCheckScore}
                className="bg-violet-600 text-white px-4 py-2 rounded-3xl"
                >
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

export default StressQuiz;
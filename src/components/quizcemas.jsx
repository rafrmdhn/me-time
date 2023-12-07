import React, { useState }  from "react";
import Review from "./review";

const CemasQuiz = () => {
    const quizQuestions = [
        {
            question: 'Kibas-kibas atau kesemutan.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Perasaan panas.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Lemas atau goyah pada kaki.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Tidak dapat rileks.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Takut sesuatu jelek akan terjadi.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Pusing atau kepala terasa dingin.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Jantung berdebar-debar.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Goyah dan tidak tahan berdiri.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Ketakutan.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Gugup.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Perasaan tercekik atau tersedak.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Tangan gemetaran.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Badan gemetar atau goyah.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Takut hilang kendali.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Kesulitan bernafas.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Takut sekarat.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Ciut hati/hilang nyali.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Pencernaan atau lambung perut terganggu.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'ingsan atau perasaan mau pingsan.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
            required: true,
        },
        {
            question: 'Wajah merona/kemerahan.',
            options: ['Tidak ada keluhan', 'Ringan, tidak menggangu', 'Sedang, kadang menggangu', 'Berat, sangat menggangu'],
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
        if (score >= 0 && score <= 44) return { level: 'Anda mengalami gangguan kecemasan pada tingkat rendah.', 
            solution: ["Pertimbangkan untuk mengintegrasikan kegiatan relaksasi ke dalam rutinitas harian Anda.",
            "Latihan pernapasan dalam, meditasi ringan, atau yoga dapat membantu menurunkan tingkat kecemasan.",
            "Fokus pada teknik pengelolaan stres seperti olahraga ringan atau aktivitas yang membawa kebahagiaan."] };
        else if (score >= 45 && score <= 70) return { level: 'Anda mengalami gangguan kecemasan pada tingkat sedang.', 
            solution: ["Pertimbangkan konseling atau terapi dengan seorang profesional kesehatan mental.",
            "Identifikasi penyebab kecemasan dan kembangkan strategi koping yang efektif.",
            "Pertimbangkan teknik kognitif perilaku untuk mengubah pola pikir yang tidak sehat.",
            "Mungkin perlu mengevaluasi gaya hidup, termasuk pola tidur dan aspek kesehatan lainnya."] };
        else return { level: 'Anda mengalami gangguan kecemasan pada tingkat tinggi.', 
            solution: ["Cari bantuan profesional segera dari seorang psikiater atau psikolog.",
            "Konsultasikan dengan profesional kesehatan mental untuk mendapatkan perawatan dan dukungan yang sesuai.",
            "Pertimbangkan untuk memulai terapi atau intervensi medis jika dianjurkan oleh profesional.",
            "Jangan ragu untuk berbicara dengan teman atau anggota keluarga untuk mendapatkan dukungan emosional tambahan."] };
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
            <h2 className="text-2xl font-semibold mb-4 text-center">CEK LEVEL GANGGUAN CEMAS ANDA</h2>
  
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

export default CemasQuiz;
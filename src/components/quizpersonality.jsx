import React, { useState } from "react";
import Review from "./review";

const PersonalityQuiz = () => {
    const quizQuestions = [
        {
            question: 'Ramah, mau bergaul.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Berbelas kasih, suka menolong.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Cenderung tidak teroganisir, tidak sistematis dalam beraktivitas.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Tenang, mampu menangani stres dengan baik.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Hanya memiliki sedikit minat dan ketertarikan pada kesenian.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Berterus terang secara tegas.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Memperlakukan orang lain dengan hormat.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Cenderung malas atau lamban ketika mengerjakan tugas.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Tetap optimis ketika mengalami kegagalan atau kemunduran.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Ingin tahu mengenai banyak hal.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Jarang merasa penuh tenaga (energik) atau bersemangat.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Cenderung mencari kesalahan orang lain, atau cenderung mempersalahkan kesalahan orang lain.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Dapat diandalkan untuk bekerja, konsisten, tekun.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Memiliki suasana hati yang mudah berubah (naik-turun).',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Pandai berkreasi, mampu memikirkan banyak cara cerdas untuk melakukan sesuatu.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Cenderung diam ketika bersama dengan orang lain.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Memberikan sedikit kepedulian kepada orang lain.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Runtut dan teratur, suka menjaga kerapian.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Cenderung tegang (takut dan cemas).',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
            required: true,
        },
        {
            question: 'Mengagumi seni, musik atau sastra.',
            options: ['Sangat Tidak Setuju', 'Tidak Setuju', 'Netral', 'Setuju', 'Sangat Setuju'],
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
        if (score >= 0 && score <= 35) return { level: 'Anda memiliki tingkat kepribadian yang rendah.', 
            solution: ["Pertama-tama, ingatlah bahwa perubahan positif membutuhkan waktu dan kesabaran.",
            "Cobalah untuk lebih sadar terhadap kekuatan dan bakat Anda.",
            "Fokus pada pengembangan aspek-aspek positif dalam diri Anda.",
            "Pertimbangkan untuk menetapkan tujuan kecil dan merayakan pencapaian kecil."] };
        else if (score >= 36 && score <= 80) return { level: 'Anda memiliki tingkat kepribadian yang sedang.', 
            solution: ["Lakukan evaluasi diri secara mendalam.",
            "Identifikasi area kehidupan Anda yang ingin Anda tingkatkan.",
            "Kembangkan rencana tindakan yang realistis untuk mencapai perubahan positif.",
            "Pertimbangkan untuk mencari dukungan dari teman, keluarga, atau seorang profesional."] };
        else return { level: 'Anda memiliki tingkat kepribadian yang tinggi.', 
            solution: ["Jaga keseimbangan antara kepercayaan diri dan empati terhadap orang lain.",
            "Jika ada aspek kepribadian yang mungkin terlalu mendominasi, pertimbangkan untuk mengembangkan keterampilan interpersonal.",
            "Fokus pada kerja sama tim dan membangun hubungan yang sehat.",
            "Teruslah berusaha untuk pertumbuhan pribadi dan pembelajaran sepanjang hidup."] };
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
            <h2 className="text-2xl font-semibold mb-4 text-center">CEK LEVEL PERSONALITY ANDA</h2>
  
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

export default PersonalityQuiz;
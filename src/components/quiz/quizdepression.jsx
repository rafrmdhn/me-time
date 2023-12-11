import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Review from "../testimoni/review";
import axios from "axios";

const DepressionQuiz = () => {
    const history = useHistory();

    useEffect(() => {
        const localStorageKey = localStorage.getItem('UserKey');

        console.log("localStorageKey:", localStorageKey);


        if (!localStorageKey) {
            history.push('/Home');
        }
    });

    const quizQuestions = [
        {
            question: 'Saya tidak merasa sedih.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
            required: true,
        },
        {
            question: 'Saya merasa sedih.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
            required: true,
        },
        {
            question: 'Sepanjang waktu saya sedih dan tidak bisa menghilangkan perasaan itu.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
            required: true,
        },
        {
            question: 'Saya sedemikian sedih atau tidak bahagia sehingga saya tidak tahan lagi rasanya.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
            required: true,
        },
        {
            question: 'Saya tidak terlalu berkecil hati mengenai masa depan.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
            required: true,
        },
        {
            question: 'Saya merasa kecil mengenai masa depan.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
            required: true,
        },
        {
            question: 'Saya merasa tidak ada suatu pun yang dapat saya harapkan.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
            required: true,
        },
        {
            question: 'Saya merasa bahwa masa depan saya tanpa harapan dan bahwa semuanya tidak akan dapat membaik.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
            required: true,
        },
        {
            question: 'Saya tidak menganggap diri saya sebagai orang yang gagal.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
            required: true,
        },
        {
            question: 'Saya merasa bahwa saya telah gagal lebih dari kebanyakan orang.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
            required: true,
        },
        {
            question: 'Saat saya menengok masa lalu maka yang terlihat oleh saya hanyalah kegagalan.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
            required: true,
        },
        {
            question: 'Saya merasa bahwa saya adalah seorang yang gagal total.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
            required: true,
        },
        {
            question: 'Saya memperoleh banyak kepuasan dari hal-hal yang saya lakukan sama seperti sebelumnya.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
            required: true,
        },
        {
            question: 'Saya tidak lagi menikmati berbagai hal seperti yang pernah saya rasakan dulu.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
            required: true,
        },
        {
            question: 'Saya tidak memperoleh kepuasan sejati dari apapun lagi.',
            options: ['Tidak Sama Sekali', 'Agak Sama', 'Cukup Sama', 'Sama Sekali'],
            required: true,
        },
    ];
  
    const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(0));
    const [showScore, setShowScore] = useState(false);
    const [showReview, setShowReview] = useState(false);
    const localStorageKey = localStorage.getItem('UserKey');

    const [interpretation, setInterpretation] = useState({
        level: "",
        solution: [],
    });

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
        if (score >= 0 && score <= 20) return { level: 'Anda berada pada tingkat depresi yang rendah.', 
            solution: ["Prioritaskan kegiatan yang membawa kebahagiaan dan memberikan energi positif.",
                "Pertahankan rutinitas harian untuk memberikan struktur pada hidup Anda.",
                "Libatkan diri dalam kegiatan sosial dan interaksi dengan orang-orang terdekat.",
                "Jika perlu, diskusikan perasaan Anda dengan teman dekat atau anggota keluarga."] };
        else if (score >= 21 && score <= 45) return { level: 'Anda mengalami tingkat depresi yang sedang', 
            solution: ["Konsultasikan dengan seorang profesional kesehatan mental atau terapis.",
                "Pertimbangkan terapi kognitif perilaku untuk mengatasi pola pikir negatif.",
                "Libatkan diri dalam kegiatan fisik seperti olahraga ringan untuk merangsang endorfin.",
                "Atur jadwal istirahat yang konsisten dan pastikan waktu tidur yang cukup."] };
        else if (score >= 46 && score <= 50) return { level: 'Tingkat depresi Anda tinggi dan memerlukan perhatian serius.', 
            solution: ["Segera konsultasikan dengan seorang profesional kesehatan mental atau psikiater.",
                "Evaluasi kemungkinan pengobatan farmakologis sesuai dengan rekomendasi profesional.",
                "Libatkan dukungan keluarga dan teman untuk mendukung proses penyembuhan.",
                "Pertimbangkan perubahan gaya hidup seperti diet sehat dan olahraga teratur."] };
        else return { level: 'Tingkat depresi Anda sangat tinggi dan memerlukan intervensi darurat.', 
            solution: ["Segera cari bantuan medis darurat atau hubungi layanan krisis mental.",
                "Jangan ragu untuk mengajukan dukungan dari orang-orang terdekat.",
                "Pertimbangkan untuk menghabiskan waktu di lingkungan yang aman dan mendukung.",
                "Fokus pada pemulihan dan adopsi strategi pengelolaan stres yang sesuai dengan panduan profesional."] };
    };
  
  
    const handleCheckScore = () => {
        const isAllQuestionsAnswered = quizQuestions.every((question, index) => {
            return !question.required || answers[index] !== 0;
        });
      
        if (!isAllQuestionsAnswered) {
            alert("Pilih opsi untuk pertanyaan yang diperlukan.");
            return;
        }

        const score = calculateScore();

        if (!score <= 0 ) {
            const response = axios.patch(`http://195.35.8.190:4000/api/users/test/${localStorageKey}`, {
                esdepresi: score
            })
      
            if (response) {
                console.log("response:", response);
            }
        }

        const newInterpretation = interpretScore(score);
        setInterpretation(newInterpretation);

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
            <h2 className="text-2xl font-semibold mb-4 text-center">CEK LEVEL DEPRESI</h2>

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
                    className="bg-violet-600 text-white px-4 py-2 rounded-3xl w-full"
                >
                    Check Score
                </button>
                {showScore && (
                    <>
                        <p className="text-xl mt-4 text-left">Skor: {calculateScore()}</p>
                        <br />
                        <p className="text-xl text-left">
                            Interpretasi Skor: {interpretation.level}
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
                        {showReview && <Review onClose={closeReview} />}
                    </>
                )}
            </div>
        </div>
    );
};

export default DepressionQuiz;
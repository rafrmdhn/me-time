import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Review from "../testimoni/review";
import axios from "axios";

const SuicideQuiz = () => {
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
            question: 'S-ex: Jenis kelamin - Laki-laki',
            options: ['Tidak', 'Ya'],
            required: true,
        },
        {
            question: 'A-ge: < 19 tahun atau > 45 tahun',
            options: ['Tidak', 'Ya'],
            required: true,
        },
        {
            question: 'D-epression: Pasien MRS dengan depresi atau penurunan konsentrasi, gangguan tidur, gangguan pola makan, dan/atau gangguan libido',
            options: ['Tidak', 'Ya'],
            required: true,
        },
        {
            question: 'P-revious suicide: Ada riwayat percobaan bunuh diri atau perawatan psikiatri',
            options: ['Tidak', 'Ya'],
            required: true,
        },
        {
            question: 'E-xcessive alcohol or substance: Ketergantungan alkohol atau pemakai narkoba',
            options: ['Tidak', 'Ya'],
            required: true,
        },
        {
            question: 'R-ational thinking loss: Kehilangan pikiran rasional: psikosis, organic brain syndrome',
            options: ['Tidak', 'Ya'],
            required: true,
        },
        {
            question: 'S-eparated: Bercerai atau janda',
            options: ['Tidak', 'Ya'],
            required: true,
        },
        {
            question: 'O-rganized plan: Menunjukkan rencana bunuh diri yang terorganisasi atau niat yang serius',
            options: ['Tidak', 'Ya'],
            required: true,
        },
        {
            question: 'N-o Social support: Tidak ada teman/saudara/keluarga yang mendukung',
            options: ['Tidak', 'Ya'],
            required: true,
        },
        {
            question: 'S-tate future intent: Niat masa depan (bertekad untuk mengulang hidup atau ambivalen)',
            options: ['Tidak', 'Ya'],
            required: true,
        },
    ];
  
    const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(0));
    const [showScore, setShowScore] = useState(false);
    const [showReview, setShowReview] = useState(false);
    const [showEmergencyResources, setShowEmergencyResources] = useState(false);
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
        if (score >= 0 && score <= 6) return { level: 'Anda berada pada tingkat risiko bunuh diri yang rendah.', 
            solution: ["Dukungan sosial sangat penting. Coba bicarakan perasaan Anda dengan teman atau anggota keluarga.",
                "Pertahankan rutinitas harian dan aktivitas yang memberikan kebahagiaan.",
                "Jangan ragu untuk mencari dukungan profesional jika diperlukan."] };
        else if (score >= 7 && score <= 12) return { level: 'Anda mengalami tingkat risiko bunuh diri yang sedang.', 
            solution: ["Hubungi teman atau anggota keluarga yang dapat memberikan pendengaran dan dukungan emosional.",
                "Pertimbangkan untuk membuat janji dengan seorang konselor atau psikolog segera.",
                "Jangan tinggal sendirian; pastikan ada seseorang di sekitar Anda."] };
        else return { level: 'Anda berada pada tingkat risiko bunuh diri yang tinggi.', 
            solution: ["Jangan tinggal sendirian dan pastikan ada seseorang di sekitar Anda.",
                "Berbicaralah dengan teman atau keluarga tentang apa yang Anda alami.",
                "Cari bantuan profesional segera dari layanan darurat atau kesehatan mental lokal."] };
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
                tesbunuhdiri: score
            })
      
            if (response) {
                console.log("response:", response);
            }
        }

        const newInterpretation = interpretScore(score);
        setInterpretation(newInterpretation);

        setShowScore(true);
        setShowEmergencyResources(score > 12);
        setTimeout(() => {
            setShowReview(true);
        }, 10000);
    };

    const closeReview = () => {
        setShowReview(false);
    };
  
    return (
        <div className="my-8 max-w-4xl px-3 py-2 mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">CEK LEVEL BUNUH DIRI</h2>
    
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
                    {showEmergencyResources && (
                        <div className="mt-4 item-left">
                            <p className="text-xl mt-4 text-left">Sumber Daya Darurat:</p>
                            <ul className="text-xl text-left">
                                <li>• Layanan darurat setempat (telepon darurat atau rumah sakit terdekat).</li>
                                <li>• Hotline (<a href="tel:+628113855472" className="text-blue-600">Hubungi</a> nomor darurat bunuh diri.)</li>
                                <li>• Hubungi segera seorang profesional kesehatan mental atau psikiater.</li>
                            </ul>
                        </div>
                    )}
                    {showReview && (
                        <Review onClose={closeReview} />
                    )}
                    </>
                )}
            </div>
        </div>
    );
};

export default SuicideQuiz;
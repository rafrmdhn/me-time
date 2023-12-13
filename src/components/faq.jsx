import React, { useState } from "react";
import { Link } from 'react-router-dom';

const FaQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "Apa itu MeTime?",
      answer: "MeTime adalah platform kesehatan mental yang menyediakan layanan terintegrasi, termasuk konseling kesehatan mental, cek kesehatan mental, meditasi, dan Forum Diskusi. Kami bertujuan memberikan solusi holistik untuk membantu individu mengelola kesehatan mental mereka.",
    },
    {
      question: "Bagaimana Cek Kesehatan Mental di MeTime Dilakukan?",
      answer: "Cek Kesehatan Mental MeTime adalah alat penilaian mandiri yang membantu Anda memahami kondisi emosional dan psikologis Anda. Hasilnya dapat memberikan rekomendasi terkait langkah-langkah dan sumber daya yang sesuai untuk perawatan lebih lanjut.",
    },
    {
      question: "Bagaimana Meditasi di MeTime Dapat Membantu?",
      answer: "Fitur meditasi MeTime menyediakan panduan meditasi yang dapat disesuaikan dengan preferensi Anda. Meditasi dapat membantu meredakan stres, meningkatkan ketenangan, dan membantu Anda mencapai keseimbangan pikiran dan tubuh.",
    },
    {
      question: "Apa yang Saya Dapatkan dari Bergabung dengan Forum Diskusi MeTime?",
      answer: "Forum Diskusi MeTime memberikan ruang aman untuk berbagi pengalaman, mendapatkan dukungan komunitas, dan berpartisipasi dalam diskusi kesehatan mental yang membantu mengatasi stigma. Anda dapat berinteraksi dengan individu yang memiliki perjuangan serupa dan membangun komunitas yang mendukung.",
    },
  ];

  return (
    <section className="py-10 bg-[#F6F4EB] sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-sm leading-tight text-black sm:text-sm lg:text-sm">FaQ</h2>
          <p className="max-w-xl mx-auto mt-4 text-4xl font-semibold leading-relaxed text-black">
            Konsultasi Kesehatan Mental Dengan Pertanyaan Umum
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-200 border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50 ${
                activeIndex === index ? "bg-gray-50" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="px-4 flex text-lg font-semibold text-left text-black">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-gray-400 ${activeIndex === index ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`px-4 pb-5 sm:px-6 sm:pb-6 text-left ${activeIndex === index ? "" : "hidden"}`}>
                <p >{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 textbase mt-9">
            Tidak menemukan jawaban yang Anda cari?{" "}
          <Link to="/ContactUs" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
            Hubungi Kami
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FaQ;
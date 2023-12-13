import React from "react";
import Rafi from '../assets/member/rafi.jpg';

const Welcome = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-7">
                <div className="lg:max-w-lg lg:w-full md:w-96 w-96">
                    <img className="object-cover object-center rounded" alt="hero" src={Rafi}/>
                </div>
                <div
                    className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p className="mb-4 text-black font-sm">Sambutan</p>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-black">Mulailah Perjalanan Kesehatan
                        <br className="hidden lg:inline-block"/>Mental Anda Di Sini Sambutan 
                        <br className="hidden lg:inline-block"/>Hangat di Konsultasi Kami
                    </h1>
                    <p className="mb-8 leading-relaxed">Kini Anda tidak sendiri. Di MeTime, kami menyediakan ruang aman dan 
                        dukungan untuk membantu Anda menjalani perjalanan kesehatan mental yang bermakna. Kami memahami bahwa 
                        setiap individu memiliki cerita dan tantangan uniknya sendiri.
                        <br /> <br />
                        MeTime, membawa visi dan komitmen untuk menciptakan lingkungan yang mendukung pertumbuhan dan pemulihan. 
                        Kami percaya bahwa setiap langkah kecil menuju kesehatan mental yang lebih baik sangat berarti. 
                        Anda bukan hanya sekedar klien, tetapi bagian dari komunitas yang peduli pada kesehatan mental. 
                    </p>
                    <p classNameName="text-black font-bold">Rafi Ramadhan - Pendiri MeTime</p>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
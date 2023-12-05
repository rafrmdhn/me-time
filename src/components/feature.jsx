import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Feature = () => {
    return (
        <section className="py-10 dark:bg-[#F6F4EB]">
            <h2 className="text-center mb-2 text-md">Layanan</h2>
            <h1 className="text-center justify-center font-semibold text-4xl px-8 mt-6">Meningkatkan Kualitas Hidup dengan Layanan <br />Konsultasi Kesehatan Mental kami </h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-10">
                <div className="flex flex-col p-3 mx-auto">
                    <img src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/05/04044909/Bukan-Hanya-Stres-Ini-X-Dampak-Lembur-bagi-Kesehatan-Mental.jpg.webp" 
                    alt="Mental Konseling" className="mb-3 mx-auto object-none h-96 w-96 sm:h-56 sm:w-56 xl:h-96 xl:w-96 rounded-3xl"/>
                    <h1 className="text-center font-semibold text-2xl mb-3">Mental Konseling</h1>
                    <p class="mb-3 text-md mx-20 md:mx-5">
                    Dapatkan dukungan langsung dari konsultan kesehatan jiwa berlisensi
                    melalui sesi konseling online</p>
                    <Link to="/MentalKonseling"
                        className="mx-20 text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-7 py-2 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                        See Detail
                    </Link>
                </div>
                <div className="flex flex-col p-3 mx-auto">
                    <img src="https://o-cdn-cas.sirclocdn.com/parenting/images/tes-kesehatan-mental.width-800.format-webp.webp" 
                    alt="Tes Kesehatan Mental" className="mb-3 mx-auto object-none h-96 w-96 sm:h-56 sm:w-56 xl:h-96 xl:w-96 rounded-3xl"/>
                    <h1 className="text-center font-semibold text-2xl mb-3">Tes Kesehatan Mental</h1>
                    <p class="mb-3 text-md mx-20 md:mx-5">
                    Lakukan penilaian kesehatan mental untuk memahami keadaan emosional dan psikologis Anda.</p>
                    <Link to="/CekKesehatan"
                        className="mx-20 text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-7 py-2 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                        See Detail
                    </Link>
                </div>
                <div className="flex flex-col p-3 mx-auto">
                    <img src="https://img.antaranews.com/cache/1200x800/2023/06/20/pexels-andrea-piacquadio-3760611.jpg.webp" 
                    alt="Meditasi" className="mb-3 mx-auto object-cover h-96 w-96 sm:h-56 sm:w-56 xl:h-96 xl:w-96 rounded-3xl"/>
                    <h1 className="text-center font-semibold text-2xl mb-3">Meditasi</h1>
                    <p class="mb-3 text-md mx-20 md:mx-5">
                    Temukan ketenangan dan keseimbangan melalui beragam meditasi panduan.</p>
                    <Link to="/Meditasi"
                        className="mx-20 text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-7 py-2 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                        See Detail
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Feature;
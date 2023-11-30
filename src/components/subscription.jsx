import React from "react";
import '../App.css';

const Subscription = () => {
    return (
        <section className="mb-20">
            <div className="bg-gradient-to-r from-[#91C8E4] to-[#4682A9] flex flex-col gap-3 sm:flex-row items-center justify-around py-5 w-full">
                <div className="max-w-2xl flex justify-center flex-col gap-3 w-full mt-8 mb-10">
                    <h2 className="text-2xl lg:text-4xl font-semibold text-white text-center">
                        Bergabunglah dengan Kami
                    </h2>
                    <p className="text-center text-xs text-white mb-3 mx-auto">
                        Jangan lewatkan informasi terbaru dan penawaran menarik! Bergabunglah dengan newsletter kami untuk
                        mendapatkan update eksklusif, tips berguna, dan promo spesial langsung di kotak masuk email Anda.
                        Daftarkan diri Anda sekarang dan ikuti perkembangan terkini bersama kami
                    </p>
                    <div className="flex items-center justify-center w-full mx-auto">
                        <input
                        type="text"
                        placeholder="Your email"
                        className="text-white w-full rounded-l-full max-w-xl py-2 px-5 shadow-md border-transparent bg-transparent placeholder-white"
                        />
                        <button className="bg-gradient-to-r from-[#91C8E4] to-[#4682A9] text-white py-2 px-10 rounded-r-full shadow-md ">Berlangganan</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscription;

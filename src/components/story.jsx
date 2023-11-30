import React from "react";
import StoryAssets from '../assets/img/storyassets.png';

const Story = () => {
    return (
        <section className="flex pt-12 px-6 md:px-20 mb-8 items-center justify-center bg-hero md:h-screen overflow-hidden">
            <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
                <div className="w-full md:w-1/2 lg:pr-32">
                    <p className="text-md text-left font-sm mb-4">Kisah Sukses</p>
                    <h2 className="text-4xl lg:text-5xl text-center md:text-left text-lack leading-tight font-semibold">Mematahkan Stigma Kisah Sukses Konsultan Kesehatan Mental</h2>
                    <p className="mt-6 md:mt-10 text-md lg:text-sm text-center md:text-left text-black font-sm tracking-wider leading-relaxed">
                        Seorang pengguna MeTime, Sarah, berbagi kisah bagaimana konseling kesehatan mental membantunya keluar dari keterpurukan. Dengan dukungan penuh dari konsultan kami, Sarah menemukan keseimbangan hidup dan kembali menikmati momen-momen kebahagiaan.
                        <br />
                        <br />
                        David, seorang pekerja sibuk, menemukan bantuan melalui sesi meditasi MeTime. Dengan rutin menjalani meditasi yang disesuaikan, David berhasil mengatasi kecemasan harian dan meningkatkan kualitas hidupnya.
                        <br />
                        <br />
                        Jessica, setelah bergabung dengan Forum Diskusi MeTime, menemukan komunitas yang mendukung dan memahami perjuangannya. Bersama komunitas, Jessica merasa lebih kuat dan mampu mengatasi stigmatisasi seputar kesehatan mental.
                        <br />
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img src={StoryAssets} />
                </div>
            </div>
        </section>
    );
};

export default Story;
import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';

const Service = () => {
    const cardData = [
        {
            title: "Depresi",
            link: "/TestDepresi",
            imageSrc: "https://d3uhejzrzvtlac.cloudfront.net/compro/articleContent/703d5bda-019c-4500-a2f4-d6d6e46aff92.jpg",
        },
        {
            title: "Stress",
            link: "/TestStress",
            imageSrc: "https://siplawfirm.id/wp-content/uploads/2022/12/stress.webp",
        },
        {
            title: "Suicide",
            link: "/TestSuicide",
            imageSrc: "https://articles-1mg.gumlet.io/articles/wp-content/uploads/2019/10/prevent-suicide.png?compress=true&quality=80&w=640&dpr=2.6",
        },
        {
            title: "Cemas",
            link: "/TestCemas",
            imageSrc: "https://cdn.hellosehat.com/wp-content/uploads/2017/11/4-Penyakit-yang-Ditandai-Cemas-Berlebihan-Selain-Gangguan-Kecemasan.jpg?w=1200&q=75",
        },
        {
            title: "Personality",
            link: "/TestPersonality",
            imageSrc: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_39/2582131/180928-differing-personality-mc-1541.JPG",
        },
        {
            title: "Burnout",
            link: "/TestBurnOut",
            imageSrc: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1607354601/attached_image/ciri-ciri-burnout-dan-cara-mengatasinya.jpg",
        },
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl sm:text-center justify-content mt-6 gap-7">
            <div className="mb-20">
                <img className="rounded-3xl" src="https://o-cdn-cas.sirclocdn.com/parenting/images/tes-kesehatan-mental.width-800.format-webp.webp" width="1800"/>
            </div>
            <div className="justify-between items-center md:flex mb-20 text-left">
                <h6 className="text-5xl mx-10 sm:mx-20 md:mx-20 font-bold">Tes Kesehatan Mental</h6>
                <p className="text-black text-lg font-normal mx-10 sm:mx-20 md:mx-5 md:my-0">
                    Tes kesehatan mental adalah proses evaluasi yang dilakukan untuk menilai kondisi kesehatan mental seseorang. Tujuan dari tes ini adalah untuk mengidentifikasi gangguan mental, mengevaluasi tingkat stres, dan membantu individu dalam memahami dan mengelola kesehatan mental mereka. Tes kesehatan mental dapat dilakukan oleh profesional kesehatan mental, seperti psikolog, psikiater, atau konselor.
                </p>
            </div>
            <h2 className="md:text-4xl text-4xl font-semibold mb-8 ">Metode Tes Kesehatan Mental</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:gridcols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {cardData.map((card, index) => (
                    <Link key={index} to={card.link} className="relative flex flex-col text-gray-700 bg-stone-100 shadow-md rounded-xl bg-clip-border mt-10">
                        <div className="p-6 text-center">
                            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {card.title}
                            </h4>
                        </div>
                        <div className="relative mx-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border mb-4">
                            <img src={card.imageSrc} alt={`${card.title} profile`} className="w-full h-80 object-cover" />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Service;
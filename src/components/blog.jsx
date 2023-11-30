import React from "react";
import BlogAssets1 from '../assets/img/blogassets1.jpg';
import BlogAssets2 from '../assets/img/blogassets2.jpg';
import BlogAssets3 from '../assets/img/blogassets3.webp';

const Blog = () => {
    return (
        <section className="text-gray-600 body-font">
            <p className="mb-2 text-sm text-black dark:text-black">
                Blog
            </p>
            <h3 className="text-4xl font-semibold text-black dark:text-black">
                Our Blog For You
            </h3>
            <div className="container px-5 py-20 mx-auto">
                <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                    <div className="h-full rounded-lg overflow-hidden">
                    <img className="lg:h-64 md:h-56 w-full object-cover object-center rounded-3xl" src={BlogAssets2} alt="blog"/>
                    <div className="p-2 mt-4">
                        <h1 className="text-left text-2xl font-medium text-black mb-3">Kenali Jenis-jenis Gangguan Mental dan...</h1>
                        <p className="text-left leading-relaxed mb-3">Gangguan mental merupakan kondisi yang bisa saja dialami siapapun..</p>
                        <div className="flex items-center flex-wrap ">
                        <a href="https://www.detik.com/jatim/berita/d-6900036/kenali-jenis-jenis-gangguan-mental-dan-cara-mengatasinya" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full rounded-lg overflow-hidden">
                    <img className="lg:h-64 md:h-56 w-full object-cover object-center rounded-3xl" src={BlogAssets3} alt="blog"/>
                    <div className="p-2 mt-4">
                        <h1 className="text-left text-2xl font-medium text-black mb-3">Mental Illness (Gangguan Mental)</h1>
                        <p className="text-left leading-relaxed mb-3">Mental illness atau gangguan mental merupakan salah satu masalah kesehatan...</p>
                        <div className="flex items-center flex-wrap ">
                        <a href="https://hellosehat.com/mental/penyakit-mental/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full rounded-lg overflow-hidden">
                    <img className="lg:h-64 md:h-56 w-full object-cover object-center rounded-3xl" src={BlogAssets1} alt="blog"/>
                    <div className="p-2 mt-4">
                        <h1 className="text-left text-2xl font-medium text-black mb-3">GEJALA DAN PENYEBAB GANGGUAN MENTAL</h1>
                        <p className="text-left leading-relaxed mb-3">Gangguan mental atau gangguan jiwa adalah penyakit yang memengaruhi..</p>
                        <div className="flex items-center flex-wrap ">
                        <a href="https://rsud.nunukankab.go.id/detailpost/gejala-dan-penyebab-gangguan-mental" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    );
};

export default Blog;
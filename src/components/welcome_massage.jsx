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
                    <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur. 
                        Convallis est urna adipiscing fringilla nulla diam lorem non mauris. 
                        Ultrices aliquet at quam adipiscing feugiat interdum mattis. 
                        Placerat donec risus diam sed et. A in ullamcorper ipsum justo vestibulum 
                        sit cursus.
                        <br /> <br />
                        Phasellus ac augue ultricies sem aliquam faucibus sem non volutpat. 
                        Cursus mattis interdum sem pretium morbi ornare nunc nunc. Pharetra neque 
                        ut ipsum nunc pretium nisi vivamus dolor. Suspendisse lectus est sed vulputate
                        ut habitant sagittis semper lacinia.
                    </p>
                    <p classNameName="text-black font-bold">Rafi Ramadhan - Founder of MeTime</p>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
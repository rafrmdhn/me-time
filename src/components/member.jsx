import React from "react";
import "../App.css";
import Rafi from "../assets/member/rafi.jpg";
import Yudha from "../assets/member/yudha.jpg";
import Zidan from "../assets/member/zidan.png";
import Dzaki from "../assets/member/dzaki.png";
import Izhar from "../assets//member/izhar.jpg";

const Member = () => {
  return (
    <section className="py-20 bg-[#F6F4EB]">
      <div className="container mx-auto px-6 md:px-12 xl:px-32 flex flex-col">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-center text-2xl text-gray-900 font-semibold md:text-4xl">
            Kenali Tim Pakar Kami
          </h2>
          <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
            Temukan keahlian di balik layanan kami. Tim pakar kami siap
            memberikan solusi terbaik untuk kebutuhan Anda. Dapatkan pengalaman
            pelayanan yang unggul dengan para profesional berpengalaman di
            bidangnya.
          </p>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={Yudha}
              alt="Yudha"
              loading="lazy"
              width="640"
              height="805"
            />
            <div>
              <h4 className="text-2xl">Yudha Ginong Pratidina</h4>
              <span className="block text-sm text-gray-500">
                Front End-Back End Developer
              </span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
              src={Rafi}
              alt="Rafi Ramadhan"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl">Rafi Ramadhan</h4>
              <span className="block text-sm text-gray-500">
                Full-Stack Developer
              </span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={Zidan}
              alt="Zidan"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl">Muhammad Zidan Pasya</h4>
              <span className="block text-sm text-gray-500">
                Full-Stack Developer
              </span>
            </div>
          </div>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={Dzaki}
              alt="dzaki"
              loading="lazy"
              width="640"
              height="805"
            />
            <div>
              <h4 className="text-2xl">Muhammad Dzaki Firdaus</h4>
              <span className="block text-sm text-gray-500">
                Front End-Back End Developer
              </span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <div>
              <span className="block text-sm text-gray-500"></span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src={Izhar}
              alt="Izhar"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl">Izhar Kadir Saputra</h4>
              <span className="block text-sm text-gray-500">
                Front End-Back End Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;

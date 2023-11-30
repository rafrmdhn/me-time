import React from "react";
import { Link } from 'react-router-dom';
import Rafi from '../assets/member/rafi2.jpg';

const Team = () => {
    return (
        <section className="py-10 dark:bg-[#F6F4EB] sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-semibold leading-tight text-black sm:text-4xl lg:text-4xl lg:leading-tight">Kenali Tim Pakar Kami</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-sm text-gray-600">
                        Temukan keahlian di balik layanan kami. Tim pakar kami siap memberikan solusi terbaik untuk kebutuhan Anda. Dapatkan pengalaman pelayanan yang unggul dengan para profesional berpengalaman di bidangnya.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
                    <div>
                        <img className="w-full rounded-3xl w-80 h-128 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-1.jpg" alt="" />
                    </div>

                    <div>
                        <img className="w-full rounded-3xl w-80 h-128 mx-auto" src={Rafi} alt="" />
                    </div>

                    <div>
                        <img className="w-full rounded-3xl w-80 h-128 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-3.jpg" alt="" />
                    </div>
                </div>

                <div className="mt-8 text-center md:mt-16">
                    <Link to="/TimKami" title="" className="inline-flex items-center justify-center py-2 font-semibold text-white transition-all duration-200 bg-violet-600 border border-transparent rounded-3xl px-14 hover:bg-violet-700 focus:bg-violet-700" role="button">See Detail</Link>
                </div>
            </div>
        </section>
    );
};

export default Team;
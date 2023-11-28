import React from 'react'

import Navbar from '../components/navbar';
import Header from '../components/header';
import Contact from '../components/contact';
import Footer from '../components/footer';

const ContactUs = () => {
    return (
        <div className=''>
            <Navbar />
            <Header
                title='Contact Us'
                description='
                    Apakah Anda memiliki pertanyaan, umpan balik, atau ingin berbagi pengalaman? 
                    Kami siap membantu! Silakan hubungi tim kami melalui formulir kontak di bawah ini 
                    atau melalui informasi kontak yang tercantum. Kami berkomitmen untuk merespons dengan 
                    cepat dan memberikan dukungan yang Anda butuhkan. Terima kasih atas kepercayaan Anda 
                    kepada kami. Kami berharap dapat mendengar dari Anda segera.'
            />
            {/* <div className='container flex justify-around py-10 mx-auto'>
                <div className='w-full text-left hidden md:block'>
                    <h1 className='text-4xl font-medium mb-3'> Contact Us Today for <br /> Personalized Support <br />and Assistance</h1>
                    <p className='text-sm mb-3'> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed! <br /> Lorem ipsum dolor sit amet.
                    </p>

                    <div className='flex items-center gap-3 mb-3 font-medium'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <h2 className='text-sm'>+62 000-0000-0000</h2>
                    </div>

                    <div className='flex items-center gap-3 mb-3 font-medium'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <h2 className='text-sm'>metime@gmail.com</h2>
                    </div>

                    <div className='flex items-center gap-3 mb-3 font-medium'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>

                        <h2 className='text-sm'>Indonesia</h2>
                    </div>

                </div>
                <div className='w-full flex flex-col px-3'>
                    <form action="">

                        <div className='flex flex-col gap-2 md:flex-row mb-4'>
                            <div className='w-full text-left'>
                                <label htmlFor="FirstName" className='text-sm'>Nama Depan</label><br />
                                <input
                                    type="text"
                                    name='FirstName'
                                    placeholder='your first name'
                                    className='w-full py-2 px-3 rounded-xl border border-slate-400 outline-none hover:border-slate-600'
                                />
                            </div>
                            <div className='w-full text-left'>
                                <label htmlFor="FirstName" className='text-sm'>Nama Belakang</label><br />
                                <input
                                    type="text"
                                    name='LastName'
                                    placeholder='your last name'
                                    className='py-2 px-3 w-full rounded-xl border border-slate-400 outline-none hover:border-slate-600'
                                />
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 md:flex-row mb-4'>
                            <div className='w-full text-left'>
                                <label htmlFor="Email" className='text-sm'>Email</label><br />
                                <input
                                    type="email"
                                    name='Email'
                                    placeholder='person@gmail.com'
                                    className='w-full py-2 px-3 rounded-xl border border-slate-400 outline-none hover:border-slate-600'
                                />
                            </div>
                            <div className='w-full text-left'>
                                <label htmlFor="Handphone" className='text-sm'>No Handphone</label><br />
                                <input
                                    type="number"
                                    name='Handphone'
                                    placeholder='+62 0000-0000-0000'
                                    className='py-2 px-3 w-full rounded-xl border border-slate-400 outline-none hover:border-slate-600'
                                />
                            </div>
                        </div>

                        <div className='flex flex-col mb-4 text-left'>
                            <label htmlFor="Message">Pesan</label>
                            <textarea
                                name="Message"
                                id="Message"
                                cols="30"
                                rows="10"
                                placeholder='Masukkan pesan anda'
                                className='py-2 px-3 w-full rounded-xl border border-slate-400 outline-none hover:border-slate-600'
                            >

                            </textarea>
                        </div>

                        <button type="submit" className='py-2 px-8 rounded-full w-full  bg-violet-600 text-white'>Kirim Pesan</button>
                    </form>
                </div>
            </div> */}
            <Contact />
            <Footer />
        </div>
    );
};

export default ContactUs;
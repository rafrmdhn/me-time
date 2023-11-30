import React from "react";

const Contact = () => {
    return (
        <section className="py-20 bg-[#F6F4EB]" id="contact">
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
                <div>
                    <h2 className="text-4xl font-bold text-left mr-20">Contact Us Today for Personalized Support and Assistance</h2>
                    <p className="max-w-sm mt-4 mb-4 text-left text-black">Have something to say? We are here to help. Fill up the
                        form or send email or call phone.</p>
                    <div className="flex items-center mt-8 space-x-2 text-dark-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg><span>14th avenue glory road</span>
                    </div>
                    <div className="flex items-center mt-4 space-x-2 text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <a href="mailto:hello@company.com">hello@company.com</a>
                    </div>
                    <div className="flex items-center mt-4 space-x-2 text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <a href="tel:11111111111">+51 11111111111</a>
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
                                    className='w-full py-2 px-3 rounded-3xl border border-slate-400 bg-[#F6F4EB] outline-none hover:border-slate-600'
                                />
                            </div>
                            <div className='w-full text-left'>
                                <label htmlFor="FirstName" className='text-sm'>Nama Belakang</label><br />
                                <input
                                    type="text"
                                    name='LastName'
                                    placeholder='your last name'
                                    className='py-2 px-3 w-full rounded-3xl border border-slate-400 bg-[#F6F4EB] outline-none hover:border-slate-600'
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
                                    className='w-full py-2 px-3 rounded-3xl border border-slate-400 bg-[#F6F4EB] outline-none hover:border-slate-600'
                                />
                            </div>
                            <div className='w-full text-left'>
                                <label htmlFor="Handphone" className='text-sm'>No Handphone</label><br />
                                <input
                                    type="number"
                                    name='Handphone'
                                    placeholder='+62 0000-0000-0000'
                                    className='py-2 px-3 w-full rounded-3xl border border-slate-400 bg-[#F6F4EB] outline-none hover:border-slate-600'
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
                                className='py-2 px-3 w-full rounded-3xl border border-slate-400 bg-[#F6F4EB] outline-none hover:border-slate-600'
                            >

                            </textarea>
                        </div>

                        <button type="submit" className='py-2 px-8 rounded-full item-left bg-violet-600 text-white'>Kirim Pesan</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
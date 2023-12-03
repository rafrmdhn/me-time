import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <section className="bg-[#F6F4EB]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to="/Home" className="flex items-center mb-6 text-2xl font-semibold text-black">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                    MeTime 
                </Link>
                <div className="w-full bg-white rounded-3xl shadow border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                            Create and account
                        </h1>
                        <form className="space-y-4 md:space-y-6 text-left" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-3xl focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-black">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-3xl focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5" required=""/>
                            </div>
                            <div>
                                <label for="confirm-password" className="block mb-2 text-sm font-medium text-black">Confirm password</label>
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-3xl focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5" required=""/>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-violet-300 rounded bg-gray-50 focus:ring-3 focus:ring-violet-300" required=""/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label for="terms" className="font-light text-gray-500">I accept the <Link className="font-medium text-violet-600 hover:underline" to="#">Terms and Conditions</Link></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">Create an account</button>
                            <p className="text-sm font-light text-gray-500">
                                Already have an account? <Link to="/Login" className="font-medium text-violet-600 hover:underline">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            </section>
      )
}

export default Register
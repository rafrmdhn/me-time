import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <section class="bg-[#F6F4EB]">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 text-black">
                    <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                    MeTime    
                </a>
                <div class="w-full bg-white rounded-3xl shadow border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-black">
                            Sign in to your account
                        </h1>
                        <form class="space-y-4 md:space-y-6 text-left" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-black">Your email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border-gray-300 text-black sm:text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-black">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-violet-300 rounded bg-gray-50 focus:ring-3 focus:ring-violet-300" required=""/>
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" class="text-sm font-medium text-violet-600 hover:underline">Forgot password?</a>
                            </div>
                            <button type="submit" class="w-full text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">Sign in</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/Register" class="font-medium text-violet-600 hover:underline">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            </section>
      )
}

export default Login;
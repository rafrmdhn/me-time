import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='w-full min-h-screen bg-gradient-to-r from-[#91C8E4] to-[#4682A9] flex flex-col justify-center items-center'>
    
            <div className='mb-4 flex justify-center items-center gap-3'>
                {/* <img src={iconReact} alt="" className='w-20' /> */}
                <h1 className='text-white text-3xl font-medium'>MeTime</h1>
            </div>
            <div className='bg-white px-4 py-10 w-full max-w-xl rounded-xl'>
                <h1 className='text-center mb-3 text-2xl'>LOGIN ADMIN</h1>
                <p className='text-center text-red-600 mb-3'>Email or Passowrd is invalid</p>
    
                <form action="" >
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="email" className='text-sm text-left'>E-Mail</label>
                        <input 
                            type="email" 
                            name='email' 
                            placeholder='person@gmail.com' 
                            className='py-4 px-3 w-full border border-slate-400 outline-none hover:border-slate-500 focus:border-slate-800 rounded' 
                        />
                    </div>
                    <div className='flex flex-col mb-4 text-left'>
                        <label htmlFor="email" className='text-sm'>Password</label>
                        <input 
                            type="password" 
                            name='password' 
                            placeholder='********' 
                            className='py-4 px-3 w-full border border-slate-400 outline-none hover:border-slate-500 focus:border-slate-800 rounded' 
                        />
                    </div>
                    <button 
                        type="submit"
                        className='w-full bg-gradient-to-r from-[#91C8E4] to-[#4682A9] hover:bg-gradient-to-r hover:from-[#4682A9] hover:to-[#91C8E4] py-4 text-white rounded mb-4'
                    >Login</button>
                </form>
    
                <div className='text-center mb-3'>
                    <Link to="/admin-register" className='text-sm text-blue-500'>Create a new account</Link>
                </div>
                
            </div>
        </div>
      )
}

export default Login
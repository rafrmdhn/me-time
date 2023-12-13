import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Logo from "../../assets/img/me-time.png";

const Register = () => {
    const [firstName, setFirstName]     = useState('');
    const [lastName, setLastName]       = useState('');
    const [email, setEmail]             = useState('');
    const [password, setPassword]       = useState('');
    const [re_password, setRePassword]  = useState('');
    const [success, setSuccess]         = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const history = useHistory();

    const Register = async (e) => {
        try {
            e.preventDefault();
            
            const response = await axios.post("http://195.35.8.190:4000/api/users", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                re_password: re_password
            });

            if(response) setSuccess(response.data.msg);
            setTimeout(() => { history.push("/Login"); }, 1000);

        } catch (error) {
            alert(error.response.data.msg);   
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordsMatch(e.target.value === re_password);
    };

    const handleConfirmPasswordChange = (e) => {
        setRePassword(e.target.value);
        setPasswordsMatch(password === e.target.value);
        setConfirmPasswordTouched(true);
    };
    
    useEffect(() => {
        const isFormValid =
            firstName.trim() !== '' &&
            lastName.trim() !== '' &&
            email.trim() !== '' &&
            password.trim() !== '' &&
            re_password.trim() !== '' &&
            passwordsMatch;

        setFormValid(isFormValid);
    }, [firstName, lastName, email, password, re_password, passwordsMatch]);

    return (
        <section className="bg-[#F6F4EB] min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to="/Home" className="flex items-center mb-6 text-2xl font-semibold text-black">
                    <img className="w-12 h-12" src={Logo} alt="logo Metime"/>
                    MeTime 
                </Link>
                <div className="w-full bg-white rounded-3xl shadow border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                            Buat Akun Baru
                        </h1>
                        <p className='text-green-500 text-center'>{success}</p>
                        <form className="space-y-4 md:space-y-6 text-left" onSubmit={Register}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-black">Nama Depan</label>
                                    <input type="text" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-3xl focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5" placeholder="First Name" required
                                    value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-black">Nama Belakang</label>
                                    <input type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-3xl focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5" placeholder="Last Name" required
                                    value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-black">Email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-3xl focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5" placeholder="name@company.com" required
                                value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-black">Kata Sandi</label>
                                <input type="password" name="password" id="password" placeholder="Kata Sandi" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-3xl focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5" required
                                value={password} onChange={handlePasswordChange}/>
                            </div>
                            <div>
                                <label for="confirm-password" className="block mb-2 text-sm font-medium text-black">Konfirmasi Kata Sandi</label>
                                <input type="password" name="re_password" id="re_password" placeholder="Konfirmasi Kata Sandi" className={`bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-3xl focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5 ${passwordsMatch || !confirmPasswordTouched ? '' : 'border-red-500'}`} required
                                value={re_password}  onChange={handleConfirmPasswordChange}/>
                                {!passwordsMatch && confirmPasswordTouched && <p className="text-xs text-red-500">* Passwords do not match</p>}
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-violet-300 rounded bg-gray-50 focus:ring-3 focus:ring-violet-300" required/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label for="terms" className="font-light text-gray-500">Saya Menerima <Link className="font-medium text-violet-600 hover:underline" to="#">syarat dan ketentuan yang berlaku</Link></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center" disabled={!formValid}>Buat Akun</button>
                            <p className="text-sm font-light text-gray-500">
                                Sudah punya akun? <Link to="/Login" className="font-medium text-violet-600 hover:underline">Masuk Disini</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            </section>
      )
}

export default Register;
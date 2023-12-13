import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const EditProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [re_password, setRePassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [success, setSuccess] = useState('');
    const history = useHistory();

    useEffect(() => {
        const localStorageKey = localStorage.getItem('UserKey');
        if (!localStorageKey) {
            history.push('/home');
        }
    })

    const localStorageKey = localStorage.getItem('UserKey');

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://195.35.8.190:4000/api/users/${localStorageKey}`);
            const { data } = response.data;
            setFirstName(data.firstName);
            setLastName(data.lastName);
            setEmail(data.email);
            setCurrentPassword(data.password);
            setSuccess('');
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => { fetchData();}, []); 

    const Update = async (e) => {
        try {
            e.preventDefault();

            if (password === '' && re_password === '') {
                alert("Please enter at least one password.");
                return;
              }
          
              if (password !== re_password) {
                alert("Password doesn't match");
                return;
              }
          
              const updatedPassword = password ? password : currentPassword;
          
              const response = await axios.patch(`http://195.35.8.190:4000/api/users/${localStorageKey}`, {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: updatedPassword,
            });

            // JIKA RESPONSENYA BERHASIL, ARAHKAN KE PROFILE
            if(response) setSuccess(response.data.msg);
            setTimeout(() => { window.location.reload();}, 1000);
        } catch (error) {
            alert(error.response.data.msg);
        }
    }

    return (
        <div className="items-center justify-center m-20 ">
            <div className="py-10 px-10 mx-auto max-w-2xl rounded-3xl border shadow-md sm:text-center justify-content gap-7">
                <div className="md:col-span-2">
                <h2 className="md:text-4xl text-4xl font-semibold">Edit Profil</h2>
                <p className='text-green-500 text-center'>{success}</p>
                <form onSubmit={Update}>
                    <div class="mt-10">
                        <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label for="first_name" className="block text-lg font-medium text-gray-700">Nama Depan</label>
                            <input type="text" name="first_name" id="first_name" placeholder="First Name" className="bg-transparent mt-1 text-xl focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-3xl p-3" required
                            value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label for="last_name" className="block text-lg font-medium text-gray-700">Nama Belakang</label>
                            <input type="text" name="last_name" id="last_name" placeholder="Last Name" className="bg-transparent mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-3xl p-3" required
                            value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>

                        <div className="col-span-6">
                            <label for="email_address" className="block text-lg font-medium text-gray-700">Email</label>
                            <input type="text" name="email_address" id="email_address" placeholder="email" className="bg-transparent mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-3xl p-3" required
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label for="password" className="block text-lg font-medium text-gray-700">Kata Sandi</label>
                            <input type="password" name="password" id="password" placeholder="Masukkan Kata Sandi" className="bg-transparent mt-1 text-xl focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-3xl p-3"
                            onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label for="confirm-password" className="block text-lg font-medium text-gray-700">Konfirmasi Kata Sandi</label>
                            <input type="password" name="confirm-password" id="confirm-password" placeholder="Konfirmasi Kata Sandi" className="bg-transparent mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-3xl p-3 "
                            onChange={(e) => setRePassword(e.target.value)}/>
                        </div>
                        </div>
                    </div>
                    <div className="px-4 mt-10 text-right sm:px-6">
                        <button type="submit" className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-7 py-2 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                        Simpan
                        </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
    );
};

export default EditProfile;
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
        <div class="items-center justify-center m-20 ">
            <div class="py-10 px-10 mx-auto max-w-2xl rounded-3xl border shadow-md sm:text-center justify-content gap-7">
                <div class="md:col-span-2">
                <h2 className="md:text-4xl text-4xl font-semibold">Edit Profile</h2>
                <p className='text-green-500 text-center'>{success}</p>
                <form onSubmit={Update}>
                    <div class="mt-10">
                        <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label for="first_name" class="block text-lg font-medium text-gray-700">First name</label>
                            <input type="text" name="first_name" id="first_name" placeholder="First Name" class="bg-transparent mt-1 text-xl focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-3xl p-3" required
                            value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="last_name" class="block text-lg font-medium text-gray-700">Last name</label>
                            <input type="text" name="last_name" id="last_name" placeholder="Last Name" class="bg-transparent mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-3xl p-3" required
                            value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>

                        <div class="col-span-6">
                            <label for="email_address" class="block text-lg font-medium text-gray-700">Email address</label>
                            <input type="text" name="email_address" id="email_address" placeholder="email" class="bg-transparent mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-3xl p-3" required
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="password" class="block text-lg font-medium text-gray-700">Password</label>
                            <input type="password" name="password" id="password" placeholder="Create New Password" class="bg-transparent mt-1 text-xl focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-3xl p-3"
                            onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="confirm-password" class="block text-lg font-medium text-gray-700">Confirm Password</label>
                            <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm New Password" class="bg-transparent mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-3xl p-3 "
                            onChange={(e) => setRePassword(e.target.value)}/>
                        </div>
                        </div>
                    </div>
                    <div class="px-4 mt-10 text-right sm:px-6">
                        <button type="submit" class="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-7 py-2 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                        Save
                        </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
    );
};

export default EditProfile;
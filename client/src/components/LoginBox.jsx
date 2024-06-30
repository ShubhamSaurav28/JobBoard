import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';
// import baseURL from '../DB';
// import { AppState } from '../Context/AgriProvider';
// import { toast } from 'react-toastify'

export default function LoginBox() {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    // const { user, setIsLoading } = AppState();

    const navigate = useNavigate();
    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    const handleLogin = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            let response = await axios.post(`${baseURL}/api/user/login`, data);
            if (response && response.data) {
                const token = response.data.token;
                const decodedToken = parseJwt(token);
                // const tokenString = JSON.stringify({
                //     id: decodedToken.id,
                //     email: decodedToken.email,
                //     cityName: decodedToken.cityName
                // });
                if (decodedToken) {
                    window.localStorage.setItem('agriSmart', JSON.stringify(decodedToken));
                    setIsLoading(false);
                    navigate('/');
                    window.location.reload(false);
                }
            }
        } catch (error) {
            setIsLoading(false);
            if (error.request && error.request.status === 0) {
                toast.error(error.message)
            }
            else {
                toast.error(error.request.response)
            }
            console.log(error);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center w-full h-[90vh] bg-black bg-opacity-10 backdrop-blur-sm">
                <div className="w-full max-w-md rounded-md bg-white px-6 py-6 shadow-md sm:rounded-lg">
                    <div className='flex justify-between mb-5'>
                        <h1 className='text-gray-600 text-3xl font-semibold'>Log In</h1>
                    </div>
                    <form
                        onSubmit={handleLogin}
                        className="group"
                    >
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-gray-900 "
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500  [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-pink-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                    required
                                    pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            email: e.target.value
                                        });
                                    }}
                                />
                                <span className="mt-1 hidden text-sm text-pink-400">
                                    Please enter a valid email address.{' '}
                                </span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium text-gray-900 d"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500  [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-pink-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                                    required
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            password: e.target.value
                                        });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                            <button
                                type="submit"
                                className="mt-2 w-full rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 text-center text-sm font-medium text-white hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none focus:ring-1 focus:ring-pink-300 disabled:cursor-not-allowed disabled:bg-gradient-to-br disabled:from-gray-100 disabled:to-gray-300 disabled:text-gray-400 group-invalid:pointer-events-none group-invalid:bg-gradient-to-br group-invalid:from-gray-100 group-invalid:to-gray-300 group-invalid:text-gray-400 group-invalid:opacity-70"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="text-md mt-4 text-zinc-600 ">
                        Don&apos;t have an account?{' '}
                        <span>
                            <Link
                                to="/signup"
                                className="text-indigo-500 hover:text-indigo-600 hover:underline "
                            >
                                Register
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

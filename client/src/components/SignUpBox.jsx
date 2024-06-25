import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import baseURL from '../DB';
// import { AppState } from '../Context/AgriProvider';
// import { toast } from 'react-toastify';

export default function SignUpBox() {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // const { user, setIsLoading } = AppState();

  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let response = await axios.post(`${baseURL}/api/user/signup`, data);
      if (response) {
        setIsLoading(false);
        navigate('/login');
      }
    } catch (error) {
      setIsLoading(false);
      if (error.request && error.request.status === 0) {
        toast.error(error.message);
      } else {
        toast.error(error.request.response);
      }
      console.log(error);
    }
    console.log(data);
  };

  // Destructure data
  const { username, email, password } = data;

  // Disable submit button until all fields are filled in
  const canSubmit = [username, email, password].every(Boolean);

  // useEffect(() => {
  //     if (user) {
  //         navigate('/');
  //     }
  // }, [user]);

  return (
    <>
      <div className="flex items-center justify-center w-full h-[90vh] bg-black bg-opacity-10 backdrop-blur-sm">
        <div className="w-full max-w-md rounded-md bg-white px-6 py-6 shadow-md sm:rounded-lg">
          <div className='flex justify-between mb-5'>
            <h1 className='text-gray-600 text-3xl font-semibold'>Sign Up</h1>
          </div>
          <form
            onSubmit={handleRegistration}
            className="group"
          >
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  id='username'
                  type="text"
                  name="username"
                  placeholder="Name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-[#2b9348] focus:ring-[#2b9348] [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-[#2b9348] valid:[&:not(:placeholder-shown)]:border-[#2b9348]"
                  pattern="[a-zA-Z ]{2,}"
                  required
                  onChange={(e) => {
                    setData({
                      ...data,
                      username: e.target.value
                    });
                  }}
                />
                <span className="mt-1 hidden text-sm text-red-400">
                  Name is required
                </span>
              </div>
            </div>

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
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-[#2b9348] focus:ring-[#2b9348] [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-[#2b9348] valid:[&:not(:placeholder-shown)]:border-[#2b9348]"
                  autoComplete="off"
                  required
                  pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  onChange={(e) => {
                    setData({
                      ...data,
                      email: e.target.value
                    });
                  }}
                />
                <span className="mt-1 hidden text-sm text-red-400">
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
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-[#2b9348] focus:ring-[#2b9348] [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-[#2b9348] valid:[&:not(:placeholder-shown)]:border-[#2b9348]"
                  autoComplete="off"
                  required
                  pattern="[0-9a-zA-Z]{6,}"
                  onChange={(e) => {
                    setData({
                      ...data,
                      password: e.target.value
                    });
                  }}
                />
                <span className="mt-1 hidden text-sm text-red-400">
                  Password must be at least 6 characters.{' '}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  placeholder="Confirm password"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-[#2b9348] focus:ring-[#2b9348] [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-[#2b9348] valid:[&:not(:placeholder-shown)]:border-[#2b9348]"
                  autoComplete="off"
                  required
                  pattern={password}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span className="mt-1 hidden text-sm text-red-400">
                  Confirm Password must be same as Password{' '}
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center">
              <button
                type="submit"
                disabled={!canSubmit}
                className="mt-2 w-full rounded-lg bg-[#8558f0] px-5 py-3 text-center text-sm font-medium text-white hover:bg-[#5c31c2] focus:outline-none focus:ring-1 focus:ring-[#631e8b] disabled:cursor-not-allowed disabled:bg-gradient-to-br disabled:from-gray-100 disabled:to-gray-300 disabled:text-gray-400 group-invalid:pointer-events-none group-invalid:bg-gradient-to-br group-invalid:from-gray-100 group-invalid:to-gray-300 group-invalid:text-gray-400 group-invalid:opacity-70"
              >
                Create account
              </button>
            </div>
          </form>
          <div className="text-md mt-4 text-zinc-600 ">
            Already have an account?{' '}
            <span>
              <Link
                to="/login"
                className="text-[#5d60ef] hover:text-[#4965c3] hover:underline "
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useContext } from 'react';
import loginLottieData from '../assets/lottie/login.json';
import Lottie from 'lottie-react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';

const SignIn = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const handleSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  return (
    <div className="min-h-screen  flex items-center justify-center p-4 border-2">
      <div className=" rounded-lg flex flex-col md:flex-row items-center w-full max-w-4xl">
        {/* Lottie Animation Section */}
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <Lottie animationData={loginLottieData}></Lottie>
        </div>

        {/* Sign-In Form Section */}
        <div className="w-full md:w-1/2 p-6 space-y-4">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h1>
          <p className="text-center text-lg font-thin">
            Sign in to your account
          </p>

          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className=" flex  justify-between">
              <label className="cursor-pointer flex items-center">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="ml-2 text-sm text-gray-500">Remember me</span>
              </label>
              <Link
                to={'/forgotPassword'}
                className="text-sm  text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="btn bg-indigo-300 w-full text-lg font-semibold"
            >
              Sign In
            </button>
          </form>

          <div className="text-center text-gray-500">
            Don't have an account?{' '}
            <Link href="/signup" className="text-green-700 hover:underline">
              Sign Up
            </Link>
          </div>

          <div className="divider">OR</div>

          <div className="flex justify-center space-x-4">
            <button onClick={handleGoogleSignIn} className="btn btn-outline ">
              <FcGoogle />
              Sign in with Google
            </button>
            <button className="btn btn-outline">
              <FaFacebook />
              Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

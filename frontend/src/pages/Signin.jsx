import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <div>
          <button
            type="button"
            className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <svg
              className="w-5 h-5 mr-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8c0-17.4-1.6-34.1-4.7-50.4H249v95.5h134.6c-5.8 31.3-23.4 57.8-50 75.6v62h80.9c47.3-43.6 74.5-107.8 74.5-182.7z"
              />
              <path
                fill="currentColor"
                d="M249 492c67.2 0 123.7-22.3 164.9-60.7l-80.9-62c-22.5 15.1-51.3 24-84 24-64.6 0-119.4-43.7-139.2-102.3H27.1v64.3C68.6 445.7 153.6 492 249 492z"
              />
              <path
                fill="currentColor"
                d="M109.8 293.4c-4.8-14.3-7.5-29.6-7.5-45.4s2.7-31.1 7.5-45.4V138H27.1C9.7 178.6 0 222.3 0 267.9s9.7 89.3 27.1 129.9l82.7-64.4z"
              />
              <path
                fill="currentColor"
                d="M249 97.7c35.7 0 67.7 12.3 92.9 36.4l69.7-69.7C370.7 25.6 312.3 0 249 0 153.6 0 68.6 46.3 27.1 117.9l82.7 64.3c19.8-58.6 74.6-102.3 139.2-102.3z"
              />
            </svg>
            Login with Google
          </button>
        </div>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or login with email:
            </span>
          </div>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-sm font-medium"
            >
              Continue
            </button>
          </div>
          <div className="text-sm text-center">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;

import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return ( 
        <div className="min-h-screen flex flex-col bg-[#f7f8fa]">
      {/* Top back link */}
      <div className="pt-6 pl-8">
        <Link to="/" className="flex items-center text-gray-400 hover:text-gray-900 text-sm font-medium">
          <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>
      </div>
      {/* Logo and Form */}
      <div className="flex flex-1 flex-col items-center justify-center">
        {/* Logo and title */}
        <div className="mb-7 flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600 text-white font-medium text-lg">
              360°
            </div>
            <span className="text-gray-900 text-xl font-medium">ThreeSixty</span>
          </div>
        </div>
        {/* Forgot Password Box */}
        <div className="w-full max-w-md mx-auto bg-white py-10 px-8 rounded-2xl shadow border border-gray-100">
          <div className="mb-5">
            <Link to="/signin" className="flex items-center text-gray-400 hover:text-gray-900 text-sm font-medium mb-2">
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to login
            </Link>
            <div className="flex flex-col items-center mt-4">
              <div className="bg-blue-50 rounded-full p-3 mb-3">
                {/* Simple Mail SVG */}
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="7" width="18" height="10" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>
              <h2 className="text-lg font-medium text-gray-800 mb-1">Forgot password?</h2>
              <div className="text-gray-400 text-base mb-4 text-center">No worries, we'll send you reset instructions</div>
            </div>
          </div>
          {/* Form */}
          <form>
            <div className="mb-5">
              <label className="block mb-1 text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="you@company.com"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium text-base transition"
            >
              Send Reset Link
            </button>
          </form>
          <div className="text-sm text-gray-400 text-center mt-4">
            We'll send a password reset link to your email if an account exists
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 text-gray-400 text-sm text-center">
          &copy; 2025 ThreeSixty. All rights reserved.
        </div>
      </div>
    </div>
     );
}
 
export default ForgotPassword;
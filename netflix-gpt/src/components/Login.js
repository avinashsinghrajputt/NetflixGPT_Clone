import React from 'react';
import Header from './Header';

const Login = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg')" }}>
      <div className="bg-black bg-opacity-75 h-full w-full absolute top-0 left-0"></div>
      <Header />
      <div className="relative z-10 flex justify-center items-center h-full">
        <form className="w-full max-w-md p-8 bg-black bg-opacity-75 text-white rounded">
          <h1 className="font-bold text-3xl py-4">Sign In</h1>
          <input type="email" placeholder="Email Address" className="p-4 my-2 w-full bg-gray-700 rounded" />
          <input type="password" placeholder="Password" className="p-4 my-2 w-full bg-gray-700 rounded" />
          <button className="p-4 my-4 bg-red-700 w-full rounded-lg font-semibold">Sign In</button>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div>
              <a href="#" className="text-blue-500">Need help?</a>
            </div>
          </div>
          <h4 className="my-4">
            New to Netflix? <span className="text-blue-500 cursor-pointer">Sign up now.</span>
          </h4>
          <h5 className="text-sm text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-500 cursor-pointer">Learn more.</span>
          </h5>
        </form>
      </div>
    </div>
  );
}

export default Login;
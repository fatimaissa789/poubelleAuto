import React from "react";

import trees from "../assets/login.jpg";

export default function Login() {
  return (
    <>
      <div className="w-full h-screen flex bg-white-700">
        <div
          className=" md:grid-cols-2 m-auto h-[550px] space-x-3.5   bg-emerald-600
    sm:max-w-[900px]"
        >
         

          <div className="p-4 flex flex-col justify-around">
            <form>
              <h2 className="text-4xl font-bold text-center mb-8">BRAND.</h2>
              <div>
                <input
                  className="border p-2 mr-2"
                  type="text"
                  placeholder="Username"
                />
                <input
                  className="border p-2"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <button className="w-full py-2 my-4 bg-green-600 hover:bg-green-500">
                Sign In
              </button>
              <p className="text-center">Forgot Username or Password?</p>
            </form>
            <p className="text-center">Sign Up</p>
          </div>
        </div>
        <div
          className=" md:grid-cols-2 m-auto h-[550px] space-x-3.5  
    sm:max-w-[900px]"
        >
           <h2 className="text-4xl font-bold text-center mb-8">BRAND.</h2>
          <div className='w-full pt-40 h-[550px] hidden md:block'>
           <img className='w-96 h-96 ' src={trees} alt="/" />
       </div>

       
        </div>
      </div>
    </>
  );
}

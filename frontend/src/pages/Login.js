import React from "react";

import trees from "../assets/login.jpg";
import "./login.css";

export default function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="bg-white flex flex-col justify-center">
        <form className="max-w-[400px]  h-full  mx-auto mt-5 mb-16 rounded-lg bg-emerald-600 p-8 px-8">
          <h2 className="text-4xl dark:text-white font-bold text-center">
            SIGN IN
          </h2>
          <div className="flex flex-col text-white py-2">
            <label className="relative cursor-pointer">
              <input
                type="text"
                placeholder="Email"
                className="  mt-2 p-1 items-center  text-3xl text-black bg-white border-white border-2 rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0 transition duration-200"
              />
              <span className="text-2xl text-black text-opacity-80 bg-white h-4/6  absolute left-5  top-4 px-1 transition duration-200 input-text">
                Email
              </span>
            </label>
          </div>
          <br></br>
    <div className="flex flex-col text-white py-2">
    <label className="relative cursor-pointer">
    <input
    type="password"
    className=" mt-2 p-1 items-center  text-3xl peer block min-h-[auto] w-full  text-black bg-white border-white border-2 rounded-lg border-opacity-50 outline-none  placeholder-gray-300 placeholder-opacity-0  ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    id="exampleFormControlInputPassword"
    placeholder="Example label" />
  <label
    for="exampleFormControlInputPassword"
    class="pointer-events-none absolute text-2xl text-black text-opacity-80 bg-white h-4/6   left-5   transition duration-200 input-text  top-4 mb-4 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >Password input
  </label>
             
            </label>
          </div>
          <br></br>
          <br></br>
          
          <br></br>
          <br></br>
          <br></br>

          <button className="w-9/12 my-5 py-2 ml-11 bg-emerald-600 rounded-full outline outline-offset-2 outline-white  text-white font-semibold">
            Se connecter
          </button>
        </form>
      </div>

      <div className="w-full  hidden md:block">
        <p className=" text-6xl text-emerald-600 mt-3">Ensemble pour un </p>
        <p className=" text-6xl text-emerald-600"> Sénegal Zéro </p>
        <p className=" text-6xl text-emerald-600"> Déchets .</p>
        <img className="w-96 h-96" src={trees} alt="/" />
      </div>
    </div>
  );
}

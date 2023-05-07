import React from "react";

import trees from "../../assets/login.jpg";


export default function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="bg-white flex flex-col justify-center">
      <form className='max-w-[400px] w-full mx-auto rounded-lg max-h-max md:mt-8 bg-emerald-600 mt-3 mb-3  p-20 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>Connexion</h2>
                <div className='flex flex-col text-white py-2'>
                    <label>Email</label>
                    <input className='p-2 rounded-lg text-black bg-white mt-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-white py-2'>
                    <label>Mot de passe</label>
                    <input className='p-2 rounded-lg text-black bg-white mt-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="password" />
                </div>
              
                <button className='w-5/12 ml-20 my-5 py-2  rounded-full bg-emerald-600 border-white border-2  text-white font-semibold '>Se connecter</button>
                
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

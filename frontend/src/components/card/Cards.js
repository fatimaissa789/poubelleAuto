import React from 'react'
import vide from "../../assets/vide.jpg";
import ferme from "../../assets/ferme.jpg";
export default function Cards() {
  return (
    <div class="grid grid-cols-3 gap-4 overflow-auto  md:grid-cols-3  ">
      <div className="pl-20">
        <div class="columns-1  border-black ">
          <img class="   " src={vide} alt="vide" />
        </div>
      </div>
      <div className="bg-green-500">09</div>

      <div className="">
      <div className=" pl-20 ">
        <div class="columns-1  border-black ">
          <img className="" src={ferme} alt="vide" />
        </div>
      </div>
      </div>
    </div>
  )
}

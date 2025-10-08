import React from "react";
import Person from "../assets/person.png";
import Personsquare from '../assets/Personsquare.png'
import RightArrow from "../assets/svgs/RightArrow.svg";

function Landing() {
  return (
    <>
      <section className="bg-black text-white p-3 py-12 h-full mx-auto my-16 rounded-md overflow-x-hidden">
        <div className="w-full mx-auto">
          <div className="text-[clamp(2rem,10vw,6rem)] md:text-[5vh] lg:text-[11vh] w-[80%] mx-auto leading-tight font-extrabold text-center text-wrap md:text-nowrap px-2 sm:px-4 md:px-6">
            <p >FRONT-END DEVELOPER</p>
          </div>
          <div className="flex justify-around gap-3 mb-14 mx-auto mt-5">
            <div className="hidden lg:flex text-wrap lg:w-[30%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloremque eligendi cum architecto id excepturi ex libero modi placeat distinctio, et veniam, at quos atque, impedit amet est! Praesentium, error.</div>
            <div className="hidden md:flex md:w-[50%] lg:w-[30%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eos deserunt, quasi cumque maiores illum molestiae blanditiis quisquam soluta quas?</div>
            <div className="flex gap-2 items-center lg:w-[20%]]">
              <p className="text-sm text-nowrap font-bold cursor-pointer ">GET IN TOUCH</p>
              <img className="cursor-pointer text-white transition-all duration-300 ease-in-out lg:hover:ml-3" src={RightArrow} />
            </div>
          </div>
        </div>
        <div>
          <img
            src={Person}
            className="md:block lg:ml-16 hidden md:rounded-br-full md:rounded-tr-full"
            alt="Banafshe Yazdani's Avatar"
          />
           <img
            src={Personsquare}
            className="block md:hidden sm:py-10 sm:rounded-br-full p-10 mx-auto rounded-full"
            alt="Banafshe Yazdani's Avatar"
          />
        </div>
      </section> 
    </>
  );
}

export default Landing;

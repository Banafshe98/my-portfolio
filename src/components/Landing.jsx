import React from "react";
import Person from "../assets/person.png";
import RightArrow from "../assets/svgs/RightArrow.svg";

function Landing() {
  return (
    <>
      <section className="bg-black text-white p-3 py-12 h-full w-10/12 mx-auto my-16 rounded-md overflow-x-hidden">
        <div className="w-fit mx-auto">
          <div className="text-[clamp(2rem,10vw,6rem)] md:text-[7vh]  leading-tight font-extrabold text-center text-wrap md:text-nowrap px-2 sm:px-4 md:px-6">
            <p >FRONT-END DEVELOPER</p>
          </div>
          <div className="flex justify-center gap-3 max-w-[1200px]">
            <div className="hidden sm:visible text-wrap max-w-[200px] md:max-w-[600px] sm:max-w-[250px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloremque eligendi cum architecto id excepturi ex libero modi placeat distinctio, et veniam, at quos atque, impedit amet est! Praesentium, error.</div>
            <div className="hidden sm:visible max-w-[200px] sm:max-w-[250px] md:max-w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eos deserunt, quasi cumque maiores illum molestiae blanditiis quisquam soluta quas?</div>
            <div className="flex gap-2 items-center mt-6">
              <p className="text-sm text-nowrap font-bold cursor-pointer">GET IN TOUCH</p>
              <img className="cursor-pointer text-white" src={RightArrow} />
            </div>
          </div>
        </div>
        <div className="sm:pr-8 py-6">
          <img
            src={Person}
            className="sm:rounded-tr-full sm:py-10 sm:rounded-br-full mx-auto rounded-full"
            alt="Banafshe Yazdani's Avatar"
          />
        </div>
      </section> 
    </>
  );
}

export default Landing;

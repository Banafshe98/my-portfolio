import React from "react";
import Person from "../assets/person.png";
import RightArrow from "../assets/svgs/RightArrow.svg";

function Landing() {
  return (
    <>
      <section className="bg-black text-white p-16 h-full w-10/12 mx-auto my-16 rounded-md overflow-x-hidden">
        <div className="w-fit mx-auto">
          <div className="text-[13vh] leading-tight font-extrabold text-center text-nowrap px-2 py-4">
            <p>FRONT-END DEVELOPER</p>
          </div>
          <div className="flex justify-center gap-3 max-w-[1200px]">
            <div className="text-wrap max-w-[200px] md:max-w-[600px] sm:max-w-[250px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloremque eligendi cum architecto id excepturi ex libero modi placeat distinctio, et veniam, at quos atque, impedit amet est! Praesentium, error.</div>
            <div className="max-w-[200px] sm:max-w-[250px] md:max-w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eos deserunt, quasi cumque maiores illum molestiae blanditiis quisquam soluta quas?</div>
            <div className="flex gap-2 items-center">
              <p className="text-sm text-nowrap font-bold">GET IN TOUCH</p>
              <img className="cursor-pointer text-white" src={RightArrow} />
            </div>
          </div>
        </div>
        <div className="pr-8">
          <img
            src={Person}
            className="rounded-tr-full py-10 rounded-br-full"
            alt="Banafshe Yazdani's Avatar"
          />
        </div>
      </section>
    </>
  );
}

export default Landing;

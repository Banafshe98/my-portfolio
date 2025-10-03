import React from "react";
import Person from "../assets/person.png";
import RightArrow from "../assets/svgs/RightArrow.svg";

function Landing() {
  return (
    <>
      <section className="text-gray-700 w-2/3 mx-auto body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg  cursor-pointer">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600/edf2f7/a5afbd"
            />
          </div>
        </div>
      </section>

      <section className="bg-black text-white p-16 h-full w-10/12 mx-auto">
        <div className="">
          <div className="text-9xl font-extrabold text-center py-4">
            <p>FRONT-END DEVELOPER</p>
          </div>
          <div className="flex justify-center gap-3 w-auto mx-auto">
            <div className="text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloremque eligendi cum architecto id excepturi ex libero modi placeat distinctio, et veniam, at quos atque, impedit amet est! Praesentium, error.</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eos deserunt, quasi cumque maiores illum molestiae blanditiis quisquam soluta quas?</div>
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

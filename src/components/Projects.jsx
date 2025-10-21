import React ,  { useRef } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

function Projects() {
    const timer = useRef();
  const [sliderRef] = useKeenSlider(
    {
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 12},
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 25 },
      },
    },
        created(s) {
      startAutoplay(s);
    },
    dragStarted(s) {
      stopAutoplay();
    },
    animationEnded(s) {
      startAutoplay(s);
    },
  }
);
 function startAutoplay(s) {
    stopAutoplay(); // clear old timer
    timer.current = setInterval(() => {
      s.next();
    }, 2000); // change slide every 3s
  }
    function stopAutoplay() {
    clearInterval(timer.current);
  }

  return (
    <div className=" bg-black py-16 mt-36">
      <div 
      
        ref={sliderRef}
        className="keen-slider text-center cursor-pointer max-w-11/12 mx-auto"
      >
        {[1,2,3,4,5,6,7].map((n)=> (<div key={n} className="keen-slider__slide bg-white rounded-md p-6 transition-all ease-in-out duration-500">
          {n}
        </div>)
        )}
       
      </div>
    </div>
  );
}

export default Projects;

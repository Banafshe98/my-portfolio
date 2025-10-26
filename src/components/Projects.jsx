import React, { useEffect, useRef, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import { Link } from "react-router-dom";
import Arrowdown from "../assets/gifs/Arrowdown.gif";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const timer = useRef();
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 12 },
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
  });
  function startAutoplay(s) {
    stopAutoplay(); // clear old timer
    timer.current = setInterval(() => {
      s.next();
    }, 2000); // change slide every 3s
  }
  function stopAutoplay() {
    clearInterval(timer.current);
  }

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(
          "https://68fce42596f6ff19b9f6a11f.mockapi.io/projects"
        );
        if (!res.ok) throw new Error("Network response aint ok");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);
   if (loading) return <p className="text-white text-center">Loading projects...</p>;
  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;


  return (
    <>
    <p className="text-center py-16 text-3xl mt-7">PROJECTS</p>
          <img
            className="mx-auto md:w-[5%] lg:w-[2%] w-[8%] cursor-pointer -mt-10 -mb-4 p-0 z-999"
            src={Arrowdown}
            alt=""
          />
    <div className=" bg-black py-16">
      <div
        ref={sliderRef}
        className="keen-slider text-center cursor-pointer max-w-11/12 mx-auto"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="keen-slider__slide bg-white rounded-md p-6 transition-all ease-in-out duration-500"
          >
            <p> {project.title}</p>
          </div>
        ))}
      </div>
    </div>
  </>
  );
}

export default Projects;

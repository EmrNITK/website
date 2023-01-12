import React, { useEffect, useState } from "react";
import "../assets/styles/workshops.css";
import { workshopData } from "../data";

export default function Workshops() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const len = workshopData.length;
      setIndex((prev) => (prev + 1) % len);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);
  return (
    <section id="workshops" className="relative md:aspect-[9/4]">
      <div className="w-full h-[70%] bg-lr-black text-white">
        <p className="upper font-semibold text-xl text-center">Workshops</p>
      </div>
      <div className="w-full h-[30%] bg-white"></div>
      <div className="absolute h-[80%] w-[95%] sm:w-[90%] md:w-[80%] bg-white top-[10%] left-[2.5%] sm:left-[5%] md:left-[10%] bg-glass sm:px-3 md:px-6 py-3">
        <div className="w-full h-[80%] flex justify-between">
          <div className="h-full w-[10px] bg-green-400 "></div>
          {workshopData.map((e, idx) =>
            idx === index ? (
              <img
                key={idx.toString()}
                src={workshopData[index].img}
                className="h-full workshops_img rounded-lg shadow-xl transition-all ease-in-out delay-1000"
              />
            ) : null
          )}
          <div className="h-full w-[10px] bg-green-400 "></div>
        </div>
        <p className="mt-2 lg:mt-8 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing.
        </p>
      </div>
    </section>
  );
}

import React from "react";
import agecal from "../assets/portfolio/agecalculator.png";
import calculator from "../assets/portfolio/calculator.png";
import navbar from "../assets/portfolio/newweather.png";
import reactParallax from "../assets/portfolio/newstopwatch.png";
import filmyverse from "../assets/portfolio/filmyverse.png";


const Portfolio = () => {
  const portfolios = [
    
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: filmyverse,
    },
    {
      id: 5,
      src: calculator,
    },
    {
      id: 6,
      src: agecal ,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-purple-200 to-purple-900 w-screen text-violet-900 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-violet-900">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-white rounded-lg">
              <img
                src={src}
                alt=""
                style={{  height:210 }}
                className="rounded-md duration-200 hover:scale-105"
              />
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
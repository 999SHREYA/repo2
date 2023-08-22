import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-violet-200 to-violet-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hey... I am Shreya. I am Front End Developer, and I have done Training in MERN Stack. So i am familiar with both FrontEnd and BackEnd Technologies.
        </p>

        <br />

        <p className="text-xl">
          I have done several projects on Html, Css, JavaScript and also done projects on popular FrontEnd JavaScript library React JS. 
        </p>
      </div>
    </div>
  );
};

export default About;
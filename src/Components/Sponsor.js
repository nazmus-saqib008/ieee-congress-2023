import React from "react";
import ieee_logo from "../Assets/ieee_logo.png";
import bg_img from "../Assets/image1.png";

function Sponsor() {
  return (
    <div
      id="hero"
      className="h-[550px] pt-10 flex flex-col justify-center items-center bg-slate-800"
    >
      <img
        src={bg_img}
        alt=""
        className="fixed -z-10 h-[100vh] w-full object-cover"
      />
      <h1 className="text-3xl md:text-5xl mb-12 text-center text-purple-300">
        Sponsors
      </h1>
      <div className="h-full w-full backdrop-filter backdrop-blur-[2px] bg-opacity-30 items-center flex flex-col">
        <div class="mt-4 md:mt-0 md:order-1">
          <img
            src={ieee_logo}
            alt="IEEE"
            className="h-60 mx-auto mix-blend-screen"
          />
        </div>
      </div>
    </div>
  );
}

export default Sponsor;

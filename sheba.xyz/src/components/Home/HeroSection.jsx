import React from "react";
import "../../../src/App.css";
export default function HeroSection() {
  return (
    <div className="flex content-normal items-center hero-bg bg-no-repeat bg-center bg-cover h-[450px] w-full">
      <div className="w-full">
        <h1 className="text-6xl font-bold text-black text-center">
          Your Personal Assistant
        </h1>
        <h2 className="text-2xl text-black mt-2 font-semibold text-center">
          We are here to help you
        </h2>
      <div className="my-2 mx-auto px-2 md:w-2/3 lg:w-1/2 xl:w-1/3 w-full">
        <input
          type="search"
          className="p-3 rounded w-full focus:outline-none hover:bg-transparent border border-sky-800 bg-white text-Black"
          placeholder="Find your services e.g. AC,Car,Facial,..."
        />
      </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import ProfilePicture from "../resources/Blossom.png";

const HomePage = () => {
  return (
    <div className="flex flex-row items-center w-full min-h-screen justify-between">
      <div className="w-1/2 text-right text-gray-950 m-200">
        <div className="flex-col p-10 m-10">
          <div className="text-5xl font-bold">
            <h1>{"Hi, I'm Aditya!"}</h1>
          </div>
          <div className="text-5xl">
            <p>{"Builder of things."}</p>
          </div>
        </div>
      </div>
      <div className="relative pt-0 w-1/2">
        <Image src={ProfilePicture} alt="My Photo" />
      </div>
    </div>
  );
};

export default HomePage;

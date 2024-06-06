"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
import Link from "next/link";

const Hero = () => {
  const [text, setText] = useTypewriter({
    words: [
      "Hi there, My name is Anurag ",
      "A pssionate web Developer enthusiast",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackGroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://app.gemoo.com/share/image-annotation/657221811430723584?codeId=vJ1Jddz4LeRWo&origin=imageurlgenerator&card=657221808733786112"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ">
          Web Developer
        </h2>
        <h1 className="text-4xl lg:text-4xl font-semibold px-10">
          {" "}
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">ABOUT</button>
          </Link>
          <Link href="#skills">
            {" "}
            <button className="heroButton">SKILLS</button>
          </Link>
          <Link href="#projects">
            {" "}
            <button className="heroButton">PROJECTS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

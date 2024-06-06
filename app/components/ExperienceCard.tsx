"use client";
import React from "react";
import { motion } from "framer-motion";
const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="data:image/png;base64,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"
        alt=""
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light"> Demo</h4>
        <p className="font-bold text-2xl">My Company</p>
        <div className="flex space-x-2 mt-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EMrV3oiJPe4_eu28lb7q4sXnisVxxKIK3w&s"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EMrV3oiJPe4_eu28lb7q4sXnisVxxKIK3w&s"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EMrV3oiJPe4_eu28lb7q4sXnisVxxKIK3w&s"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-500 ">Satrted work</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

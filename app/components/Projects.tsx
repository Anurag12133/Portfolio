"use client";
import { motion } from "framer-motion";
import React from "react";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      {" "}
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        PROJECTS
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-lE4l2VGGbNfMyQWN_rjjY0kbx6-ljebLA&s"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                Case Study {i + 1} of {projects.length}: Website
              </h4>
              <p className="text-lg  text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus non debitis voluptatum asperiores consectetur enim
                dolorem quos, ullam ducimus placeat vitae molestiae possimus
                officia inventore id porro, odio temporibus ea!
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;

"use client";
import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};
const Header = ({}: Props) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{
          opacity: 0,
          x: -500,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
      >
        <SocialIcon
          url="https://github.com/Anurag12133"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Anurag12133"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Anurag12133"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>
      <div>
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
          href="#contact"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-grey-400">
          Get in Touch
        </p>
      </div>
    </header>
  );
};

export default Header;

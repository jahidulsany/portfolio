"use client";

import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "@/components/ui/MagicButton";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <div className="pt-20 pb-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
              >
                <Image
                  src="/jahidulSany.png"
                  alt="jahidul sany"
                  width="192"
                  height="192"
                  quality="95"
                  priority={true}
                  className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
              </motion.div>

              <motion.span
                className="absolute bottom-0 right-0 text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  delay: 0.1,
                  duration: 0.7,
                }}
              >
                👋
              </motion.span>
            </div>
          </div>

          <p className="my-6 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hey there!<br/>I&apos;m Jahidul Sany, a Next.js Developer <br /> based in the
            United Kingdom.
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[2.5rem] md:text-5xl lg:text-[4rem]"
          />

          <p className="my-4 uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <a
              href="#about"
              className="flex items-center rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
              onClick={() => {
                setActiveSection("About");
                setTimeOfLastClick(Date.now());
              }}
            >
              <MagicButton
                title="Show my work"
                icon={
                  <FaLocationArrow className="opacity-70 group-hover:translate-x-2 transition" />
                }
                position="right"
              />
            </a>

            <a
              className="flex items-center rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
              href="/CV.pdf"
              download
            >
              <MagicButton
                title="Download CV"
                icon={
                  <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
                }
                position="right"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

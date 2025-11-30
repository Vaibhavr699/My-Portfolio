"use client";
import Image from "next/image";
import memojiImage from "@/assets/icons/vai.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import GrainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-28 md:py-44 lg:py-56 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)", // Safari support
        }}
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${GrainImage.src})` }}
        ></div>

        {/* Hero Rings */}
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* Hero Orbit Elements */}
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={600} rotation={98}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={500} rotation={30}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={145}>
          <SparkleIcon className="size-15 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={70}>
          <div className="rounded-full size-3 bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="rounded-full size-2 bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="rounded-full size-2 bg-emerald-300/20" />
        </HeroOrbit>
      </div>

      <div className="container" id="home">
        <div className="flex flex-col items-center">
          {/* Increased Image Size */}
          <Image src={memojiImage} className="size-[150px]" alt="icon image" />

          {/* Availability Badge */}
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-full mt-0">
            <div className="bg-green-500 size-3 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping rounded-full"></div>
            </div>
            <div className="text-sm font-medium">Available for new Projects!</div>
          </div>

          {/* Text Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-6 tracking-wide">
              Hello, I&apos;m <span className="gradient-text">Vaibhav Raj</span>
            </h1>
            <p className="mt-3 text-white/50 text-center md:text-lg">
  <strong>Full Stack Developer</strong> specializing in React, Next.js, and Node.js. 
  I build engaging, high-performance digital experiences with a focus on clean design 
  and efficient, scalable code. Based in India, I&apos;m always exploring new technologies 
  and elevating my craft in the ever-evolving world of web development.
</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 gap-4 z-10">
            <a href="#project">
              <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
                <span className="font-semibold">Explore My Work</span>
                <ArrowDown className="size-4" />
              </button>
            </a>
            <a href="mailto:vaibhavr699@gmail.com">
              <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-10">
                <span>👋</span>
                <span className="font-semibold">Let&apos;s Connect</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";

import { useEffect } from "react";

// @ts-expect-error: AOS is found
import AOS from "aos";
import "aos/dist/aos.css";

import { Marquee } from "./marquee";
import Image from "next/image";

import html from "../public/images/skills/logo_html.png";
import css from "../public/images/skills/logo_css.png";
import tailwind from "../public/images/skills/logo_tailwind.png";
import js from "../public/images/skills/logo_javascript.png";
import ts from "../public/images/skills/logo_typescript.png";
import react from "../public/images/skills/logo_react.png";
import next from "../public/images/skills/logo_nextjs.png";
import redux from "../public/images/skills/logo_redux.png";
import flutter from "../public/images/skills/logo_flutter.png";
import svelte from "../public/images/skills/logo_svelte.png";

import nodejs from "../public/images/skills/logo_nodejs.png";
import express from "../public/images/skills/logo_expressjs.png";
import cpp from "../public/images/skills/logo_c++.png";
import java from "../public/images/skills/logo_java.png";
import python from "../public/images/skills/logo_python.png";
import php from "../public/images/skills/logo_php.png";
import jquery from "../public/images/skills/logo_jquery.png";
import firebase from "../public/images/skills/logo_firebase.png";
import mongodb from "../public/images/skills/logo_mongodb.png";
import git from "../public/images/skills/logo_git.png";

const firstRow = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Tailwind", icon: tailwind },
  { name: "Javascript", icon: js },
  { name: "Typescript", icon: ts },
  { name: "React", icon: react },
  { name: "Next", icon: next },
  { name: "Redux", icon: redux },
  { name: "Flutter", icon: flutter },
  { name: "Svelte", icon: svelte },
];

const secondRow = [
  { name: "NodeJS", icon: nodejs },
  { name: "Express", icon: express },
  { name: "C++", icon: cpp },
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "Php", icon: php },
  { name: "JQuery", icon: jquery },
  { name: "Firebase", icon: firebase },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
];

export default function Work() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full bg-[#18181b] flex justify-center items-center border-y-4">
      <section className="w-full flex flex-col portrait:pt-[3vh] portrait:pb-[6vh] pt-[5vh] pb-[10vh] items-center">
        <div className="w-full flex portrait:pt-4 items-center justify-center">
          <h1
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="portrait:text-lg text-3xl font-bold text-white/90 text-center"
          >
            {"< Skills />"}
          </h1>
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="portrait:px-[1.5rem] max-w-3xl text-white pt-8 text-center"
        >
          &ldquo;Tech evolves, and so do I. Over the years, I’ve mastered a
          diverse set of tools and technologies to build, create, and solve
          problems using the applications I design and develop. As the industry
          continues to moves forward, so will my skills - ever adaptable,
          versatile, and always learning.&ldquo;
        </p>
        <div className="w-full max-w-5xl flex relative justify-center items-center mt-8 ">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background z-10"></div>
          <div className="relative flex w-full flex-col gap-2 md:gap-4 items-center justify-center overflow-hidden mask">
            <Marquee
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              className="[--duration:20s]"
            >
              {firstRow.map((logo) => {
                return (
                  <Image
                    key={logo.name}
                    src={logo.icon}
                    alt={logo.name}
                    className="h-[2rem] w-[2rem] md:h-[4rem] md:w-[4rem] aspect-square object-cover transition-all duration-300 filter grayscale hover:grayscale-0"
                    priority
                  />
                );
              })}
            </Marquee>
            <Marquee
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              reverse
              className="[--duration:20s]"
            >
              {secondRow.map((logo) => {
                return (
                  <Image
                    key={logo.name}
                    src={logo.icon}
                    alt={logo.name}
                    className="h-[2rem] w-[2rem] md:h-[4rem] md:w-[4rem] aspect-square object-cover transition-all duration-300 filter grayscale hover:grayscale-0"
                    priority
                  />
                );
              })}
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
}

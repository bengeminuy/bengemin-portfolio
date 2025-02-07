"use client";

import { useEffect } from "react";

// @ts-expect-error: AOS is found
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import ProfilePicture from "../public/images/profile_picture.png";

import "../styles/text-overlay.css";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="w-full max-w-5xl flex flex-col landscape:flex-row portrait:pt-[5vh] portrait:pb-[10vh] pt-[10vh] pb-[20vh] portrait:items-center">
      <Image
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        src={ProfilePicture}
        alt="Bengemin Profile Picture"
        className="h-[20rem] w-[15rem] md:h-[28rem] md:w-[21rem] aspect-3/4 rounded-md shadow-inner object-cover"
        priority
      />

      <div className="flex flex-col landscape:pl-8 portrait:pt-4">
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="pt-4 landscape:pt-8 portrait:text-sm text-2xl text-center landscape:text-start font-semibold text-white/70"
        >
          {"I'm John Bengemin Uy, and I love"}
        </p>
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="pt-4 landscape:pt-10 left-16 portrait:text-2xl text-6xl text-center landscape:text-start font-bold text-white"
        >
          {"Building future-ready"}
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="pt-1 portrait:pt-0 left-16 portrait:text-2xl text-6xl text-center landscape:text-start font-bold text-white"
        >
          <span className="purple-gradient-overlay">{"Functional"}</span>
          {" apps 🤖"}
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="pt-3 landscape:pt-10 portrait:text-xl text-4xl text-font-pr text-center landscape:text-start font-semibold italic text-white/90"
        >
          {"Full-stack Developer"}
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="portrait:text-base text-2xl text-font-pr text-center landscape:text-start font-light text-white/70"
        >
          {"And an endlessly-learning explorer"}
        </div>
      </div>
    </section>
  );
}

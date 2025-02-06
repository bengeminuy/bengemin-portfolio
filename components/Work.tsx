"use client";

import { useEffect } from "react";

// @ts-expect-error: AOS is found
import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/text-overlay.css";

export default function Work() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full bg-[#18181b] flex justify-center items-center border-y-4">
      <section className="w-full max-w-5xl flex flex-col portrait:pt-[3vh] portrait:pb-[6vh] pt-[5vh] pb-[10vh] items-center">
        <div className="w-full flex portrait:pt-4 items-center justify-center">
          <h1
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="portrait:text-lg text-3xl font-bold text-white/70 text-center"
          >
            Career
          </h1>
        </div>
        <div className="portrait:px-[1.5rem] pt-6 max-w-3xl">
          <ol className="relative border-s border-gray-200">
            <li className="ms-4 pt-8 pb-8">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <h2
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="pb-2 text-2xl font-bold leading-none text-white"
              >
                <span className="purple-gradient-overlay">
                  {"Nipponware Dinnerware"}
                </span>
              </h2>
              <h3
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="text-lg italic font-semibold text-white/80"
              >
                Fullstack Developer
              </h3>
              <h3
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="pb-2 text-md font-extralight text-white/70"
              >
                01/2024 - Present
              </h3>

              <ul
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="space-y-1 list-disc list-inside text-white"
              >
                <li>
                  Developed a{" "}
                  <span className="font-bold text-[#a78bfa]">Next.js</span> web
                  app and a{" "}
                  <span className="font-bold text-[#a78bfa]">Flutter</span>{" "}
                  mobile app to streamline order processing, inventory tracking,
                  and workforce management.
                </li>
                <li>
                  Implemented CRUD functionalities for key business entities,
                  (Stores, Products, Orders, etc.) using{" "}
                  <span className="font-bold text-[#a78bfa]">
                    Google Firebase&apos;s NoSQL database
                  </span>
                  , ensuring smooth data management.
                </li>
                <li>
                  Designed and generated data-driven reports using{" "}
                  <span className="font-bold text-[#a78bfa]">Node.js</span> to
                  enhance decision-making.
                </li>
              </ul>
            </li>
            <li className="ms-4 pb-8">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <h2
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="pb-2 text-2xl font-bold leading-none text-white"
              >
                <span className="purple-gradient-overlay">
                  {"Streamline Blinds Corporation"}
                </span>
              </h2>
              <h3
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="text-lg italic font-semibold text-white/80"
              >
                Fullstack Developer
              </h3>
              <h3
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="pb-2 text-md font-extralight text-white/70"
              >
                01/2023 - 12/2023
              </h3>
              <ul
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="space-y-1 list-disc list-inside text-white"
              >
                <li>
                  Integrated company data and requirements with the web
                  application I developed for Microlines, improving
                  inter-business operations.
                </li>
                <li>
                  Optimized{" "}
                  <span className="font-bold text-[#a78bfa]">Node.js</span> API
                  calls enhancing system performance leading to a smoother user
                  experience.
                </li>
                <li>
                  Worked closely with business owners and employees of various
                  branches to implement requested features and resolve system
                  bugs efficiently.
                </li>
              </ul>
            </li>
            <li className="ms-4 pb-8">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <h2
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="pb-2 text-2xl font-bold leading-none text-white"
              >
                <span className="purple-gradient-overlay">
                  {"Microlines Sales Center"}
                </span>
              </h2>
              <h3
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="text-lg italic font-semibold text-white/80"
              >
                Fullstack Developer
              </h3>
              <h3
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="pb-2 text-md font-extralight text-white/70"
              >
                01/2020 - 12/2022
              </h3>
              <ul
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="space-y-1 list-disc list-inside text-white"
              >
                <li>
                  Developed a{" "}
                  <span className="font-bold text-[#a78bfa]">React</span>-based
                  web application to digitize business processes, minimize human
                  error, and reduce manual tasks.
                </li>
                <li>
                  Built database using{" "}
                  <span className="font-bold text-[#a78bfa]">Firebase</span> and
                  automated reports and data analysis tools using{" "}
                  <span className="font-bold text-[#a78bfa]">Node.js</span> for
                  improved decision-making and operational efficiency.
                </li>
                <li>
                  Collaborated with business owners and employees to implement
                  requested features and resolve system bugs.
                </li>
              </ul>
            </li>
            <li className="ms-4 pb-8">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <h2
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="pb-2 text-2xl font-bold leading-none text-white"
              >
                <span className="purple-gradient-overlay">
                  {"Nokia Technology Center"}
                </span>
              </h2>
              <h3
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="text-lg italic font-semibold text-white/80"
              >
                Software Engineer
              </h3>
              <h3
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="pb-2 text-md font-extralight text-white/70"
              >
                08/2018 - 12/2019
              </h3>
              <ul
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="pb-8 space-y-1 list-disc list-inside text-white"
              >
                <li>
                  Developed and optimized software solutions using{" "}
                  <span className="font-bold text-[#a78bfa]">C++</span> and{" "}
                  <span className="font-bold text-[#a78bfa]">Java</span>,
                  improving system performance and reducing issue turnaround
                  time.
                </li>
                <li>
                  Led the development of new features while collaborating with
                  cross-functional teams and departments using{" "}
                  <span className="font-bold text-[#a78bfa]">Scrum</span> and{" "}
                  <span className="font-bold text-[#a78bfa]">Agile</span>{" "}
                  metholodogies.
                </li>
                <li>
                  Recognized with an award for creating a tool using{" "}
                  <span className="font-bold text-[#a78bfa]">Python</span> that
                  streamlined debugging and issue resolution for the entire
                  department.
                </li>
              </ul>
              <h3
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="text-lg italic font-semibold text-white/80"
              >
                Software Engineer Intern
              </h3>
              <h3
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="pb-2 text-md font-extralight text-white/70"
              >
                06/2017 - 08/2017
              </h3>
              <ul
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className="space-y-1 list-disc list-inside text-white"
              >
                <li>
                  Developed web applications using{" "}
                  <span className="font-bold text-[#a78bfa]">
                    Ruby on Rails
                  </span>{" "}
                  to improve internal processes, including meeting room
                  reservations and feature progress tracking.
                </li>
                <li>
                  Collaborated with a team of engineers to enhance internal
                  tools, ensuring better efficiency and usability.
                </li>
                <li>
                  Gained hands-on experience in full-stack development,
                  contributing to real-world software solutions in a corporate
                  setting.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

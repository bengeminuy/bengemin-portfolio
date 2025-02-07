"use client";

import { useEffect } from "react";

// @ts-expect-error: AOS is found
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

import CGC from "../public/images/projects/cgc.png";
import Giftify from "../public/images/projects/giftify.png";
import PRC from "../public/images/projects/prc.png";
import ETL from "../public/images/projects/etl.png";

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="w-full max-w-5xl flex flex-col portrait:pt-[3vh] portrait:pb-[6vh] pt-[5vh] pb-[10vh] portrait:items-center">
      <div className="w-full flex portrait:pt-4 items-center justify-center">
        <h1
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="portrait:text-lg text-3xl font-bold text-white/90 text-center"
        >
          {"< Projects />"}
        </h1>
      </div>
      <div className="flex flex-row flex-wrap pt-8 justify-center items-stretch gap-4">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
          data-aos-once="true"
          className="max-w-xs rounded-lg shadow-sm bg-[#1f1f23] border-gray-700"
        >
          <Image
            src={CGC}
            alt="CGC Project"
            className="rounded-t-lg aspect-4/3 object-cover"
            priority
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Christian Gospel Center Baptismal Archive
            </h5>
            <p className="mb-3 font-normal text-gray-400">
              Next.js web app for managing member data and generating reports as
              needed by the church.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
          data-aos-once="true"
          className="max-w-xs rounded-lg shadow-sm bg-[#1f1f23] border-gray-700"
        >
          <Image
            src={Giftify}
            alt="Giftify Project"
            className="rounded-t-lg aspect-4/3 object-cover"
            priority
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Giftify
            </h5>
            <p className="mb-3 font-normal text-gray-400">
              Flutter mobile app for organizing and managing exchange gift
              groups during the holiday season.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="600"
          data-aos-once="true"
          className="max-w-xs rounded-lg shadow-sm bg-[#1f1f23] border-gray-700"
        >
          <Image
            src={PRC}
            alt="PRC Project"
            className="rounded-t-lg aspect-4/3 object-cover"
            priority
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Philippine Red Cross Notifier
            </h5>
            <p className="mb-3 font-normal text-gray-400">
              Java mobile app for PRC members to receive notifications of latest
              news and announcements.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="800"
          data-aos-once="true"
          className="max-w-xs rounded-lg shadow-sm bg-[#1f1f23] border-gray-700"
        >
          <Image
            src={ETL}
            alt="ETL Project"
            className="rounded-t-lg aspect-4/3 object-cover"
            priority
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Extend the Life
            </h5>
            <p className="mb-3 font-normal text-gray-400">
              Java mobile app powered by Google Maps API for requesting and
              notifying blood donors near you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

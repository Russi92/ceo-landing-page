


"use client";

import { useEffect } from "react";
import Image from "next/image";
// import DarkVeil from "../../../../back/DarkVeil/DarkVeil";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryButton from "@/app/components/common/PrimaryButton"


export default function Header({dict} : {dict: any}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full h-screen relative" id="home" data-aos="flip-right">
      {/* <DarkVeil /> */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center px-4">
        <div
          className="text-secondary text-center flex flex-col justify-center items-center gap-6 sm:gap-7"
          data-aos="zoom-in"
        >
          <Image
            src="/images/c.png"
            alt="logo"
            width={100}
            height={100}
          />

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
          {dict.hero_title} 
          </h1>


          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl">
          {dict.hero_subtitle} 
          </h3>


          <PrimaryButton >{dict.hero_button}</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

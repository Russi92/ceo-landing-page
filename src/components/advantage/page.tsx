
"use client";

import Image from "next/image";
import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import { useParams } from "next/navigation";

export default function Services({ dict }: { dict: any }) {
  const services = [
    {
      id: 1,
      image: "/images/invoice.webp",
      title: "Advantage From Our App",
    },
    {
      id: 2,
      image: "/images/invoice.webp",
      title: "Advantage From Our App",
    },
    {
      id: 3,
      image: "/images/invoice.webp",
      title: "Advantage From Our App",
    },
    {
      id: 4,
      image: "/images/invoice.webp",
      title: "Advantage From Our App",
    },
  ];

  const { lang } = useParams() as { lang?: string };
  const isArabic = lang === "ar";
  
  return (
    <section id="services" className="grid grid-cols-1 gap-40 mt-10">
      {services.map((service) => (
        <div
          key={service.id}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-20 px-20"
        >
          {service.id % 2 !== 0 ? (
            <>
              <div className="flex flex-col justify-center gap-5">
                <h3 className="text-primary text-5xl">
                {isArabic ? dict.advantage_title_ar : dict.advantage_title}
                </h3>
                <p className="text-2xl">{isArabic ? dict.advantage_text_ar : dict.advantage_text}</p>
                <PrimaryButton>{isArabic ? dict.advantage_button_more_ar : dict.advantage_button_more}</PrimaryButton>
              </div>
              <div className="relative w-fit h-fit mx-auto">
                <Image
                  src={'/images/circles.webp'}
                  alt="Circles"
                  width={500}
                  height={500}
                  className="object-contain animate-pulse"
                />
             <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={service.image}
                  alt="CEO Logo"
                  width={450}
      height={450}
                  
                  className="object-contain"
                />
                </div>

              </div>
            </>
          ) : (
            <>
              <div className="relative h-[500px] md:min-h-[600px]">
                <Image
                  src={'/images/circles.webp'}
                  alt="Circles"
                  width={400}
                  height={400}
                  className="object-fill absolute top-0 left-0 w-full min-h-[600px] animate-pulse"
                />
                <Image
                  src={service.image}
                  alt="CEO Logo"
                  fill
                  className="object-fill"
                />
              </div>
              <div className="flex flex-col justify-center gap-5">
                <h3 className="text-primary text-5xl">
                {isArabic ? dict.advantage_title_ar : dict.advantage_title}
                </h3>
                <p className="text-2xl">{isArabic ? dict.advantage_text_ar : dict.advantage_text}</p>
                <PrimaryButton>{isArabic ? dict.advantage_button_more_ar : dict.advantage_button_more}</PrimaryButton>
              </div>
            </>
          )}
        </div>
      ))}

      {services.map((service) => (
        <div
          key={service.id}
          className="grid md:hidden grid-cols-1 md:grid-cols-2 gap-20 px-20"
        >
          <>
            <div className="flex flex-col justify-center gap-5">
              <h3 className="text-primary text-5xl">
              {isArabic ? dict.advantage_title_ar : dict.advantage_title}
              </h3>
              <p className="text-2xl">{isArabic ? dict.advantage_text_ar : dict.advantage_text}</p>
              <PrimaryButton>{isArabic ? dict.advantage_button_more_ar : dict.advantage_button_more}</PrimaryButton>
            </div>
            <div className="relative h-[500px] md:min-h-[600px]">
              <Image
                src={'/images/circles.webp'}
                alt="Circles"
                width={400}
                height={400}
                className="object-fill absolute top-0 left-0 w-full min-h-[600px] animate-pulse "
              />

              <Image
                src={service.image}
                alt="CEO Logo"
                fill
                className="object-fill"
              />
            </div>
          </>
        </div>
      ))}
    </section>
  );
}

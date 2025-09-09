
"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// استيراد ملفات الـ CSS الخاصة بـ Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Partners({
  dict,
  title,
}: {
  dict: any;
  title: string;
}) {
  const { lang } = useParams() as { lang?: string };
  const isArabic = lang === "ar";
  const swiperRef = useRef<SwiperType | null>(null);

  const partners = [
    {
      name: "Saudi3",
      url: "/images/team/sharidah.png",
      title: "Mr.Sahridah Nafea",
      position: "CEO & Founder",
    },
    {
      name: "Saudi3",
      url: "/images/team/sharidah.png",
      title: "Mr.Sahridah Nafea",
      position: "CEO & Founder",
    },
    {
      name: "Saudi3",
      url: "/images/team/sharidah.png",
      title: "Mr.Sahridah Nafea",
      position: "CEO & Founder",
    },
    {
      name: "Saudi3",
      url: "/images/team/sharidah.png",
      title: "Mr.Sahridah Nafea",
      position: "CEO & Founder",
    },
    {
      name: "Saudi3",
      url: "/images/team/sharidah.png",
      title: "Mr.Sahridah Nafea",
      position: "CEO & Founder",
    },
    {
      name: "Saudi3",
      url: "/images/team/sharidah.png",
      title: "Mr.Sahridah Nafea",
      position: "CEO & Founder",
    },
  ];

  return (
    <section className="mt-5" dir="ltr">
      <h3 className="text-center text-xl sm:text-3xl md:text-4xl text-gray-500 mb-10 font-bold">
        {title}
      </h3>

      <div className="relative w-full max-w-7xl mx-auto px-10">
        <Swiper
          modules={[Navigation, Mousewheel, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
          className="w-full"
        >
          {partners.map((p, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col items-center p-6 rounded-2xl shadow-md bg-[#f1daa5]
                                            w-full max-w-[240px] h-64 mx-auto
                                            transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
              >
                <div
                  className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden 
                                                flex items-center justify-center border-4 border-white shadow-sm mb-4"
                >
                  <Image
                    src={p.url}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-gray-900 text-sm text-center mb-1">
                  {p.title}
                </h4>
                <p className="text-gray-600 text-sm text-center">
                  {p.position}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={`absolute top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition cursor-pointer font-bold
          left-2 sm:left-4 md:-left-12
          bg-[#f1daa5] text-black rounded-full shadow-md`}
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={`absolute top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition cursor-pointer font-bold
          right-2 sm:right-4 md:-right-12
          bg-[#f1daa5] text-black rounded-full shadow-md`}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

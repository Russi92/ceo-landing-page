"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
// import PrimaryButton from "../../components/common/PrimaryButton";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Link from "next/link";

export default function Services({ dict }: { dict: any }) {
  const [showGrid, setShowGrid] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const cards = [
    {
      id: 1,
      image: "/images/invoice.webp",
      title: "Card Title 1",
    },
    {
      id: 2,
      image: "/images/invoice.webp",
      title: "Card Title 2",
    },
    {
      id: 3,
      image: "/images/invoice.webp",
      title: "Card Title 3",
    },
    {
      id: 4,
      image: "/images/invoice.webp",
      title: "Card Title 4",
    },
    {
      id: 5,
      image: "/images/invoice.webp",
      title: "Card Title 5",
    },
    {
      id: 6,
      image: "/images/invoice.webp",
      title: "Card Title 6",
    },
  ];

  const { lang } = useParams() as { lang?: string };
  const isArabic = lang === "ar";

  return (
    <section id="services" className="grid grid-cols-1 gap-10 mt-10">
      <h1 className="text-3xl font-bold text-center sm:text-5xl md:text-6xl text-primary">
        {isArabic ? dict.services_title_ar : dict.services_title}
      </h1>

      <p className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto px-4 leading-relaxed">
        {isArabic ? dict.services_description_ar : dict.services_description}
      </p>

      {!showGrid && (
        <div className="relative w-full max-w-6xl mx-auto px-10">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="shadow-md rounded-lg overflow-hidden p-4 flex flex-col items-center text-center bg-[#f1daa5] h-[480px]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover rounded-md"
                  />

                  <h3 className="text-lg font-bold mt-4 text-gray-500">
                    {isArabic
                      ? dict.services_cards_title_ar[card.id - 1]
                      : dict.services_cards_title[card.id - 1]}
                  </h3>

                  <ul
                    className={`list-disc list-inside text-gray-500 mt-3 space-y-1 text-sm sm:text-base w-full
              overflow-y-auto max-h-[20rem] pr-2 custom-scrollbar ${
                isArabic ? "text-right" : "text-left"
              }`}
                  >
                    {isArabic
                      ? dict.services_dot_ar.map(
                          (desc: string, index: number) => (
                            <li key={index}>{desc}</li>
                          )
                        )
                      : dict.services_dots.map(
                          (desc: string, index: number) => (
                            <li key={index}>{desc}</li>
                          )
                        )}
                  </ul>

                  <Link href="#" className="text-gray-500 border border-gray-400 font-bold px-4 py-2 rounded-lg mt-auto 
                        hover:bg-primary hover:text-black transition duration-300">
                    {isArabic ? dict.services_button_ar : dict.services_button}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`absolute top-1/2 transform -translate-y-1/2 z-10 text-black rounded-full w-12 h-12 flex items-center justify-center transition cursor-pointer font-bold ${
              isArabic
                ? "right-2 sm:right-4 md:-right-12"
                : "left-2 sm:left-4 md:-left-12"
            }`}
          >
            {"<"}
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`absolute top-1/2 transform -translate-y-1/2 z-10 text-black rounded-full w-12 h-12 flex items-center justify-center transition cursor-pointer font-bold ${
              isArabic
                ? "left-2 sm:left-4 md:-left-12"
                : "right-2 sm:right-4 md:-right-12"
            }`}
          >
            {">"}
          </button>
        </div>
      )}

      {showGrid && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              className="shadow-md rounded-lg overflow-hidden p-4 flex flex-col items-center text-center bg-[#f1daa5] h-[480px]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-md"
              />

              <h3 className="text-lg font-bold mt-4 text-gray-500">
                {isArabic
                  ? dict.services_cards_title_ar[card.id - 1]
                  : dict.services_cards_title[card.id - 1]}
              </h3>

              <ul
                className={`list-disc list-inside text-gray-500 mt-3 space-y-1 text-sm sm:text-base w-full
              overflow-y-auto max-h-[20rem] pr-2 custom-scrollbar ${
                isArabic ? "text-right" : "text-left"
              }`}
              >
                {isArabic
                  ? dict.services_dot_ar.map((desc: string, index: number) => (
                      <li key={index}>{desc}</li>
                    ))
                  : dict.services_dots.map((desc: string, index: number) => (
                      <li key={index}>{desc}</li>
                    ))}
              </ul>

              <a href="/advantage/service-details" className="text-black border
              hover:bg-primary hover:text-black border-gray-400 px-4 py-2 rounded-lg mt-auto">
                {isArabic ? dict.services_button_ar : dict.services_button}
              </a>
            </div>
          ))}
        </div>
      )}

      <div className="text-center">
        <button
          onClick={() => setShowGrid((prev) => !prev)}
          className="text-gray-500 font-bold underline text-lg"
        >
          {showGrid
            ? isArabic
              ? dict.services_show_slider_button_ar
              : dict.services_show_slider_button
            : isArabic
            ? dict.services_more_button_ar
            : dict.services_more_button}
        </button>
      </div>
    </section>
  );
}

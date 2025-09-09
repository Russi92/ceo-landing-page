// "use client";

// import Image from 'next/image'
// import React from 'react'
// // import ceo from "../../../public/images/c.png";
// import { useParams } from "next/navigation";


// export default function Partners({ dict }: { dict: any }) {

//     const { lang } = useParams() as { lang?: string };
//     const isArabic = lang === "ar";
    
//     const partners = [
//         {
//             name : "alrajhi2",
//             url : "https://www.alrajhibank.com.sa/"
//         },
//         {
//             name : "digital2",
//             url : "https://dga.gov.sa/ar"
//         },
//         {
//             name : "digital3",
//             url : ""
//         },
//         {
//             name : "nafath",
//             url : "https://www.iam.gov.sa/authservice/userauthservice?lang=ar"
//         },
//         {
//             name : "national2",
//             url : "https://nca.gov.sa/ar/"
//         },
//         {
//             name : "Saudi3",
//             url : "https://www.saip.gov.sa/ar/"
//         },
//         {
//             name : "saudi1",
//             url : "https://business.sa/"
//         },
//         {
//             name : "digital3",
//             url : "https://www.mcit.gov.sa/"
//         },
//     ]


//     return (
//         <section className='mb-10' dir='ltr'>
//             {/* <Image src={ceo} alt='logo' className='m-auto mb-5' width={85}/> */}
//             <h3 className='text-center text-5xl text-gray-500 font-bold mb-10'>{isArabic ? dict.partners_title_ar : dict.partners_title}</h3>
//             <div className="relative max-w-full overflow-hidden">
//                 {/* Left gradient fade */}
//                 <div className="absolute top-0 left-0 h-full w-[5%] z-10"></div>
//                 {/* Right gradient fade */}
//                 <div className="absolute top-0 right-0 h-full w-[5%] z-10"></div>

//                 {/* Scrolling wrapper */}
//                 <div className="flex w-max animate-scroll gap-40 p-6 pause-on-hover">
//                     {partners.concat(partners).map((p, index) => (
//                         <a className='flex' key={index} 
//                         href={p.url} 
//                         target="_blank" 
//                         rel="noopener noreferrer">
//                             <Image
//                                 key={index}
//                                 src={`/images/partners/${p.name}.svg`}
//                                 alt={p.name}
//                                 width={100}
//                                 height={100}
//                                 className="object-contain cursor-pointer"
//                             />
//                         </a>
//                         ))}
//                 </div>
//             </div>

//         </section>
//     )
// }


"use client";

import Image from 'next/image'
import React, { useRef } from 'react'
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";




export default function Partners({ dict }: { dict: any }) {

    const { lang } = useParams() as { lang?: string };
    const isArabic = lang === "ar";
    const swiperRef = useRef<SwiperType | null>(null);

    const partners = [
        {
            name : "alrajhi2",
            url : "https://www.alrajhibank.com.sa/",
            imgSrc: "/images/partners/alrajhi2.svg"
        },
        {
            name : "digital2",
            url : "https://dga.gov.sa/ar",
            imgSrc: "/images/partners/digital2.svg"
        },
        {
            name : "digital3",
            url : "",
            imgSrc: "/images/partners/digital3.svg"
        },
        {
            name : "nafath",
            url : "https://www.iam.gov.sa/authservice/userauthservice?lang=ar",
            imgSrc: "/images/partners/nafath.svg"
        },
        {
            name : "national2",
            url : "https://nca.gov.sa/ar/",
            imgSrc: "/images/partners/national2.svg"
        },
        {
            name : "Saudi3",
            url : "https://www.saip.gov.sa/ar/",
            imgSrc: "/images/partners/Saudi3.svg"
        },
        {
            name : "saudi1",
            url : "https://business.sa/",
            imgSrc: "/images/partners/saudi1.svg"
        },

    ]


    return (
        <section className='mb-10' dir='ltr'>
            <h3 className='text-center text-xl sm:text-3xl md:text-4xl text-gray-500 font-bold mb-10'>{isArabic ? dict.partners_title_ar : dict.partners_title}</h3>
            
            <div className="relative w-full max-w-7xl mx-auto px-10">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    loop={true}
                    spaceBetween={40}
                    slidesPerView={2}
                    grabCursor={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 3, spaceBetween: 20 },
                        768: { slidesPerView: 4, spaceBetween: 20 },
                        1024: { slidesPerView: 5, spaceBetween: 40 },
                    }}
                    className="w-full "
                >
                    {partners.map((p, index) => (
                        <SwiperSlide key={index}>
                            <a className='flex' href={p.url} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={p.imgSrc}
                                    alt={p.name}
                                    width={100}
                                    height={100}
                                    className="cursor-pointer mx-auto bg-[#f1daa5] rounded-xl p-1 flex h-[80px] w-[200px]
                                    transition-all duration-300 ease-in-out transform hover:-translate-x-1 hover:scale-105 hover:shadow-md"
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
               
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition cursor-pointer font-bold
                            left-2 sm:left-4 md:-left-12
                            bg-[#f1daa5] text-black rounded-full shadow-md"
                >
                <FaChevronLeft />
                </button>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition cursor-pointer font-bold
                                right-2 sm:right-4 md:-right-12
                                bg-[#f1daa5] text-black rounded-full shadow-md"
                >
                    <FaChevronRight />
                </button>
                    
            </div>
        </section>
    )
}
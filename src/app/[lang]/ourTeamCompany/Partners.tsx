




// "use client";

// import Image from 'next/image'
// import React from 'react'
// import { useParams } from "next/navigation";


// export default function Partners({ dict, title }: { dict: any , title: string}) {

//     const { lang } = useParams() as { lang?: string };
//     const isArabic = lang === "ar";
    

//     const partners = [
//         {
//             name: "Saudi3",
//             url: "/images/team/russi.jpeg",
//             title: "Mohamed hassan",
//             position: "FrontEnd Developer"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/team/darsh.jpeg",
//             title: "Mustafa Gamel",
//             position: "BackEnd Developer"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/team/abdelrahman.png",
//             title: "Abdulrahman Ahmed",
//             position: "Full Stack Developer"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/c.png",
//             title: "Ahmed Ismael",
//             position: "Full Stack Developer"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/team/ahmed.jpeg",
//             title: "Ahmed Mohamed",
//             position: "BackEnd Developer"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/c.png",
//             title: "Mohamed Ayman",
//             position: "FrontEnd Developer"
//         },
//     ]


//     return (
//         <section className='mb-10 ' dir='ltr' id='team'>

//             <h3 className='text-center text-5xl text-primary mb-10'>
//                {title}
//             </h3>
            
//             <div className="relative max-w-full overflow-hidden">
//                 {/* Left gradient fade */}
//                 <div className="absolute top-0 left-0 h-full w-[5%] bg-gradient-to-r to-transparent z-10"></div>
//                 {/* Right gradient fade */}
//                 <div className="absolute top-0 right-0 h-full w-[5%] bg-gradient-to-l to-transparent z-10"></div>

//                 {/* Scrolling wrapper */}
//                 <div className="flex w-max animate-scroll-tools gap-16 md:gap-24 lg:gap-40 p-6 pause-on-hover-ceo-team">
//                     {partners.concat(partners).map((p , index) => (
//                      <div 
//                      className='flex flex-col items-center p-6 rounded-2xl shadow-md bg-[#f1daa5]
//                                 w-48 h-64 sm:w-60 sm:h-72 flex-shrink-0
//                                 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl' 
//                      key={index}
//                  >
                   
//                             <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden 
//                                             flex items-center justify-center border-4 border-white shadow-sm mb-4">
//                                 <Image
//                                     src={p.url}
//                                     alt={p.name}
//                                     fill
//                                     className="object-cover"
//                                 />
//                             </div>
//                             <div className='text-gray-900 text-sm text-center mb-1'>
//                                 {p.title}
//                             </div>
//                             <p className='text-gray-600 text-sm text-center'>
//                                 {p.position}
//                             </p>
                        
//                     </div>
//                     ))}
//                 </div>
                    
//             </div>

//         </section>
//     )
// }


// "use client";

// import Image from 'next/image'
// import React, { useRef } from 'react'
// import { useParams } from "next/navigation";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Mousewheel } from 'swiper/modules';
// import type { Swiper as SwiperType } from 'swiper';

// // استيراد ملفات الـ CSS الخاصة بـ Swiper
// import 'swiper/css';
// import 'swiper/css/navigation';

// export default function Partners({ dict, title }: { dict: any , title: string}) {

//     const { lang } = useParams() as { lang?: string };
//     const isArabic = lang === "ar";
//     const swiperRef = useRef<SwiperType | null>(null);

//     const partners = [
//         {
//             name: "Saudi3",
//             url: "/images/team/russi.jpeg",
//             title: "Mohamed hassan",
//             position: "FrontEnd Developer"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/team/darsh.jpeg",
//             title: "Mustafa Gamel",
//             position: "BackEnd Developer"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/team/abdelrahman.png",
//             title: "Abdulrahman Ahmed",
//             position: "Full Stack Developer"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/c.png",
//             title: "Ahmed Ismael",
//             position: "Full Stack Developer"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/team/ahmed.jpeg",
//             title: "Ahmed Mohamed",
//             position: "BackEnd Developer"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/c.png",
//             title: "Mohamed Ayman",
//             position: "FrontEnd Developer"
//         },
//     ]


//     return (
//         <section className='mb-10 ' dir='ltr' id='team'>

//             <h3 className='text-center text-5xl text-primary mb-10'>
//                {title}
//             </h3>
            
//             <div className="relative w-full max-w-6xl mx-auto px-10">
                
//                 <Swiper
//                     modules={[Navigation, Mousewheel]}
//                     onSwiper={(swiper) => (swiperRef.current = swiper)}
//                     loop={true}
//                     spaceBetween={40}
//                     slidesPerView={1}
//                     grabCursor={true}
//                     breakpoints={{
//                         640: { slidesPerView: 2, spaceBetween: 20 },
//                         768: { slidesPerView: 3, spaceBetween: 20 },
//                         1024: { slidesPerView: 4, spaceBetween: 40 },
//                     }}
//                     className="w-full"
//                 >
//                     {partners.map((p , index) => (
//                         <SwiperSlide key={index} className='animate-scroll-tools pause-on-hover-ceo-team'>
//                             <div 
//                                 className='flex flex-col items-center p-6 rounded-2xl shadow-md bg-white
//                                             w-48 h-64 sm:w-60 sm:h-72 flex-shrink-0' 
//                             >
//                                 <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden 
//                                                 flex items-center justify-center border-4 border-white shadow-sm mb-4">
//                                     <Image
//                                         src={p.url}
//                                         alt={p.name}
//                                         fill
//                                         className="object-cover"
//                                     />
//                                 </div>
//                                 <h4 className='text-gray-900 font-extrabold text-xl sm:text-2xl text-center mb-1'>
//                                     {p.title}
//                                 </h4>
//                                 <p className='text-gray-600 text-sm sm:text-base text-center'>
//                                     {p.position}
//                                 </p>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
                
//                 {/* أزرار التنقل خارج حاوية الـ Swiper */}
//                 <button
//                     onClick={() => swiperRef.current?.slidePrev()}
//                     className={`absolute top-1/2 transform -translate-y-1/2 z-10 text-black rounded-full w-12 h-12 flex items-center justify-center transition cursor-pointer font-bold ${
//                         isArabic
//                             ? "right-2 sm:right-4 md:-right-12"
//                             : "left-2 sm:left-4 md:-left-12"
//                     }`}
//                 >
//                     {"<"}
//                 </button>

//                 <button
//                     onClick={() => swiperRef.current?.slideNext()}
//                     className={`absolute top-1/2 transform -translate-y-1/2 z-10 text-black rounded-full w-12 h-12 flex items-center justify-center transition cursor-pointer font-bold ${
//                         isArabic
//                             ? "left-2 sm:left-4 md:-left-12"
//                             : "right-2 sm:right-4 md:-right-12"
//                     }`}
//                 >
//                     {">"}
//                 </button>
                    
//             </div>

//         </section>
//     )
// }



"use client";

import Image from 'next/image'
import React, { useRef } from 'react'
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// استيراد ملفات الـ CSS الخاصة بـ Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // يفضل استيرادها

export default function Partners({ dict, title }: { dict: any , title: string}) {

    const { lang } = useParams() as { lang?: string };
    const isArabic = lang === "ar";
    const swiperRef = useRef<SwiperType | null>(null);

    const partners = [
        {
            name: "Saudi3",
            url: "/images/team/russi.jpeg",
            title: "Mohamed hassan",
            position: "FrontEnd Developer"
        },
        {
            name: "Saudi3",
            url: "/images/team/darsh.jpeg",
            title: "Mustafa Gamel",
            position: "BackEnd Developer"
        },
        {
            name: "Saudi3",
            url: "/images/team/abdelrahman.png",
            title: "Abdulrahman Ahmed",
            position: "Full Stack Developer"
        },
        {
            name: "Saudi3",
            url: "/images/c.png",
            title: "Ahmed Ismael",
            position: "Full Stack Developer"
        },
        {
            name: "Saudi3",
            url: "/images/team/ahmed.jpeg",
            title: "Ahmed Mohamed",
            position: "BackEnd Developer"
        },
        {
            name: "Saudi3",
            url: "/images/c.png",
            title: "Mohamed Ayman",
            position: "FrontEnd Developer"
        },
    ]


    return (
        <section className='mb-10 ' dir='ltr' id='team'>

            <h3 className='text-center text-5xl text-primary mb-10'>
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
                centeredSlides={true}   // ✅ الكروت تبقى في النص
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: true,
                }}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20, centeredSlides: true },
                    768: { slidesPerView: 3, spaceBetween: 20, centeredSlides: true },
                    1024: { slidesPerView: 4, spaceBetween: 40, centeredSlides: false }, // ممكن تخليها false عشان الكبير يكون عادي
                }}
                className="w-full"
            >
                    {partners.map((p , index) => (
                        <SwiperSlide key={index}>
                            <div 
                                className='flex flex-col items-center p-6 rounded-2xl shadow-md bg-[#f1daa5]
                                            w-48 sm:w-60 sm:h-72 flex-shrink-0
                                            transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl' 
                            >
                                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden 
                                                flex items-center justify-center border-4 border-white shadow-sm mb-4">
                                    <Image
                                        src={p.url}
                                        alt={p.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h4 className='text-gray-900 text-sm sm:text-sm text-center mb-1'>
                                    {p.title}
                                </h4>
                                <p className='text-gray-600 text-sm sm:text-base text-center'>
                                    {p.position}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                {/* أزرار التنقل خارج حاوية الـ Swiper */}
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

        </section>
    )
}
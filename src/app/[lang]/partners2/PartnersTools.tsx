// "use client";

// import Image from 'next/image'
// import React from 'react'



// export default function PartnersTools() {



//     const partners = [
//         {
//             name : '1password',
//             url : 'https://1password.com/'
//         },
//         {
//             name : 'tailwind',
//             url : 'https://tailwindcss.com/'
//         },
//         {
//             name : 'react',
//             url : 'https://react.dev/'
//         },
//         {
//             name : 'next',
//             url : 'https://nextjs.org/'
//         },
//         {
//             name : 'adobe',
//             url : 'https://www.adobe.com/'
//         },
//         {
//             name : 'airtable',
//             url : 'https://www.airtable.com/'
//         },
//         {
//             name : 'apple',
//             url : 'https://www.apple.com/store'
//         },
//         {
//             name : 'bootstrap5',
//             url : 'https://getbootstrap.com/'
//         },
//         {
//             name : 'css3',
//             url : ''
//         },
//         {
//             name : 'dnet',
//             url : 'https://dnet.sa/'
//         },
//         {
//             name : 'figma',
//             url : 'https://www.figma.com/login'
//         },
//         {
//             name : 'google',
//             url : 'https://www.google.com/'
//         },
//         {
//             name : 'html5',
//             url : 'https://html5up.net/'
//         },
//         {
//             name : 'hyperpay',
//             url : 'https://www.hyperpay.com/'
//         },
//         {
//             name : 'jquery',
//             url : 'https://jquery.com/'
//         },
//         {
//             name : 'laravel-2',
//             url : 'https://laravel.com/'
//         },
//         {
//             name : 'make',
//             url : 'https://www.make.com/en'
//         },
//         {
//             name : 'mysql',
//             url : 'https://www.mysql.com/'
//         },
//         {
//             name : 'namecheap',
//             url : 'https://www.namecheap.com/'
//         },
//         {
//             name : 'php',
//             url : 'https://www.php.net/'
//         },
//         {
//             name : 'voucherify',
//             url : 'https://www.voucherify.io/'
//         }
//     ]

//     return (
//         <section className='mb-10' dir='ltr'>
           
//             <div className="relative max-w-full overflow-hidden">
//                 {/* Left gradient fade */}
//                 <div className="absolute top-0 left-0 h-full w-[5%] z-10"></div>
//                 {/* Right gradient fade */}
//                 <div className="absolute top-0 right-0 h-full w-[5%] z-10"></div>

//                 {/* Scrolling wrapper */}
//                 <div className="flex w-max animate-scroll-tools gap-40 p-6 pause-on-hover">
                
//                     {partners.concat(partners).map((p, index) => (
//                     <a className='flex' key={index} 
//                     href={p.url} 
//                     target="_blank" 
//                     rel="noopener noreferrer">
                       
                            
//                         <Image
//                             key={index}
//                             src={`/images/tools-partners/${p.name}.svg`}
//                             alt={p.name}
//                             width={50}
//                             height={50}
//                             className="object-contain"
//                             />
                      
//                     </a>
//                             ))}
//                 </div>
//             </div>

//         </section>
//     )
// }

"use client";

import Image from 'next/image'
import React, { useRef } from 'react';
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function PartnersTools({ dict }: { dict: any }) {

    const { lang } = useParams() as { lang?: string };
    const isArabic = lang === "ar";


    const swiperRef = useRef<SwiperType | null>(null);

    const partners = [
        {
            name : '1password',
            url : 'https://1password.com/'
        },
        {
            name : 'tailwind',
            url : 'https://tailwindcss.com/'
        },
        {
            name : 'react',
            url : 'https://react.dev/'
        },
        {
            name : 'next',
            url : 'https://nextjs.org/'
        },
        {
            name : 'adobe',
            url : 'https://www.adobe.com/'
        },
        {
            name : 'airtable',
            url : 'https://www.airtable.com/'
        },
        {
            name : 'apple',
            url : 'https://www.apple.com/store'
        },
        {
            name : 'bootstrap5',
            url : 'https://getbootstrap.com/'
        },
        {
            name : 'css3',
            url : ''
        },
        {
            name : 'dnet',
            url : 'https://dnet.sa/'
        },
        {
            name : 'figma',
            url : 'https://www.figma.com/login'
        },
        {
            name : 'google',
            url : 'https://www.google.com/'
        },
        {
            name : 'html5',
            url : 'https://html5up.net/'
        },
        {
            name : 'hyperpay',
            url : 'https://www.hyperpay.com/'
        },
        {
            name : 'jquery',
            url : 'https://jquery.com/'
        },
        {
            name : 'laravel-2',
            url : 'https://laravel.com/'
        },
        {
            name : 'make',
            url : 'https://www.make.com/en'
        },
        {
            name : 'mysql',
            url : 'https://www.mysql.com/'
        },
        {
            name : 'namecheap',
            url : 'https://www.namecheap.com/'
        },
        {
            name : 'php',
            url : 'https://www.php.net/'
        },
        {
            name : 'voucherify',
            url : 'https://www.voucherify.io/'
        }
    ]

    return (
        <section className='mb-10' dir='ltr'>
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
                        reverseDirection: true,
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
                            <a className='flex justify-center items-center h-full' 
                                href={p.url} 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <Image
                                    src={`/images/tools-partners/${p.name}.svg`}
                                    alt={p.name}
                                    width={50}
                                    height={50}
                                    className="object-contain
                                    flex h-[80px] w-[100px] bg-[#f1daa5] rounded-xl p-2
                                    transition-all duration-300 ease-in-out transform hover:-translate-x-1 hover:scale-105 hover:shadow-md"
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                {/* أزرار التنقل */}
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
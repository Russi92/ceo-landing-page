

"use client";

import Image from 'next/image'
import React from 'react'
import { useParams } from "next/navigation";


export default function Partners({ dict, title }: { dict: any , title: string}) {

    const { lang } = useParams() as { lang?: string };
    const isArabic = lang === "ar";
    

    const partners = [
        {
            name: "Saudi3",
            url: "/images/team/sharidah.png",
            title: "Mr.Sahridah Nafea",
            position: "CEO & Founder"
        },
        {
            name: "Saudi3",
            url: "/images/team/sharidah.png",
            title: "Mr.Sahridah Nafea",
            position: "CEO & Founder"
        },
        {
            name: "Saudi3",
            url: "/images/team/sharidah.png",
            title: "Mr.Sahridah Nafea",
            position: "CEO & Founder"
        },
        {
            name: "Saudi3",
            url: "/images/team/sharidah.png",
            title: "Mr.Sahridah Nafea",
            position: "CEO & Founder"
        },
        {
            name: "Saudi3",
            url: "/images/team/sharidah.png",
            title: "Mr.Sahridah Nafea",
            position: "CEO & Founder"
        },
        {
            name: "Saudi3",
            url: "/images/team/sharidah.png",
            title: "Mr.Sahridah Nafea",
            position: "CEO & Founder"
        },
    ]


    return (
        <section className='mt-5' dir='ltr'>

            <h3 className='text-center text-5xl text-gray-500 mb-10 font-bold'>
               {title}
            </h3>
            
            <div className="relative max-w-full overflow-hidden">
                {/* Left gradient fade */}
                <div className="absolute top-0 left-0 h-full w-[5%] z-10"></div>
                {/* Right gradient fade */}
                <div className="absolute top-0 right-0 h-full w-[5%] z-10"></div>

                {/* Scrolling wrapper */}
                <div className="flex w-max animate-scroll gap-16 md:gap-24 lg:gap-40 p-6 pause-on-hover-ceo-team">
                    {partners.concat(partners).map((p , index) => (
                     <div 
                     className='flex flex-col items-center justify-center p-4 rounded-lg w-48 h-48 sm:w-60 sm:h-60 flex-shrink-0 border-card' 
                     key={index}
                 >
                   
                            <Image
                                src={p.url}
                                alt={p.name}
                                width={100}
                                height={100}
                                className="object-contain mb-2 rounded-2xl w-24 h-24 sm:w-28 sm:h-28"
                            />
                            <h4 className='text-gray-500 font-bold text-base sm:text-lg text-center'>
                                {p.title}
                            </h4>
                            <p className='text-black text-xs sm:text-sm text-center'>
                                {p.position}
                            </p>
                        
                    </div>
                    ))}
                </div>
                    
            </div>

        </section>
    )
}
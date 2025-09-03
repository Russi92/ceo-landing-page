


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
        <section className='mb-10 mt-20' dir='ltr' id='team'>

            <h3 className='text-center text-5xl text-primary mb-10'>
               {title}
            </h3>
            
            <div className="relative max-w-full overflow-hidden">
                {/* Left gradient fade */}
                <div className="absolute top-0 left-0 h-full w-[5%] z-10"></div>
                {/* Right gradient fade */}
                <div className="absolute top-0 right-0 h-full w-[5%] z-10"></div>

                {/* Scrolling wrapper */}
                <div className="flex w-max animate-scroll-tools gap-40 p-6 pause-on-hover-ceo-team">
                    {partners.concat(partners).map((p , index) => (
                     <div 
                     className='flex flex-col items-center justify-center p-4 rounded-lg w-60 h-60 flex-shrink-0 border-card' 
                     key={index}
                 >
                   
                            <Image
                                src={p.url}
                                alt={p.name}
                                width={100}
                                height={100}
                                className="object-contain mb-2 rounded-2xl"
                            />
                            <h4 className='text-gray-500 font-bold text-lg text-center'>
                                {p.title}
                            </h4>
                            <p className='text-black text-sm text-center'>
                                {p.position}
                            </p>
                        
                    </div>
                    ))}
                </div>
                    
            </div>

        </section>
    )
}
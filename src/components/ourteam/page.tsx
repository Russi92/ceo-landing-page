
"use client";

import Image from 'next/image'
import React from 'react'
import { useParams } from "next/navigation";


export default function Partners({ dict, title }: { dict: any , title: string}) {

    const { lang } = useParams() as { lang?: string };
    const isArabic = lang === "ar";
    

    const partners = [
        {
            name: "alrajhi2",
            url: "/images/c.png",
            title: "Mohamed hassan",
            position: "FrontEnd Developer"
        },
        {
            name: "digital2",
            url: "/images/c.png",
            title: "Mustafa Gameel",
            position: "BackEnd"
        },
        {
            name: "digital3",
            url: "/images/c.png",
            title: "Abdulrahman Saad",
            position: "Full Stack Developer"
        },
        {
            name: "nafath",
            url: "/images/c.png",
            title: "Ahmed Ismael",
            position: "Full Stack Developer"
        },
        {
            name: "national2",
            url: "/images/c.png",
            title: "Ahmed Abdelmoeen",
            position: "Security Partner"
        },
        {
            name: "Saudi3",
            url: "/images/c.png",
            title: "Mr.Sahridah Nafea",
            position: "IP Partner"
        },
        {
            name: "saudi1",
            url: "/images/c.png",
            title: "Mr.Sahridah Nafea",
            position: "Business Services"
        },
        {
            name: "digital3",
            url: "/images/c.png",
            title: "Mr.Sahridah Nafea",
            position: "Technology Partner"
        },
    ]


    return (
        <section className='mb-10 mt-20'>

            <h3 className='text-center text-5xl text-primary mb-10'>
               {title}
            </h3>
            
            <div className="relative max-w-full overflow-hidden">
                {/* Left gradient fade */}
                <div className="absolute top-0 left-0 h-full w-[5%] bg-gradient-to-r from-black to-transparent z-10"></div>
                {/* Right gradient fade */}
                <div className="absolute top-0 right-0 h-full w-[5%] bg-gradient-to-l from-black to-transparent z-10"></div>

                {/* Scrolling wrapper */}
                <div className="flex w-max animate-scroll gap-40 p-6 pause-on-hover">
                    {partners.concat(partners).map((p , index) => (
                     <div 
                     className='flex flex-col items-center justify-center p-4 bg-gray-800/30 rounded-lg shadow-md w-60 h-60 flex-shrink-0' 
                     key={index}
                 >
                   
                            <Image
                                src={p.url}
                                alt={p.name}
                                width={100}
                                height={100}
                                className="object-contain mb-2"
                            />
                            <h4 className='text-white font-bold text-lg text-center'>
                                {p.title}
                            </h4>
                            <p className='text-gray-400 text-sm text-center'>
                                {p.position}
                            </p>
                        
                    </div>
                    ))}
                </div>
                    
            </div>

        </section>
    )
}
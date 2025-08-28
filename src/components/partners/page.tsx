"use client";

import Image from 'next/image'
import React from 'react'
import ceo from "../../../public/images/c.png";
import { useParams } from "next/navigation";


export default function Partners({ dict }: { dict: any }) {

    const { lang } = useParams() as { lang?: string };
    const isArabic = lang === "ar";
    
    const partners = [
        {
            name : "alrajhi2",
            url : "https://www.alrajhibank.com.sa/"
        },
        {
            name : "digital2",
            url : "https://dga.gov.sa/ar"
        },
        {
            name : "digital3",
            url : ""
        },
        {
            name : "nafath",
            url : "https://www.iam.gov.sa/authservice/userauthservice?lang=ar"
        },
        {
            name : "national2",
            url : "https://nca.gov.sa/ar/"
        },
        {
            name : "Saudi3",
            url : "https://www.saip.gov.sa/ar/"
        },
        {
            name : "saudi1",
            url : "https://business.sa/"
        },
        {
            name : "digital3",
            url : "https://www.mcit.gov.sa/"
        },
    ]


    return (
        <section className='mb-10'>
            <Image src={ceo} alt='logo' className='m-auto mb-5' width={85}/>
            <h3 className='text-center text-5xl text-primary mb-10'>{isArabic ? dict.partners_title_ar : dict.partners_title}</h3>
            <div className="relative max-w-full overflow-hidden">
                {/* Left gradient fade */}
                <div className="absolute top-0 left-0 h-full w-[20%] bg-gradient-to-r from-black to-transparent z-10"></div>
                {/* Right gradient fade */}
                <div className="absolute top-0 right-0 h-full w-[20%] bg-gradient-to-l from-black to-transparent z-10"></div>

                {/* Scrolling wrapper */}
                <div className="flex w-max animate-scroll gap-40 p-6 pause-on-hover">
                    {partners.concat(partners).map((p, index) => (
                        <a className='flex' key={index} 
                        href={p.url} 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <Image
                                key={index}
                                src={`/images/partners/${p.name}.svg`}
                                alt={p.name}
                                width={100}
                                height={100}
                                className="object-contain cursor-pointer"
                            />
                        </a>
                        ))}
                </div>
            </div>

        </section>
    )
}

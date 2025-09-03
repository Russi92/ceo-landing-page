"use client";

import Image from 'next/image'
import React from 'react'



export default function PartnersTools() {



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
           
            <div className="relative max-w-full overflow-hidden">
                {/* Left gradient fade */}
                <div className="absolute top-0 left-0 h-full w-[5%] z-10"></div>
                {/* Right gradient fade */}
                <div className="absolute top-0 right-0 h-full w-[5%] z-10"></div>

                {/* Scrolling wrapper */}
                <div className="flex w-max animate-scroll-tools gap-40 p-6 pause-on-hover">
                
                    {partners.concat(partners).map((p, index) => (
                    <a className='flex' key={index} 
                    href={p.url} 
                    target="_blank" 
                    rel="noopener noreferrer">
                       
                            
                        <Image
                            key={index}
                            src={`/images/tools-partners/${p.name}.svg`}
                            alt={p.name}
                            width={50}
                            height={50}
                            className="object-contain"
                            />
                      
                    </a>
                            ))}
                </div>
            </div>

        </section>
    )
}
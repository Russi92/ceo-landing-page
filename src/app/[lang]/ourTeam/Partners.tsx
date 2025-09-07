

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
//             url: "/images/team/sharidah.png",
//             title: "Mr.Sahridah Nafea",
//             position: "CEO & Founder"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/team/sharidah.png",
//             title: "Mr.Sahridah Nafea",
//             position: "CEO & Founder"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/team/sharidah.png",
//             title: "Mr.Sahridah Nafea",
//             position: "CEO & Founder"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/team/sharidah.png",
//             title: "Mr.Sahridah Nafea",
//             position: "CEO & Founder"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/team/sharidah.png",
//             title: "Mr.Sahridah Nafea",
//             position: "CEO & Founder"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/team/sharidah.png",
//             title: "Mr.Sahridah Nafea",
//             position: "CEO & Founder"
//         },
//     ]


//     return (
//         <section className='mt-5' dir='ltr'>

//             <h3 className='text-center text-5xl text-gray-500 mb-10 font-bold'>
//                {title}
//             </h3>
            
//             <div className="relative max-w-full overflow-hidden">
//                 {/* Left gradient fade */}
//                 <div className="absolute top-0 left-0 h-full w-[5%] z-10"></div>
//                 {/* Right gradient fade */}
//                 <div className="absolute top-0 right-0 h-full w-[5%] z-10"></div>

//                 {/* Scrolling wrapper */}
//                 <div className="flex w-max animate-scroll gap-16 md:gap-24 lg:gap-40 p-6 pause-on-hover-ceo-team">
//                     {partners.concat(partners).map((p , index) => (
//                      <div 
//                      className='flex flex-col items-center justify-center p-4 rounded-lg w-48 h-48 sm:w-60 sm:h-60 flex-shrink-0 border-card' 
//                      key={index}
//                  >
                   
//                             <Image
//                                 src={p.url}
//                                 alt={p.name}
//                                 width={100}
//                                 height={100}
//                                 className="object-contain mb-2 rounded-2xl w-24 h-24 sm:w-28 sm:h-28"
//                             />
//                             <h4 className='text-gray-500 font-bold text-base sm:text-lg text-center'>
//                                 {p.title}
//                             </h4>
//                             <p className='text-black text-xs sm:text-sm text-center'>
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
// import React from 'react'
// import { useParams } from "next/navigation";


// export default function Partners({ dict, title }: { dict: any , title: string}) {

//     const { lang } = useParams() as { lang?: string };
//     const isArabic = lang === "ar";
    

//     const partners = [
//         {
//             name: "Saudi3",
//             url: "/images/team/sharidah.png",
//             title: "Mr.Sahridah Nafea",
//             position: "CEO & Founder"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/team/sharidah.png",
//             title: "Mr.Sahridah Nafea",
//             position: "CEO & Founder"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/team/sharidah.png",
//             title: "Mr.Sahridah Nafea",
//             position: "CEO & Founder"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/team/sharidah.png",
//             title: "Mr.Sahridah Nafea",
//             position: "CEO & Founder"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/team/sharidah.png",
//             title: "Mr.Sahridah Nafea",
//             position: "CEO & Founder"
//         },
//         {
//             name: "Saudi3",
//             url: "/images/team/sharidah.png",
//             title: "Mr.Sahridah Nafea",
//             position: "CEO & Founder"
//         },
//     ]


//     return (
//         <section className='mt-5' dir='ltr'>

//             <h3 className='text-center text-5xl text-gray-500 mb-10 font-bold'>
//                {title}
//             </h3>
            
//             <div className="relative max-w-full overflow-hidden">
//                 {/* Left gradient fade */}
               
//                 <div className="absolute top-0 left-0 h-full w-[5%] bg-gradient-to-r  to-transparent z-10"></div>
//                 {/* Right gradient fade */}
//                 <div className="absolute top-0 right-0 h-full w-[5%] bg-gradient-to-l  to-transparent z-10"></div>


//                 {/* Scrolling wrapper */}
//                 <div className="flex w-max animate-scroll gap-16 md:gap-24 lg:gap-40 p-6 pause-on-hover-ceo-team">
//                     {partners.concat(partners).map((p , index) => (
//                      <div 
//                      className='flex flex-col items-center p-6 rounded-2xl shadow-md bg-[#f1daa5]
//                                 w-48 h-64 sm:w-60 sm:h-72 flex-shrink-0' 
//                      key={index}
//                  >
                   
                            
//                             <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden 
//                                             flex items-center justify-center border-4 border-white shadow-sm mb-4">
//                                 <Image
//                                     src={p.url}
//                                     alt={p.name}
//                                     fill // Use fill to make image cover the div
//                                     className="object-cover" 
//                                 />
//                             </div>
                            
//                             <h4 className='text-gray-900 text-sm sm:text-2xl text-center mb-1'>
//                                 {p.title}
//                             </h4>
//                             <p className='text-gray-600 text-sm sm:text-base text-center'>
//                                 {p.position}
//                             </p>
                        
//                     </div>
//                     ))}
//                 </div>
                    
//             </div>

//         </section>
//     )
// }



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
               
                <div className="absolute top-0 left-0 h-full w-[5%] bg-gradient-to-r  to-transparent z-10"></div>
                {/* Right gradient fade */}
                <div className="absolute top-0 right-0 h-full w-[5%] bg-gradient-to-l  to-transparent z-10"></div>


                {/* Scrolling wrapper */}
                <div className="flex w-max animate-scroll gap-16 md:gap-24 lg:gap-40 p-6 pause-on-hover-ceo-team">
                    {partners.concat(partners).map((p , index) => (
                     <div 
                     className='flex flex-col items-center p-6 rounded-2xl shadow-md bg-[#f1daa5]
                                w-48 h-64 sm:w-60 sm:h-72 flex-shrink-0 
                                transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl' 
                     key={index}
                 >
                   
                            
                            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden 
                                            flex items-center justify-center border-4 border-white shadow-sm mb-4">
                                <Image
                                    src={p.url}
                                    alt={p.name}
                                    fill // Use fill to make image cover the div
                                    className="object-cover" 
                                />
                            </div>
                            
                            <h4 className='text-gray-900 text-sm text-center mb-1'>
                                {p.title}
                            </h4>
                            <p className='text-gray-600 text-sm text-center'>
                                {p.position}
                            </p>
                        
                    </div>
                    ))}
                </div>
                    
            </div>

        </section>
    )
}
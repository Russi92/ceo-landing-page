// "use client";

// import Image from "next/image";
// import React, { useState, useRef } from "react";
// // import PrimaryButton from "../../components/common/PrimaryButton";
// import { useParams } from "next/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { Swiper as SwiperType } from "swiper";
// import "swiper/css";
// import Link from "next/link";

// export default function Services({ dict }: { dict: any }) {
//   const [showGrid, setShowGrid] = useState(false);
//   const swiperRef = useRef<SwiperType | null>(null);

//   const cards = [
//     {
//       id: 1,
//       image: "/images/jobs/react.png",
//       title: "FrontEnd (React.js)",
//       description:
//         "Building user interfaces with React.js and modern web technologies.",
//       tools: [
//         "React.js, ",
//         "JavaScript (ES6+), ",
//         "HTML5/CSS3, ",
//         "Redux/Context, ",
//         "REST API, ",
//         "Git",
//       ],
//       salary: "20,000",
//       vacancies: 3,
//       startDate: "2025-09-01",
//       endDate: "2025-09-30",
//     },
//     {
//       id: 2,
//       image: "/images/jobs/next.webp",
//       title: "FrontEnd (Next.js)",
//       description:
//         "Developing full-stack web applications with Next.js and server-side rendering.",
//       tools: ["Next.js, ", "React.js, ", "SSR/SSG, ", "TypeScript, ", "SEO"],
//       salary: "20,000",
//       vacancies: 2,
//       startDate: "2025-09-01",
//       endDate: "2025-09-30",
//     },
//     {
//       id: 3,
//       image: "/images/jobs/laravel.webp",
//       title: "BackEnd (Laravel)",
//       description:
//         "Creating APIs and handling server-side logic with PHP Laravel framework.",
//       tools: [
//         "PHP, ",
//         "Laravel, ",
//         "MySQL/PostgreSQL, ",
//         "MVC, ",
//         "REST API, ",
//         "Auth",
//       ],
//       salary: "20,000",
//       vacancies: 4,
//       startDate: "2025-09-01",
//       endDate: "2025-09-30",
//     },
//     {
//       id: 4,
//       image: "/images/jobs/flutter.png",
//       title: "Mobile Developer",
//       description:
//         "Building cross-platform mobile apps for iOS and Android using Flutter.",
//       tools: [
//         "Flutter, ",
//         "Dart, ",
//         "Mobile UI/UX, ",
//         "REST API, ",
//         "Firebase, ",
//         "App Deployment",
//       ],
//       salary: "20,000",
//       vacancies: 2,
//       startDate: "2025-09-01",
//       endDate: "2025-09-30",
//     },
//     {
//       id: 5,
//       image: "/images/jobs/asp.png",
//       title: "BackEnd (ASP.NET)",
//       description:
//         "Developing enterprise-level applications and services using ASP.NET Core.",
//       tools: [
//         "C#, ",
//         "ASP.NET Core, ",
//         "SQL Server, ",
//         "Entity Framework, ",
//         "Web API, ",
//         "Azure",
//       ],
//       salary: "25,000",
//       vacancies: 1,
//       startDate: "2025-09-01",
//       endDate: "2025-09-30",
//     },
//     {
//       id: 6,
//       image: "/images/jobs/cyber.jpg",
//       title: "Cyber Security",
//       description:
//         "Protecting systems and networks from cyber threats and vulnerabilities.",
//       tools: [
//         "Network Security, ",
//         "Firewalls, ",
//         "PenTesting, ",
//         "Cryptography, ",
//         "SIEM, ",
//         "GDPR/ISO",
//       ],
//       salary: "30,000",
//       vacancies: 2,
//       startDate: "2025-09-01",
//       endDate: "2025-09-30",
//     },
//   ];

//   const { lang } = useParams() as { lang?: string };
//   const isArabic = lang === "ar";

//   return (
//     <section id="services" className="grid grid-cols-1 gap-10 mt-10">
//       <h1 className="text-3xl font-bold text-center sm:text-5xl md:text-6xl text-primary">
//         {isArabic ? dict.jobs_title_ar : dict.jobs_title}
//       </h1>

//       {!showGrid && (
//         <div className="relative w-full max-w-6xl mx-auto px-10">
//           <Swiper
//             modules={[Autoplay]}
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//             autoplay={{
//               delay: 2000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: false,
//             }}
//             loop={true}
//             spaceBetween={20}
//             slidesPerView={1}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="w-full"
//           >
//             {cards.map((card) => (
//               <SwiperSlide key={card.id}>
//                 <div className="shadow-md rounded-lg overflow-hidden p-4 flex flex-col items-center text-center bg-[#f1daa5] h-[550px]">
//                   <Image
//                     width={400}
//                     height={400}
//                     src={card.image}
//                     alt={card.title}
//                     className="w-full h-60 object-cover rounded-md"
//                   />

//                   <h3 className="text-lg font-bold mt-4 text-gray-500">
//                     {isArabic
//                       ? dict.jobs_card_title_ar[card.id - 1]
//                       : dict.jobs_card_title[card.id - 1]}
//                   </h3>

//                   <h4 className="font-semibold text-sm mt-2">
//                     {isArabic
//                       ? dict.jobs_description_title_ar
//                       : dict.jobs_description_title}
//                   </h4>

//                   <div
//                     className={`text-gray-500 text-sm sm:text-base w-full
//                                 overflow-y-auto max-h-[12rem] pr-2 custom-scrollbar
//                     ${isArabic ? "text-right" : "text-left"}`}
//                   >
//                     <p>
//                       {isArabic
//                         ? dict.jobs_description_ar[card.id - 1]
//                         : dict.jobs_description[card.id - 1]}
//                     </p>
//                   </div>

//                   <div className="mt-1 text-sm text-gray-600">
//                     <h4 className="font-semibold mb-1">
//                       {isArabic ? "المهارات المطلوبة:" : "Required Skills:"}
//                     </h4>
//                     <div
//                       className={` ${isArabic ? "text-right" : "text-left"}`}
//                     >
//                       {card.tools.map((tool, i) => (
//                         <span key={i}>{tool}</span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mt-3 flex justify-between items-center w-full text-sm text-gray-700">
//                     <div>
//                       {isArabic ? " الراتب: " : "Salary:"} {card.salary}
//                     </div>
//                     <div>
//                       {isArabic ? " العدد المطلوب: " : "Vacancies:"}{" "}
//                       {card.vacancies}
//                     </div>
//                   </div>

//                   <div className="mt-2 w-full text-sm text-gray-600">
//                     <div>
//                       {isArabic ? " فترة الإعلان:" : " Announcement Period:"}
//                     </div>
//                     <div className="flex justify-between">
//                       <span>
//                         {isArabic ? "من: " : "From:"} {card.startDate}
//                       </span>
//                       <span>
//                         {isArabic ? "إلى: " : "To:"} {card.endDate}
//                       </span>
//                     </div>
//                   </div>

//                   <Link
//                     href="/"
//                     className="text-gray-500 border border-gray-400 font-bold px-4 py-2 rounded-lg mt-3
//                         hover:bg-primary hover:text-black transition duration-300"
//                   >
//                     {isArabic ? dict.jobs_button_ar : dict.jobs_button}
//                   </Link>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <button
//             onClick={() => swiperRef.current?.slidePrev()}
//             className={`absolute top-1/2 transform -translate-y-1/2 z-10 text-black rounded-full w-12 h-12 flex items-center justify-center transition cursor-pointer font-bold ${
//               isArabic
//                 ? "right-2 sm:right-4 md:-right-12"
//                 : "left-2 sm:left-4 md:-left-12"
//             }`}
//           >
//             {"<"}
//           </button>

//           <button
//             onClick={() => swiperRef.current?.slideNext()}
//             className={`absolute top-1/2 transform -translate-y-1/2 z-10 text-black rounded-full w-12 h-12 flex items-center justify-center transition cursor-pointer font-bold ${
//               isArabic
//                 ? "left-2 sm:left-4 md:-left-12"
//                 : "right-2 sm:right-4 md:-right-12"
//             }`}
//           >
//             {">"}
//           </button>
//         </div>
//       )}

//       {showGrid && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto h-96">
//             {cards.map((card) => (
//                 <div
//                 key={card.id}
//                 className="shadow-md rounded-lg overflow-hidden p-4 flex flex-col items-center text-center bg-[#f1daa5] h-[550px]"
//                 >
//                 <Image
//                     width={400}
//                     height={400}
//                     src={card.image}
//                     alt={card.title}
//                     className="w-full h-60 object-cover rounded-md"
//                 />

//                 <h3 className="text-lg font-bold mt-4 text-gray-500">
//                     {isArabic
//                     ? dict.jobs_card_title_ar[card.id - 1]
//                     : dict.jobs_card_title[card.id - 1]}
//                 </h3>

//                 <div
//                     className={`list-disc list-inside text-gray-500 mt-3 space-y-1 text-sm sm:text-base w-full
//                 overflow-y-auto max-h-[20rem] pr-2 custom-scrollbar ${
//                     isArabic ? "text-right" : "text-left"
//                 }`}
//                 >
//                     {isArabic
//                     ? dict.jobs_description_ar.map(
//                         (desc: string, index: number) => (
//                             <li key={index}>{desc}</li>
//                         )
//                         )
//                     : dict.jobs_description.map((desc: string, index: number) => (
//                         <li key={index}>{desc}</li>
//                         ))}
//                 </div>

//                 <div className="mt-3 flex justify-between items-center w-full text-sm text-gray-700 font-semibold">
//                     <div>
//                     {isArabic ? " الراتب: " : "Salary:"} {card.salary}
//                     </div>
//                     <div>
//                     {isArabic ? " العدد المطلوب: " : "Vacancies:"}{" "}
//                     {card.vacancies}
//                     </div>
//                 </div>

//                 <div className="mt-2 w-full text-sm text-gray-600">
//                     <div>
//                     {isArabic ? " فترة الإعلان:" : " Announcement Period:"}
//                     </div>
//                     <div className="flex justify-between">
//                     <span>
//                         {isArabic ? "من: " : "From:"} {card.startDate}
//                     </span>
//                     <span>
//                         {isArabic ? "إلى: " : "To:"} {card.endDate}
//                     </span>
//                     </div>
//                 </div>

//                 <Link
//                     href="/"
//                     className="text-black border
//                 hover:bg-primary hover:text-black border-gray-400 px-4 py-2 rounded-lg mt-auto"
//                 >
//                     {isArabic ? dict.services_button_ar : dict.services_button}
//                 </Link>
//                 </div>
//             ))}
//             </div>
//       )}

//       <div className="text-center">
//         <button
//           onClick={() => setShowGrid((prev) => !prev)}
//           className="text-gray-500 font-bold underline text-lg"
//         >
//           {showGrid
//             ? isArabic
//               ? dict.jobs_button_ar
//               : dict.jobs_button
//             : isArabic
//             ? dict.jobs_button_ar
//             : dict.jobs_button}
//         </button>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import React, { useState, useRef } from "react";
// import { useParams } from "next/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { Swiper as SwiperType } from "swiper";
// import "swiper/css";
// import Link from "next/link";

// export default function Services({ dict }: { dict: any }) {
//   const [showGrid, setShowGrid] = useState(false);
//   const swiperRef = useRef<SwiperType | null>(null);

//   const cards = [
//     {
//       id: 1,
//       image: "/images/jobs/react.png",
//       title: "FrontEnd (React.js)",
//       description:
//         "Building user interfaces with React.js and modern web technologies.",
//       tools: [
//         "React.js, ",
//         "JavaScript (ES6+), ",
//         "HTML5/CSS3, ",
//         "Redux/Context, ",
//         "REST API, ",
//         "Git",
//       ],
//       salary: "20,000",
//       vacancies: 3,
//       startDate: "2025-09-01",
//       endDate: "2025-09-30",
//     },
//     {
//       id: 2,
//       image: "/images/jobs/next.webp",
//       title: "FrontEnd (Next.js)",
//       description:
//         "Developing full-stack web applications with Next.js and server-side rendering.",
//       tools: ["Next.js, ", "React.js, ", "SSR/SSG, ", "TypeScript, ", "SEO"],
//       salary: "20,000",
//       vacancies: 2,
//       startDate: "2025-09-01",
//       endDate: "2025-09-30",
//     },
//     {
//       id: 3,
//       image: "/images/jobs/laravel.webp",
//       title: "BackEnd (Laravel)",
//       description:
//         "Creating APIs and handling server-side logic with PHP Laravel framework.",
//       tools: [
//         "PHP, ",
//         "Laravel, ",
//         "MySQL/PostgreSQL, ",
//         "MVC, ",
//         "REST API, ",
//         "Auth",
//       ],
//       salary: "20,000",
//       vacancies: 4,
//       startDate: "2025-09-01",
//       endDate: "2025-09-30",
//     },
//     {
//       id: 4,
//       image: "/images/jobs/flutter.png",
//       title: "Mobile Developer",
//       description:
//         "Building cross-platform mobile apps for iOS and Android using Flutter.",
//       tools: [
//         "Flutter, ",
//         "Dart, ",
//         "Mobile UI/UX, ",
//         "REST API, ",
//         "Firebase, ",
//         "App Deployment",
//       ],
//       salary: "20,000",
//       vacancies: 2,
//       startDate: "2025-09-01",
//       endDate: "2025-09-30",
//     },
//     {
//       id: 5,
//       image: "/images/jobs/asp.png",
//       title: "BackEnd (ASP.NET)",
//       description:
//         "Developing enterprise-level applications and services using ASP.NET Core.",
//       tools: [
//         "C#, ",
//         "ASP.NET Core, ",
//         "SQL Server, ",
//         "Entity Framework, ",
//         "Web API, ",
//         "Azure",
//       ],
//       salary: "25,000",
//       vacancies: 1,
//       startDate: "2025-09-01",
//       endDate: "2025-09-30",
//     },
//     {
//       id: 6,
//       image: "/images/jobs/cyber.jpg",
//       title: "Cyber Security",
//       description:
//         "Protecting systems and networks from cyber threats and vulnerabilities.",
//       tools: [
//         "Network Security, ",
//         "Firewalls, ",
//         "PenTesting, ",
//         "Cryptography, ",
//         "SIEM, ",
//         "GDPR/ISO",
//       ],
//       salary: "30,000",
//       vacancies: 2,
//       startDate: "2025-09-01",
//       endDate: "2025-09-30",
//     },
//   ];

//   const { lang } = useParams() as { lang?: string };
//   const isArabic = lang === "ar";

//   return (
//     <section id="services" className="grid grid-cols-1 gap-10 mt-10">
//       <h1 className="text-3xl font-bold text-center sm:text-5xl md:text-6xl text-primary">
//         {isArabic ? dict.jobs_title_ar : dict.jobs_title}
//       </h1>

//       {!showGrid && (
//         <div className="relative w-full max-w-6xl mx-auto px-10">
//           <Swiper
//             modules={[Autoplay]}
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//             autoplay={{
//               delay: 2000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: false,
//             }}
//             loop={true}
//             spaceBetween={20}
//             slidesPerView={1}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="w-full"
//           >
//             {cards.map((card) => (
//               <SwiperSlide key={card.id}>
//                 <div className="shadow-md rounded-lg overflow-hidden flex flex-col items-center text-center bg-[#f1daa5] h-[580px]">

//                   <div className="relative w-full h-60 rounded-md overflow-hidden">
//                     <Image
//                       fill
//                       src={card.image}
//                       alt={card.title}
//                       className="object-cover"
//                     />
//                   </div>

//                   <div className="flex flex-col flex-grow w-full">
//                     <h3 className="text-lg font-bold mt-4 text-gray-500">
//                         {isArabic
//                         ? dict.jobs_card_title_ar[card.id - 1]
//                         : dict.jobs_card_title[card.id - 1]}
//                     </h3>

//                     <h4 className="font-semibold text-sm mt-2">
//                         {isArabic
//                         ? dict.jobs_description_title_ar
//                         : dict.jobs_description_title}
//                     </h4>

//                     <div
//                         className={`text-gray-500 text-sm sm:text-base w-full
//                                     overflow-y-auto max-h-[12rem] pr-2 custom-scrollbar
//                         ${isArabic ? "text-right" : "text-left"}`}
//                     >
//                         <p>
//                         {isArabic
//                             ? dict.jobs_description_ar[card.id - 1]
//                             : dict.jobs_description[card.id - 1]}
//                         </p>
//                     </div>

//                     <div className="mt-1 text-sm text-gray-600">
//                         <h4 className="font-semibold mb-1">
//                         {isArabic ? "المهارات المطلوبة:" : "Required Skills:"}
//                         </h4>
//                         <div
//                         className={` ${isArabic ? "text-right" : "text-left"}`}
//                         >
//                         {card.tools.map((tool, i) => (
//                             <span key={i}>{tool}</span>
//                         ))}
//                         </div>
//                     </div>

//                     <div className="mt-3 flex justify-between items-center w-full text-sm text-gray-700">
//                         <div>
//                         {isArabic ? " الراتب: " : "Salary:"} {card.salary}
//                         </div>
//                         <div>
//                         {isArabic ? " العدد المطلوب: " : "Vacancies:"}{" "}
//                         {card.vacancies}
//                         </div>
//                     </div>

//                     <div className="mt-2 w-full text-sm text-gray-600 ">
//                         <div>
//                         {isArabic ? " فترة الإعلان:" : " Announcement Period:"}
//                         </div>
//                         <div className="flex justify-between">
//                         <span>
//                             {isArabic ? "من: " : "From:"} {card.startDate}
//                         </span>
//                         <span>
//                             {isArabic ? "إلى: " : "To:"} {card.endDate}
//                         </span>
//                         </div>
//                     </div>
//                   </div>

//                   <Link
//                     href="/"
//                     className="text-gray-500 border border-gray-400 font-bold px-4 py-2 rounded-lg mt-3
//                         hover:bg-primary hover:text-black transition duration-300 mb-4"
//                   >
//                     {isArabic ? dict.jobs_button_ar : dict.jobs_button}
//                   </Link>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <button
//             onClick={() => swiperRef.current?.slidePrev()}
//             className={`absolute top-1/2 transform -translate-y-1/2 z-10 text-black rounded-full w-12 h-12 flex items-center justify-center transition cursor-pointer font-bold ${
//               isArabic
//                 ? "right-2 sm:right-4 md:-right-12"
//                 : "left-2 sm:left-4 md:-left-12"
//             }`}
//           >
//             {"<"}
//           </button>

//           <button
//             onClick={() => swiperRef.current?.slideNext()}
//             className={`absolute top-1/2 transform -translate-y-1/2 z-10 text-black rounded-full w-12 h-12 flex items-center justify-center transition cursor-pointer font-bold ${
//               isArabic
//                 ? "left-2 sm:left-4 md:-left-12"
//                 : "right-2 sm:right-4 md:-right-12"
//             }`}
//           >
//             {">"}
//           </button>
//         </div>
//       )}

//       {showGrid && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
//           {cards.map((card) => (
//             <div
//               key={card.id}
//               className="shadow-md rounded-lg overflow-hidden p-4 flex flex-col items-center text-center bg-[#f1daa5] h-[580px]"
//             >

//               <div className="relative w-full h-60 rounded-md overflow-hidden">
//                 <Image
//                   fill
//                   src={card.image}
//                   alt={card.title}
//                   className="object-cover"
//                 />
//               </div>

//               <div className="flex flex-col flex-grow w-full">
//                 <h3 className="text-lg font-bold mt-4 text-gray-500">
//                     {isArabic
//                     ? dict.jobs_card_title_ar[card.id - 1]
//                     : dict.jobs_card_title[card.id - 1]}
//                 </h3>

//                 <h4 className="font-semibold text-sm mt-2">
//                     {isArabic
//                     ? dict.jobs_description_title_ar
//                     : dict.jobs_description_title}
//                 </h4>

//                 <div
//                     className={`text-gray-500 text-sm sm:text-base w-full
//                                 overflow-y-auto max-h-[12rem] pr-2 custom-scrollbar
//                     ${isArabic ? "text-right" : "text-left"}`}
//                 >
//                     <p>
//                     {isArabic
//                         ? dict.jobs_description_ar[card.id - 1]
//                         : dict.jobs_description[card.id - 1]}
//                     </p>
//                 </div>

//                 <div className="mt-1 text-sm text-gray-600">
//                     <h4 className="font-semibold mb-1">
//                     {isArabic ? "المهارات المطلوبة:" : "Required Skills:"}
//                     </h4>
//                     <div className={` ${isArabic ? "text-right" : "text-left"}`}>
//                     {card.tools.map((tool, i) => (
//                         <span key={i}>{tool}</span>
//                     ))}
//                     </div>
//                 </div>

//                 <div className="mt-3 flex justify-between items-center w-full text-sm text-gray-700 ">
//                     <div>
//                     {isArabic ? " الراتب: " : "Salary:"} {card.salary}
//                     </div>
//                     <div>
//                     {isArabic ? " العدد المطلوب: " : "Vacancies:"}{" "}
//                     {card.vacancies}
//                     </div>
//                 </div>

//                 <div className="mt-2 w-full text-sm text-gray-600 ">
//                     <div>{isArabic ? " فترة الإعلان:" : " Announcement Period:"}</div>
//                     <div className="flex justify-between">
//                     <span>
//                         {isArabic ? "من: " : "From:"} {card.startDate}
//                     </span>
//                     <span>
//                         {isArabic ? "إلى: " : "To:"} {card.endDate}
//                     </span>
//                     </div>
//                 </div>
//               </div>

//               <Link
//                 href="/"
//                 className="text-gray-500 border border-gray-400 font-bold px-4 py-2 rounded-lg mt-3
//                 hover:bg-primary hover:text-black transition duration-300 mb-4"
//               >
//                 {isArabic ? dict.jobs_button_ar : dict.jobs_button}
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="text-center mb-10">
//         <button
//           onClick={() => setShowGrid((prev) => !prev)}
//           className="text-gray-500 font-bold underline text-lg"
//         >
//           {showGrid
//             ? isArabic
//               ? dict.jobs_show_slider_button_ar
//               : dict.jobs_show_slider_button
//             : isArabic
//             ? dict.jobs_more_button_ar
//             : dict.jobs_more_button}
//         </button>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Services({ dict }: { dict: any }) {
  const [showGrid, setShowGrid] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const cards = [
    {
      id: 1,
      image: "/images/jobs/react.png",
      title: "FrontEnd (React.js)",
      description:
        "Building user interfaces with React.js and modern web technologies.",
      tools: [
        "React.js, ",
        "JavaScript (ES6+), ",
        "HTML5/CSS3, ",
        "Redux/Context, ",
        "REST API, ",
        "Git",
      ],
      salary: "20,000",
      vacancies: 3,
      startDate: "2025-09-01",
      endDate: "2025-09-30",
    },
    {
      id: 2,
      image: "/images/jobs/next.webp",
      title: "FrontEnd (Next.js)",
      description:
        "Developing full-stack web applications with Next.js and server-side rendering.",
      tools: ["Next.js, ", "React.js, ", "SSR/SSG, ", "TypeScript, ", "SEO"],
      salary: "20,000",
      vacancies: 2,
      startDate: "2025-09-01",
      endDate: "2025-09-30",
    },
    {
      id: 3,
      image: "/images/jobs/laravel.webp",
      title: "BackEnd (Laravel)",
      description:
        "Creating APIs and handling server-side logic with PHP Laravel framework.",
      tools: [
        "PHP, ",
        "Laravel, ",
        "MySQL/PostgreSQL, ",
        "MVC, ",
        "REST API, ",
        "Auth",
      ],
      salary: "20,000",
      vacancies: 4,
      startDate: "2025-09-01",
      endDate: "2025-09-30",
    },
    {
      id: 4,
      image: "/images/jobs/flutter.png",
      title: "Mobile Developer",
      description:
        "Building cross-platform mobile apps for iOS and Android using Flutter.",
      tools: [
        "Flutter, ",
        "Dart, ",
        "Mobile UI/UX, ",
        "REST API, ",
        "Firebase, ",
        "App Deployment",
      ],
      salary: "20,000",
      vacancies: 2,
      startDate: "2025-09-01",
      endDate: "2025-09-30",
    },
    {
      id: 5,
      image: "/images/jobs/asp.png",
      title: "BackEnd (ASP.NET)",
      description:
        "Developing enterprise-level applications and services using ASP.NET Core.",
      tools: [
        "C#, ",
        "ASP.NET Core, ",
        "SQL Server, ",
        "Entity Framework, ",
        "Web API, ",
        "Azure",
      ],
      salary: "25,000",
      vacancies: 1,
      startDate: "2025-09-01",
      endDate: "2025-09-30",
    },
    {
      id: 6,
      image: "/images/jobs/cyber.jpg",
      title: "Cyber Security",
      description:
        "Protecting systems and networks from cyber threats and vulnerabilities.",
      tools: [
        "Network Security, ",
        "Firewalls, ",
        "PenTesting, ",
        "Cryptography, ",
        "SIEM, ",
        "GDPR/ISO",
      ],
      salary: "30,000",
      vacancies: 2,
      startDate: "2025-09-01",
      endDate: "2025-09-30",
    },
  ];

  const { lang } = useParams() as { lang?: string };
  const isArabic = lang === "ar";

  return (
    <section id="services" className="grid grid-cols-1 gap-10 mt-10">
      <h1 className="text-3xl font-bold text-center sm:text-5xl md:text-6xl text-primary">
        {isArabic ? dict.jobs_title_ar : dict.jobs_title}
      </h1>

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
                <div className="shadow-md rounded-lg overflow-hidden flex flex-col items-center text-center bg-[#f1daa5] h-[580px]">
                  <div className="relative w-full h-60 rounded-md overflow-hidden">
                    <Image
                      fill
                      src={card.image}
                      alt={card.title}
                      className="object-cover"
                    />
                  </div>

                  {/* تم إضافة px-4 هنا */}
                  <div className="flex flex-col flex-grow w-full px-4">
                    <h3 className="text-lg font-bold mt-4 text-gray-500">
                      {isArabic
                        ? dict.jobs_card_title_ar[card.id - 1]
                        : dict.jobs_card_title[card.id - 1]}
                    </h3>

                    <h4 className="font-semibold text-sm mt-2">
                      {isArabic
                        ? dict.jobs_description_title_ar
                        : dict.jobs_description_title}
                    </h4>

                    <div
                      className={`text-gray-500 text-sm sm:text-base w-full 
                                    overflow-y-auto max-h-[12rem] pr-2 custom-scrollbar 
                        ${isArabic ? "text-right" : "text-left"}`}
                    >
                      <p>
                        {isArabic
                          ? dict.jobs_description_ar[card.id - 1]
                          : dict.jobs_description[card.id - 1]}
                      </p>
                    </div>

                    <div className="mt-1 text-sm text-gray-600">
                      <h4 className="font-semibold mb-1">
                        {isArabic ? "المهارات المطلوبة:" : "Required Skills:"}
                      </h4>
                      <div
                        className={` ${isArabic ? "text-right" : "text-left"}`}
                      >
                        {card.tools.map((tool, i) => (
                          <span key={i}>{tool}</span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 flex justify-between items-center w-full text-sm text-gray-700">
                      <div>
                        {isArabic ? " الراتب: " : "Salary:"} {card.salary}
                      </div>
                      <div>
                        {isArabic ? " العدد المطلوب: " : "Vacancies:"}{" "}
                        {card.vacancies}
                      </div>
                    </div>

                    <div className="mt-2 w-full text-sm text-gray-600 ">
                      <div>
                        {isArabic ? " فترة الإعلان:" : " Announcement Period:"}
                      </div>
                      <div className="flex justify-between">
                        <span>
                          {isArabic ? "من: " : "From:"} {card.startDate}
                        </span>
                        <span>
                          {isArabic ? "إلى: " : "To:"} {card.endDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/"
                    className="text-gray-500 border border-gray-400 font-bold px-4 py-2 rounded-lg mt-3 
                        hover:bg-primary hover:text-black transition duration-300 mb-4"
                  >
                    {isArabic ? dict.jobs_button_ar : dict.jobs_button}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition cursor-pointer font-bold left-2 sm:left-4 md:-left-12 bg-[#f1daa5] text-black rounded-full shadow-md"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition cursor-pointer font-bold right-2 sm:right-4 md:-right-12 bg-[#f1daa5] text-black rounded-full shadow-md"
          >
            <FaChevronRight />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`absolute top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition cursor-pointer font-bold
            right-2 sm:right-4 md:-right-12
            bg-[#f1daa5] text-black rounded-full shadow-md ${
              isArabic
                ? "left-2 sm:left-4 md:-left-12"
                : "right-2 sm:right-4 md:-right-12"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      )}

      {showGrid && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="shadow-md rounded-lg overflow-hidden flex flex-col items-center text-center bg-[#f1daa5] h-[580px]"
            >
              <div className="relative w-full h-60 rounded-md overflow-hidden">
                <Image
                  fill
                  src={card.image}
                  alt={card.title}
                  className="object-cover"
                />
              </div>

              {/* تم إضافة px-4 هنا أيضًا */}
              <div className="flex flex-col flex-grow w-full px-4">
                <h3 className="text-lg font-bold mt-4 text-gray-500">
                  {isArabic
                    ? dict.jobs_card_title_ar[card.id - 1]
                    : dict.jobs_card_title[card.id - 1]}
                </h3>

                <h4 className="font-semibold text-sm mt-2">
                  {isArabic
                    ? dict.jobs_description_title_ar
                    : dict.jobs_description_title}
                </h4>

                <div
                  className={`text-gray-500 text-sm sm:text-base w-full 
                                overflow-y-auto max-h-[12rem] pr-2 custom-scrollbar 
                    ${isArabic ? "text-right" : "text-left"}`}
                >
                  <p>
                    {isArabic
                      ? dict.jobs_description_ar[card.id - 1]
                      : dict.jobs_description[card.id - 1]}
                  </p>
                </div>

                <div className="mt-1 text-sm text-gray-600">
                  <h4 className="font-semibold mb-1">
                    {isArabic ? "المهارات المطلوبة:" : "Required Skills:"}
                  </h4>
                  <div className={` ${isArabic ? "text-right" : "text-left"}`}>
                    {card.tools.map((tool, i) => (
                      <span key={i}>{tool}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-3 flex justify-between items-center w-full text-sm text-gray-700 ">
                  <div>
                    {isArabic ? " الراتب: " : "Salary:"} {card.salary}
                  </div>
                  <div>
                    {isArabic ? " العدد المطلوب: " : "Vacancies:"}{" "}
                    {card.vacancies}
                  </div>
                </div>

                <div className="mt-2 w-full text-sm text-gray-600 ">
                  <div>
                    {isArabic ? " فترة الإعلان:" : " Announcement Period:"}
                  </div>
                  <div className="flex justify-between">
                    <span>
                      {isArabic ? "من: " : "From:"} {card.startDate}
                    </span>
                    <span>
                      {isArabic ? "إلى: " : "To:"} {card.endDate}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/"
                className="text-gray-500 border border-gray-400 font-bold px-4 py-2 rounded-lg mt-3
                hover:bg-primary hover:text-black transition duration-300 mb-4"
              >
                {isArabic ? dict.jobs_button_ar : dict.jobs_button}
              </Link>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mb-10">
        <button
          onClick={() => setShowGrid((prev) => !prev)}
          className="text-gray-500 font-bold underline text-lg cursor-pointer"
        >
          {showGrid
            ? isArabic
              ? dict.jobs_show_slider_button_ar
              : dict.jobs_show_slider_button
            : isArabic
            ? dict.jobs_more_button_ar
            : dict.jobs_more_button}
        </button>
      </div>
    </section>
  );
}

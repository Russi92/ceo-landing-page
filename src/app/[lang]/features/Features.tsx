// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEarthEurope,
//   faFileInvoiceDollar,
//   faListCheck,
//   faMugHot,
//   faPeopleRoof,
// } from "@fortawesome/free-solid-svg-icons";
// import React from "react";
// import Image from "next/image";

// export default function Features({dict} : {dict: any}) {
//   const features = [
//     {
//       id: 1,
//       icon: "/images/features/project_management.png",
//       title_en: "Project Management",
//       title_ar: "إدارة المشاريع",
//       description_en: "Plan, organize, and track projects efficiently with tasks, milestones, and real-time progress updates.",
//       description_ar: "خطط ونظم وتابع المشاريع بفعالية باستخدام المهام والمعالم ومتابعة التقدم في الوقت الحقيقي."
//     },
//     {
//       id: 2,
//       icon: "/images/features/accounting.png",
//       title_en: "Accounting",
//       title_ar: "المحاسبة",
//       description_en: "Manage invoices, expenses, payroll, and financial reports all in one place with ease.",
//       description_ar: "إدارة الفواتير والمصاريف والرواتب والتقارير المالية في مكان واحد وبسهولة."
//     },
//     {
//       id: 3,
//       icon: "/images/features/hr.png",
//       title_en: "HR",
//       title_ar: "الموارد البشرية",
//       description_en: "Streamline employee records, attendance, recruitment, and performance evaluations.",
//       description_ar: "تبسيط سجلات الموظفين والحضور والتوظيف وتقييم الأداء."
//     },
//     {
//       id: 4,
//       icon: "/images/features/website_management.png",
//       title_en: "Website Management",
//       title_ar: "إدارة الموقع الإلكتروني",
//       description_en: "Easily update and manage website content, media, and analytics without technical hassle.",
//       description_ar: "تحديث وإدارة محتوى الموقع والوسائط والتحليلات بسهولة ودون عناء تقني."
//     },
//     {
//       id: 5,
//       icon: "/images/features/buffet.png",
//       title_en: "Buffet",
//       title_ar: "بوفيه",
//       description_en: "Organize cafeteria menus, manage orders, and provide employees with seamless meal services.",
//       description_ar: "تنظيم قوائم الكافيتيريا، إدارة الطلبات، وتوفير خدمات وجبات سلسة للموظفين."
//     },
//   ];

//   return (
//     <section className="px-5 md:px-20 lg:px-40" data-aos="fade-up">
//       <div className="mb-10 text-center md:text-left">
//         <h2 className="text-3xl sm:text-5xl md:text-6xl text-primary font-bold mb-4">
//         {dict.for_ceo_title}
//         </h2>
//         <h4 className="text-lg sm:text-2xl md:text-4xl">
//         {dict.for_ceo_subtitle}
//         </h4>
//       </div>

//       <div className="bg-[#ae9c56] p-5 sm:p-10 rounded-3xl relative text-black">
//       <div className="bg-[#d2be6f] -rotate-90 absolute top-20 -left-17 p-2 hidden lg:block">
//       {dict.for_ceo_features}
//         </div>

//         <div className="mb-10">
//           <h3 className="text-lg sm:text-2xl md:text-3xl">
//           {dict.for_ceo_subtitle2}
//           </h3>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10">
//   {features.map((feature) => (
//     <div
//       key={feature.id}
//       className="w-full ring-2 ring-white bg-gradient-to-br from-[#c0af6c] to-[#cebe7d]
//                  text-secondary rounded-3xl p-5 sm:p-10 flex gap-5
//                  hover:scale-105 transition-all duration-700"
//     >
//       <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 text-slate-900">
//         <Image
//           src={feature.icon}
//           alt={dict.lang === 'ar' ? feature.title_ar : feature.title_en}
//           width={64}
//           height={64}
//           className="object-contain"
//         />
//       </div>
//       <div>
//       <h3 className="text-xl sm:text-xl md:text-shadow-md mb-3 text-secondary break-words">
//       {dict.lang === 'ar' ? feature.title_ar : feature.title_en}
//     </h3>
//     <p className="text-sm sm:text-base">
//       {dict.lang === 'ar' ? feature.description_ar : feature.description_en}
//     </p>
//       </div>
//     </div>
//   ))}
// </div>

//       </div>
//     </section>
//   );
// }

// 'use client';

// import React from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";

// interface Feature {
//   id: number;
//   icon: string;
//   title_en: string;
//   title_ar: string;
//   description_en: string;
//   description_ar: string;
// }

// interface FeaturesProps {
//   dict?: Record<string, string>;
// }

// export default function Features({ dict }: FeaturesProps) {
//   const { lang } = useParams() as { lang?: string };
//   const isArabic = lang === 'ar';

//   const features: Feature[] = [
//     {
//       id: 1,
//       icon: "/images/features/project_management.png",
//       title_en: "Project Management",
//       title_ar: "إدارة المشاريع",
//       description_en: "Plan, organize, and track projects efficiently with tasks, milestones, and real-time progress updates.",
//       description_ar: "خطط ونظم وتابع المشاريع بفعالية باستخدام المهام والمعالم ومتابعة التقدم في الوقت الحقيقي."
//     },
//     {
//       id: 2,
//       icon: "/images/features/accounting.png",
//       title_en: "Accounting",
//       title_ar: "المحاسبة",
//       description_en: "Manage invoices, expenses, payroll, and financial reports all in one place with ease.",
//       description_ar: "إدارة الفواتير والمصاريف والرواتب والتقارير المالية في مكان واحد وبسهولة."
//     },
//     {
//       id: 3,
//       icon: "/images/features/hr.png",
//       title_en: "HR",
//       title_ar: "الموارد البشرية",
//       description_en: "Streamline employee records, attendance, recruitment, and performance evaluations.",
//       description_ar: "تبسيط سجلات الموظفين والحضور والتوظيف وتقييم الأداء."
//     },
//     {
//       id: 4,
//       icon: "/images/features/website_management.png",
//       title_en: "Website Management",
//       title_ar: "إدارة الموقع الإلكتروني",
//       description_en: "Easily update and manage website content, media, and analytics without technical hassle.",
//       description_ar: "تحديث وإدارة محتوى الموقع والوسائط والتحليلات بسهولة ودون عناء تقني."
//     },
//     {
//       id: 5,
//       icon: "/images/features/buffet.png",
//       title_en: "Buffet",
//       title_ar: "بوفيه",
//       description_en: "Organize cafeteria menus, manage orders, and provide employees with seamless meal services.",
//       description_ar: "تنظيم قوائم الكافيتيريا، إدارة الطلبات، وتوفير خدمات وجبات سلسة للموظفين."
//     },
//   ];

//   return (
//     <section className="px-5 md:px-20 lg:px-40" data-aos="fade-up">
//       <div className="mb-10 text-center md:text-left">
//         <h2 className="text-3xl sm:text-5xl md:text-6xl text-primary font-bold mb-4">
//           {dict?.for_ceo_title || (isArabic ? "ميزات للمدراء التنفيذيين" : "Features for CEOs")}
//         </h2>
//         <h4 className="text-lg sm:text-2xl md:text-4xl">
//           {dict?.for_ceo_subtitle || (isArabic ? "أدوات إدارة الأعمال الشاملة" : "Comprehensive business management tools")}
//         </h4>
//       </div>

//       <div className="bg-[#ae9c56] p-5 sm:p-10 rounded-3xl relative text-black">
//         <div
//           className="bg-[#d2be6f] -rotate-90 absolute top-20 p-2 hidden lg:block"
//           style={{ left: '-68px' }}
//         >
//           {dict?.for_ceo_features || (isArabic ? "الميزات" : "Features")}
//         </div>

//         <div className="mb-10">
//           <h3 className="text-lg sm:text-2xl md:text-3xl">
//             {dict?.for_ceo_subtitle2 || (isArabic ? "كل ما تحتاجه لإدارة أعمالك" : "Everything you need to manage your business")}
//           </h3>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10">
//           {features.map((feature) => (
//             <div
//               key={feature.id}
//               className="w-full ring-2 ring-white bg-gradient-to-br from-[#c0af6c] to-[#cebe7d] text-secondary rounded-3xl p-5 sm:p-10 flex gap-5 hover:scale-105 transition-all duration-700"
//             >
//               <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 text-slate-900">
//                 <Image
//                   src={feature.icon}
//                   alt={isArabic ? feature.title_ar : feature.title_en}
//                   width={64}
//                   height={64}
//                   className="object-contain"
//                 />
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-xl sm:text-xl md:text-shadow-md mb-3 text-secondary break-words">
//                   {isArabic ? feature.title_ar : feature.title_en}
//                 </h3>
//                 <p className="text-sm sm:text-base">
//                   {isArabic ? feature.description_ar : feature.description_en}
//                 </p>
//                 <button className="border-2 p-1 cursor-pointer rounded-full text-sm">More</button>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }





// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import { FaVideo, FaImage, FaFilePdf } from "react-icons/fa";

// interface Feature {
//   id: number;
//   icon: string;
//   title_en: string;
//   title_ar: string;
//   description_en: string;
//   description_ar: string;
// }

// interface FeaturesProps {
//   dict?: Record<string, string>;
// }

// export default function Features({ dict }: FeaturesProps) {
//   const { lang } = useParams() as { lang?: string };
//   const isArabic = lang === "ar";

//   const [activeFeature, setActiveFeature] = useState<number | null>(null);

//   const handleToggle = (id: number) => {
//     setActiveFeature(activeFeature === id ? null : id);
//   };

//   const features: Feature[] = [
//     {
//       id: 1,
//       icon: "/images/features/project_management.png",
//       title_en: "Project Management",
//       title_ar: "إدارة المشاريع",
//       description_en:
//         "Plan, organize, and track projects efficiently with tasks, milestones, and real-time progress updates.",
//       description_ar:
//         "خطط ونظم وتابع المشاريع بفعالية باستخدام المهام والمعالم ومتابعة التقدم في الوقت الحقيقي.",
//     },
//     {
//       id: 2,
//       icon: "/images/features/accounting.png",
//       title_en: "Accounting",
//       title_ar: "المحاسبة",
//       description_en:
//         "Manage invoices, expenses, payroll, and financial reports all in one place with ease.",
//       description_ar:
//         "إدارة الفواتير والمصاريف والرواتب والتقارير المالية في مكان واحد وبسهولة.",
//     },
//     {
//       id: 3,
//       icon: "/images/features/hr.png",
//       title_en: "HR",
//       title_ar: "الموارد البشرية",
//       description_en:
//         "Streamline employee records, attendance, recruitment, and performance evaluations.",
//       description_ar: "تبسيط سجلات الموظفين والحضور والتوظيف وتقييم الأداء.",
//     },
//     {
//       id: 4,
//       icon: "/images/features/website_management.png",
//       title_en: "Website Management",
//       title_ar: "إدارة الموقع الإلكتروني",
//       description_en:
//         "Easily update and manage website content, media, and analytics without technical hassle.",
//       description_ar:
//         "تحديث وإدارة محتوى الموقع والوسائط والتحليلات بسهولة ودون عناء تقني.",
//     },
//     {
//       id: 5,
//       icon: "/images/features/buffet.png",
//       title_en: "Buffet",
//       title_ar: "بوفيه",
//       description_en:
//         "Organize cafeteria menus, manage orders, and provide employees with seamless meal services.",
//       description_ar:
//         "تنظيم قوائم الكافيتيريا، إدارة الطلبات، وتوفير خدمات وجبات سلسة للموظفين.",
//     },
//   ];

//   return (
//     <section className="px-5 md:px-20 lg:px-40" data-aos="fade-up">
//       <div className="mb-10">
//         <h2 className="text-3xl sm:text-5xl md:text-6xl text-primary font-bold mb-4">
//           {dict?.for_ceo_title ||
//             (isArabic ? "ميزات للمدراء التنفيذيين" : "Features for CEOs")}
//         </h2>
//         <h4 className="text-lg sm:text-2xl md:text-4xl">
//           {dict?.for_ceo_subtitle ||
//             (isArabic
//               ? "أدوات إدارة الأعمال الشاملة"
//               : "Comprehensive business management tools")}
//         </h4>
//       </div>

//       <div className="bg-[#f1daa5] p-5 sm:p-10 rounded-3xl relative text-black">
//         <div
//           className="bg-[#f1daa5] -rotate-90 absolute top-20 p-2 hidden lg:block"
//           style={{ left: "-66px" }}
//         >
//           {dict?.for_ceo_features || (isArabic ? "الميزات" : "Features")}
//         </div>

//         <div className="mb-10">
//           <h3 className="text-lg sm:text-2xl md:text-3xl">
//             {dict?.for_ceo_subtitle ||
//               (isArabic
//                 ? "كل ما تحتاجه لإدارة أعمالك"
//                 : "Everything you need to manage your business")}
//           </h3>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10">
//           {features.map((feature) => (
//             <div
//               key={feature.id}
//               className="w-full ring-2 ring-white bg-[#f8e3b2] shadow-md text-secondary rounded-3xl p-5 sm:p-10 flex flex-col gap-5 hover:scale-105 transition-all duration-700"
//             >
//               <div className="flex gap-5">
//                 <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 text-slate-900">
//                   <Image
//                     src={feature.icon}
//                     alt={isArabic ? feature.title_ar : feature.title_en}
//                     width={64}
//                     height={64}
//                     className="object-contain"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-xl sm:text-xl md:text-shadow-md mb-3 text-secondary break-words">
//                     {isArabic ? feature.title_ar : feature.title_en}
//                   </h3>
//                   <p className="text-sm sm:text-base">
//                     {isArabic ? feature.description_ar : feature.description_en}
//                   </p>
//                   <button
//                     className="border-2 p-1 cursor-pointer rounded text-md mt-5"
//                     onClick={() => handleToggle(feature.id)}
//                   >
//                     {activeFeature === feature.id
//                       ? dict?.for_less_button ||
//                         (isArabic ? dict?.for_less_button_ar || "أقل" : "Less")
//                       : dict?.for_more_button ||
//                         (isArabic
//                           ? dict?.for_more_button_ar || "المزيد"
//                           : "More")}
//                   </button>
//                 </div>
//               </div>

//               {activeFeature === feature.id && (
//                 <div className="mt-4">
//                   <ul className="list-disc list-inside text-sm mb-3">
//                     <li>
//                       {isArabic
//                         ? "معلومة إضافية عن الميزة"
//                         : "Additional info about this feature"}
//                     </li>
//                   </ul>
//                   <div className="flex gap-3">
//                     <button className="p-2 rounded-full bg-red-600 text-white hover:opacity-80">
//                       <FaVideo />
//                     </button>
//                     <button className="p-2 rounded-full bg-blue-600 text-white hover:opacity-80">
//                       <FaImage />
//                     </button>
//                     <button className="p-2 rounded-full bg-green-600 text-white hover:opacity-80">
//                       <FaFilePdf />
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
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
// import { FaVideo, FaImage, FaFilePdf } from "react-icons/fa";

// export default function Features({ dict }: { dict: any }) {
//   const [showGrid, setShowGrid] = useState(false);
//   const swiperRef = useRef<SwiperType | null>(null);

//   const { lang } = useParams() as { lang?: string };
//   const isArabic = lang === "ar";
  
//   const features = [
//     {
//       id: 1,
//       icon: "/images/features/project_management.png",
//       title_ar: "إدارة المشروع",
//       title_en: "Project Management",
//       description_ar: "قم بالتخطيط للمشاريع وتنظيمها وتتبعها بكفاءة باستخدام المهام والمعالم وتحديثات التقدم في الوقت الفعلي.",
//       description_en: "Plan, organize, and track projects efficiently with tasks, milestones, and real-time progress updates.",
//     },
//     {
//       id: 2,
//       icon: "/images/features/accounting.png",
//       title_ar: "المحاسبة",
//       title_en: "Accounting",
//       description_ar: "قم بإدارة الفواتير والنفقات وكشوف الرواتب والتقارير المالية كلها في مكان واحد بكل سهولة.",
//       description_en: "Manage invoices, expenses, payroll, and financial reports all in one place with ease.",
//     },
//     {
//       id: 3,
//       icon: "/images/features/hr.png",
//       title_ar: "الموارد البشرية",
//       title_en: "HR",
//       description_ar: "تبسيط سجلات الموظفين، والحضور، والتوظيف، وتقييم الأداء.",
//       description_en: "Streamline employee records, attendance, recruitment, and performance evaluations.",
//     },
//     {
//       id: 4,
//       icon: "/images/features/website_management.png",
//       title_ar: "إدارة الموقع",
//       title_en: "Website Management",
//       description_ar: "يمكنك تحديث وإدارة محتوى موقع الويب والوسائط والتحليلات بسهولة دون أي متاعب تقنية.",
//       description_en: "Easily update and manage website content, media, and analytics without technical hassle.",
//     },
//     {
//       id: 5,
//       icon: "/images/features/buffet.png",
//       title_ar: "البوفيه",
//       title_en: "Buffet",
//       description_ar: "تنظيم قوائم الكافتيريا وإدارة الطلبات وتوفير خدمات الوجبات السلسة للموظفين.",
//       description_en: "Organize cafeteria menus, manage orders, and provide employees with seamless meal services.",
//     },
//   ];

//   return (
//     <section>
        
//       {!showGrid && (
//         <div className="relative w-full max-w-6xl mx-auto px-10">
//           <Swiper
//             modules={[Autoplay, Navigation]}
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//             autoplay={{
//               delay: 2000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             loop={true}
//             spaceBetween={20}
//             slidesPerView={1}
//             grabCursor={true}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="w-full"
//           >
//             {features.map((feature) => (
//               <SwiperSlide key={feature.id}>
//                 <div className="w-full ring-2 ring-white bg-[#f8e3b2] shadow-md text-secondary rounded-3xl p-5 sm:p-10 flex flex-col gap-5 hover:scale-105 transition-all duration-700">
//                   <div className="flex gap-5">
//                     <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 text-slate-900">
//                       <Image
//                         src={feature.icon}
//                         alt={isArabic ? feature.title_ar : feature.title_en}
//                         width={50}
//                         height={50}
//                         className="object-contain"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl sm:text-xl md:text-shadow-md mb-3 text-secondary break-words">
//                         {isArabic ? feature.title_ar : feature.title_en}
//                       </h3>
//                       <p className="text-sm sm:text-base">
//                         {isArabic
//                           ? feature.description_ar
//                           : feature.description_en}
//                       </p>
//                     </div>
//                   </div>
//                   {/* تم إزالة المحتوى الإضافي هنا لجعل الكارت متوافقًا مع السلايدر */}
//                   <div className="mt-4">
//                     <ul className="list-disc list-inside text-sm mb-3">
//                       <li>
//                         {isArabic
//                           ? "معلومة إضافية عن الميزة"
//                           : "Additional info about this feature"}
//                       </li>
//                     </ul>
//                     <div className="flex gap-3">
//                       <button className="p-2 rounded-full bg-red-600 text-white hover:opacity-80">
//                         <FaVideo />
//                       </button>
//                       <button className="p-2 rounded-full bg-blue-600 text-white hover:opacity-80">
//                         <FaImage />
//                       </button>
//                       <button className="p-2 rounded-full bg-green-600 text-white hover:opacity-80">
//                         <FaFilePdf />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* أزرار التنقل خارج حاوية الـ Swiper */}
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
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4">
//           {features.map((feature) => (
//             <div
//               key={feature.id}
//               className="w-full ring-2 ring-white bg-[#f8e3b2] shadow-md text-secondary rounded-3xl p-5 sm:p-10 flex flex-col gap-5 hover:scale-105 transition-all duration-700"
//             >
//               <div className="flex gap-5">
//                 <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 text-slate-900">
//                   <Image
//                     src={feature.icon}
//                     alt={isArabic ? feature.title_ar : feature.title_en}
//                     width={64}
//                     height={64}
//                     className="object-contain"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-xl sm:text-xl md:text-shadow-md mb-3 text-secondary break-words">
//                     {isArabic ? feature.title_ar : feature.title_en}
//                   </h3>
//                   <p className="text-sm sm:text-base">
//                     {isArabic
//                       ? feature.description_ar
//                       : feature.description_en}
//                   </p>
//                 </div>
//               </div>
//               {/* تم إزالة المحتوى الإضافي هنا أيضًا للتبسيط والتناسق */}
//               <div className="mt-4">
//                 <ul className="list-disc list-inside text-sm mb-3">
//                   <li>
//                     {isArabic
//                       ? "معلومة إضافية عن الميزة"
//                       : "Additional info about this feature"}
//                   </li>
//                 </ul>
//                 <div className="flex gap-3">
//                   <button className="p-2 rounded-full bg-red-600 text-white hover:opacity-80">
//                     <FaVideo />
//                   </button>
//                   <button className="p-2 rounded-full bg-blue-600 text-white hover:opacity-80">
//                     <FaImage />
//                   </button>
//                   <button className="p-2 rounded-full bg-green-600 text-white hover:opacity-80">
//                     <FaFilePdf />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="text-center mt-10">
//         <button
//           onClick={() => setShowGrid((prev) => !prev)}
//           className="text-gray-500 font-bold underline text-lg"
//         >
//           {showGrid
//             ? isArabic
//               ? "أقل"
//               : "Show as Slider"
//             : isArabic
//             ? "المزيد"
//             : "More"}
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
// import { FaVideo, FaImage, FaFilePdf } from "react-icons/fa";

// export default function Features({ dict }: { dict: any }) {
//   const [showGrid, setShowGrid] = useState(false);
//   const swiperRef = useRef<SwiperType | null>(null);

//   const { lang } = useParams() as { lang?: string };
//   const isArabic = lang === "ar";
  
//   const features = [
//     {
//       id: 1,
//       icon: "/images/features/project_management.png",
//       title_ar: "إدارة المشروع",
//       title_en: "Project Management",
//       description_ar: "قم بالتخطيط للمشاريع وتنظيمها وتتبعها بكفاءة باستخدام المهام والمعالم وتحديثات التقدم في الوقت الفعلي.",
//       description_en: "Plan, organize, and track projects efficiently with tasks, milestones, and real-time progress updates.",
//     },
//     {
//       id: 2,
//       icon: "/images/features/accounting.png",
//       title_ar: "المحاسبة",
//       title_en: "Accounting",
//       description_ar: "قم بإدارة الفواتير والنفقات وكشوف الرواتب والتقارير المالية كلها في مكان واحد بكل سهولة.",
//       description_en: "Manage invoices, expenses, payroll, and financial reports all in one place with ease.",
//     },
//     {
//       id: 3,
//       icon: "/images/features/hr.png",
//       title_ar: "الموارد البشرية",
//       title_en: "HR",
//       description_ar: "تبسيط سجلات الموظفين، والحضور، والتوظيف، وتقييم الأداء.",
//       description_en: "Streamline employee records, attendance, recruitment, and performance evaluations.",
//     },
//     {
//       id: 4,
//       icon: "/images/features/website_management.png",
//       title_ar: "إدارة الموقع",
//       title_en: "Website Management",
//       description_ar: "يمكنك تحديث وإدارة محتوى موقع الويب والوسائط والتحليلات بسهولة دون أي متاعب تقنية.",
//       description_en: "Easily update and manage website content, media, and analytics without technical hassle.",
//     },
//     {
//       id: 5,
//       icon: "/images/features/buffet.png",
//       title_ar: "البوفيه",
//       title_en: "Buffet",
//       description_ar: "تنظيم قوائم الكافتيريا وإدارة الطلبات وتوفير خدمات الوجبات السلسة للموظفين.",
//       description_en: "Organize cafeteria menus, manage orders, and provide employees with seamless meal services.",
//     },
//   ];

//   return (
//     <section>
        
//       {!showGrid && (
//         <div className="relative w-full max-w-6xl mx-auto px-10">
//           <Swiper
//             modules={[Autoplay, Navigation]}
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//             autoplay={{
//               delay: 2000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             loop={true}
//             spaceBetween={20}
//             slidesPerView={1}
//             grabCursor={true}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="w-full"
//           >
//             {features.map((feature) => (
//               <SwiperSlide key={feature.id}>
//                 <div className="w-full bg-[#f8e3b2] shadow-md text-secondary rounded-3xl p-5 sm:p-10 flex flex-col gap-5 hover:scale-105 transition-all duration-700 h-[350px] overflow-hidden">
//                   <div className="flex gap-5">
//                     <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 text-slate-900">
//                       <Image
//                         src={feature.icon}
//                         alt={isArabic ? feature.title_ar : feature.title_en}
//                         width={40}
//                         height={40}
//                         className="object-contain"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl sm:text-xl md:text-shadow-md mb-3 text-secondary break-words">
//                         {isArabic ? feature.title_ar : feature.title_en}
//                       </h3>
//                       <p className="text-sm sm:text-base">
//                         {isArabic
//                           ? feature.description_ar
//                           : feature.description_en}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="mt-auto">
//                     <ul className="list-disc list-inside text-sm mb-3">
//                       <li>
//                         {isArabic
//                           ? "معلومة إضافية عن الميزة"
//                           : "Additional info about this feature"}
//                       </li>
//                     </ul>
//                     <div className="flex gap-3">
//                       <button className="p-2 rounded-full bg-red-600 text-white hover:opacity-80">
//                         <FaVideo />
//                       </button>
//                       <button className="p-2 rounded-full bg-blue-600 text-white hover:opacity-80">
//                         <FaImage />
//                       </button>
//                       <button className="p-2 rounded-full bg-green-600 text-white hover:opacity-80">
//                         <FaFilePdf />
//                       </button>
//                     </div>
//                   </div>
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
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4">
//           {features.map((feature) => (
//             <div
//               key={feature.id}
//               className="w-full bg-[#f8e3b2] shadow-md text-secondary rounded-3xl p-5 sm:p-10 flex flex-col gap-5 hover:scale-105 transition-all duration-700 h-[350px] overflow-hidden"
//             >
//               <div className="flex gap-5">
//                 <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 text-slate-900">
//                   <Image
//                     src={feature.icon}
//                     alt={isArabic ? feature.title_ar : feature.title_en}
//                     width={64}
//                     height={64}
//                     className="object-contain"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-xl sm:text-xl md:text-shadow-md mb-3 text-secondary break-words">
//                     {isArabic ? feature.title_ar : feature.title_en}
//                   </h3>
//                   <p className="text-sm sm:text-base">
//                     {isArabic
//                       ? feature.description_ar
//                       : feature.description_en}
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <ul className="list-disc list-inside text-sm mb-3">
//                   <li>
//                     {isArabic
//                       ? "معلومة إضافية عن الميزة"
//                       : "Additional info about this feature"}
//                   </li>
//                 </ul>
//                 <div className="flex gap-3">
//                   <button className="p-2 rounded-full bg-red-600 text-white hover:opacity-80">
//                     <FaVideo />
//                   </button>
//                   <button className="p-2 rounded-full bg-blue-600 text-white hover:opacity-80">
//                     <FaImage />
//                   </button>
//                   <button className="p-2 rounded-full bg-green-600 text-white hover:opacity-80">
//                     <FaFilePdf />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="text-center mt-10">
//         <button
//           onClick={() => setShowGrid((prev) => !prev)}
//           className="text-gray-500 font-bold underline text-lg"
//         >
//           {showGrid
//             ? isArabic
//               ? "عرض الشريط المتحرك"
//               : "Show as Slider"
//             : isArabic
//             ? "المزيد"
//             : "More"}
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
import { FaVideo, FaImage, FaFilePdf , FaChevronLeft , FaChevronRight } from "react-icons/fa";


export default function Features({ dict }: { dict: any }) {
  const [showGrid, setShowGrid] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const { lang } = useParams() as { lang?: string };
  const isArabic = lang === "ar";
  
  const features = [
    {
      id: 1,
      icon: "/images/features/project_management.png",
      title_ar: "إدارة المشروع",
      title_en: "Project Management",
      description_ar: "قم بالتخطيط للمشاريع وتنظيمها وتتبعها بكفاءة باستخدام المهام والمعالم وتحديثات التقدم في الوقت الفعلي.",
      description_en: "Plan, organize, and track projects efficiently with tasks, milestones, and real-time progress updates.",
    },
    {
      id: 2,
      icon: "/images/features/accounting.png",
      title_ar: "المحاسبة",
      title_en: "Accounting",
      description_ar: "قم بإدارة الفواتير والنفقات وكشوف الرواتب والتقارير المالية كلها في مكان واحد بكل سهولة.",
      description_en: "Manage invoices, expenses, payroll, and financial reports all in one place with ease.",
    },
    {
      id: 3,
      icon: "/images/features/hr.png",
      title_ar: "الموارد البشرية",
      title_en: "HR",
      description_ar: "تبسيط سجلات الموظفين، والحضور، والتوظيف، وتقييم الأداء.",
      description_en: "Streamline employee records, attendance, recruitment, and performance evaluations.",
    },
    {
      id: 4,
      icon: "/images/features/website_management.png",
      title_ar: "إدارة الموقع",
      title_en: "Website Management",
      description_ar: "يمكنك تحديث وإدارة محتوى موقع الويب والوسائط والتحليلات بسهولة دون أي متاعب تقنية.",
      description_en: "Easily update and manage website content, media, and analytics without technical hassle.",
    },
    {
      id: 5,
      icon: "/images/features/buffet.png",
      title_ar: "البوفيه",
      title_en: "Buffet",
      description_ar: "تنظيم قوائم الكافتيريا وإدارة الطلبات وتوفير خدمات الوجبات السلسة للموظفين.",
      description_en: "Organize cafeteria menus, manage orders, and provide employees with seamless meal services.",
    },
  ];

  return (
    <section>
        
      {!showGrid && (
        <div className="relative w-full max-w-6xl mx-auto px-10">
          <Swiper
            modules={[Autoplay, Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            grabCursor={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {features.map((feature) => (
              <SwiperSlide key={feature.id}>
                <div className="w-full bg-[#f8e3b2] shadow-md text-secondary rounded-3xl p-5 sm:p-10 flex flex-col gap-5 hover:scale-105 transition-all duration-700 h-[350px] overflow-hidden">
                  
                  
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 text-slate-900">
                      <Image
                        src={feature.icon}
                        alt={isArabic ? feature.title_ar : feature.title_en}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-xl md:text-shadow-md mb-3 text-secondary break-words text-center">
                        {isArabic ? feature.title_ar : feature.title_en}
                      </h3>
                      <p className="text-sm sm:text-base text-center">
                        {isArabic
                          ? feature.description_ar
                          : feature.description_en}
                      </p>
                    </div>
                  </div>
                 
                  
                  <div className="mt-auto">
                    <ul className="list-disc list-inside text-sm mb-3">
                      <li>
                        {isArabic
                          ? "معلومة إضافية عن الميزة"
                          : "Additional info about this feature"}
                      </li>
                    </ul>
                    <div className="flex gap-3">
                      <button className="p-2 rounded-full bg-red-600 text-white hover:opacity-80">
                        <FaVideo />
                      </button>
                      <button className="p-2 rounded-full bg-blue-600 text-white hover:opacity-80">
                        <FaImage />
                      </button>
                      <button className="p-2 rounded-full bg-green-600 text-white hover:opacity-80">
                        <FaFilePdf />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`absolute top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition cursor-pointer font-bold
            left-2 sm:left-4 md:-left-12
            bg-[#f1daa5] text-black rounded-full shadow-md
              `}
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`absolute top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition cursor-pointer font-bold
            right-2 sm:right-4 md:-right-12
            bg-[#f1daa5] text-black rounded-full shadow-md`}
          >
            <FaChevronRight />
          </button>
        </div>
      )}

      {showGrid && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="w-full bg-[#f8e3b2] shadow-md text-secondary rounded-3xl p-5 sm:p-10 flex flex-col gap-5 hover:scale-105 transition-all duration-700 h-[350px] overflow-hidden"
            >
              
              {/* هذا الجزء تم تعديله */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 text-slate-900">
                  <Image
                    src={feature.icon}
                    alt={isArabic ? feature.title_ar : feature.title_en}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-xl md:text-shadow-md mb-3 text-secondary break-words text-center">
                    {isArabic ? feature.title_ar : feature.title_en}
                  </h3>
                  <p className="text-sm sm:text-base text-center">
                    {isArabic
                      ? feature.description_ar
                      : feature.description_en}
                  </p>
                </div>
              </div>
              {/* نهاية الجزء المعدل */}
              
              <div className="mt-4">
                <ul className="list-disc list-inside text-sm mb-3">
                  <li>
                    {isArabic
                      ? "معلومة إضافية عن الميزة"
                      : "Additional info about this feature"}
                  </li>
                </ul>
                <div className="flex gap-3">
                  <button className="p-2 rounded-full bg-red-600 text-white hover:opacity-80">
                    <FaVideo />
                  </button>
                  <button className="p-2 rounded-full bg-blue-600 text-white hover:opacity-80">
                    <FaImage />
                  </button>
                  <button className="p-2 rounded-full bg-green-600 text-white hover:opacity-80">
                    <FaFilePdf />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-10">
        <button
          onClick={() => setShowGrid((prev) => !prev)}
          className="text-gray-500 font-bold underline text-lg"
        >
          {showGrid
            ? isArabic
              ? "عرض الشريط المتحرك"
              : "Show as Slider"
            : isArabic
            ? "المزيد"
            : "More"}
        </button>
      </div>
    </section>
  );
}
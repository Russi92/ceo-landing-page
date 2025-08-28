// import Image from "next/image";

// const ceo = {
//   name: "Sharidah Nafea",
//   role: "CEO & Founder",
//   img: "/images/team/sharidah.png",
// };

// const team = [
//   { name: "Mohamed Hassan", role: "FrondEnd Developer", img: "/images/team/russi.jpeg" },
//   { name: "Mustafa Gameel", role: "BackEnd Developer", img: "/images/team/darsh.jpeg" },
//   { name: "Abdelrahman Ahmed", role: "BackEnd Developer", img: "/images/team/abdelrahman.png" },
//   { name: "Ahmed Ismael", role: "Full Stack Developer", img: "/images/c.png" },
//   { name: "Ahmed Abdelmoeen ", role: "BackEnd Developer", img: "/images/c.png" },
//   { name: "Mohamed Ayman", role: "FrondEnd Developer", img: "/images/c.png" },
// ];

// export default function TeamSection() {
//   return (
//     <section className="py-20 text-center relative overflow-hidden bg-gradient-dark min-h-screen flex items-center justify-center">
//       <div className="container mx-auto px-4">
//         <h2 className="text-5xl font-bold text-foreground mb-16 animate-fade-in">
//          Our Team
//         </h2>

//         {/* Main container for the orbit */}
//         <div className="relative w-[700px] h-[700px] mx-auto">
//           {/* Rotating circle of team members */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 team-orbit">
//   {team.map((emp, i) => {
//     const angle = (i / team.length) * 2 * Math.PI;
//     const radius = 280;
//     const x = Math.cos(angle) * radius;
//     const y = Math.sin(angle) * radius;

//     return (
//       <div
//         key={i}
//         className="absolute team-member"
//         style={{
//           left: "50%",
//           top: "50%",
//           transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//         }}
//       >
//         <div className="text-center">
//           <div className="w-24 h-24 rounded-full border-4 border-accent overflow-hidden shadow-lg mx-auto member-glow transition-all duration-300 hover:scale-110">
//             <Image
//               width={100}
//               height={100}
//               src={emp.img}
//               alt={emp.name}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <h4 className="mt-2 text-amber-400 text-md font-semibold text-foreground">
//             {emp.name}
//           </h4>
//           <p className="text-sm text-muted-foreground">{emp.role}</p>
//         </div>
//       </div>
//     );
//   })}
// </div>

//           {/* CEO in center (fixed position) */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
//             <div className="w-40 h-40 rounded-full border-4 border-accent overflow-hidden mx-auto shadow-2xl ceo-glow transition-all duration-300 hover:scale-105">
//               <Image
//               width={100}
//               height={100}
//                 src={ceo.img}
//                 alt={ceo.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="text-2xl font-bold mt-6 text-foreground">{ceo.name}</h3>
//             <p className="text-lg text-accent font-medium">{ceo.role}</p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// import Image from "next/image";

// const ceo = {
//   name: "Sharidah Nafea",
//   role: "CEO & Founder",
//   img: "/images/team/sharidah.png",
// };

// const team = [
//   { name: "Mohamed Hassan", role: "FrondEnd Developer", img: "/images/team/russi.jpeg" },
//   { name: "Mustafa Gameel", role: "BackEnd Developer", img: "/images/team/darsh.jpeg" },
//   { name: "Abdelrahman Ahmed", role: "BackEnd Developer", img: "/images/team/abdelrahman.png" },
//   { name: "Ahmed Ismael", role: "Full Stack Developer", img: "/images/c.png" },
//   { name: "Ahmed Abdelmoeen ", role: "BackEnd Developer", img: "/images/c.png" },
//   { name: "Mohamed Ayman", role: "FrondEnd Developer", img: "/images/c.png" },
// ];

// export default function TeamSection() {
//   return (
//     <section className="py-20 text-center relative overflow-hidden bg-gradient-dark min-h-screen flex items-center justify-center">
//       <div className="container mx-auto px-4">
//         <h2 className="text-5xl font-bold text-foreground mb-16 animate-fade-in">
//           Our Team
//         </h2>

//         {/* Main container for the orbit */}
//         <div className="relative w-[700px] h-[700px] mx-auto">
//           {/* Rotating circle of team members */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 team-orbit">
//             {team.map((member, i) => {
//               const angle = (i / team.length) * 2 * Math.PI;
//               const radius = 280;
//               const x = Math.cos(angle) * radius;
//               const y = Math.sin(angle) * radius;

//               return (
//                 <div
//                   key={i}
//                   className="absolute team-member"
//                   style={{
//                     left: "50%",
//                     top: "50%",
//                     transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//                   }}
//                 >
//                   <div
//                     className="text-center"
//                     style={{
//                       transform: `rotate(${-angle}rad)`, // يثبّت الصورة والاسم
//                     }}
//                   >
//                     <div className="w-24 h-24 rounded-full border-4 border-accent overflow-hidden shadow-lg mx-auto member-glow transition-all duration-300 hover:scale-110">
//                       <Image
//                         width={100}
//                         height={100}
//                         src={member.img}
//                         alt={member.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <h4 className="mt-2 text-amber-400 text-md font-semibold">
//                       {member.name}
//                     </h4>
//                     <p className="text-sm text-muted-foreground">
//                       {member.role}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* CEO in center (fixed position) */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
//             <div className="w-40 h-40 rounded-full border-4 border-accent overflow-hidden mx-auto shadow-2xl ceo-glow transition-all duration-300 hover:scale-105">
//               <Image
//                 width={100}
//                 height={100}
//                 src={ceo.img}
//                 alt={ceo.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="text-2xl font-bold mt-6 text-foreground">
//               {ceo.name}
//             </h3>
//             <p className="text-lg text-accent font-medium">{ceo.role}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";

// const ceo = {
//   name: "Sharidah Nafea",
//   role: "CEO & Founder",
//   img: "/images/team/sharidah.png",
// };

// const team = [
//   { name: "Mohamed Hassan", role: "FrondEnd", img: "/images/team/russi.jpeg" },
//   { name: "Mustafa Gameel", role: "BackEnd", img: "/images/team/darsh.jpeg" },
//   { name: "Abdelrahman Ahmed", role: "BackEnd", img: "/images/team/abdelrahman.png" },
//   { name: "Ahmed Ismael", role: "Full Stack", img: "/images/c.png" },
//   { name: "Ahmed Abdelmoeen ", role: "BackEnd", img: "/images/c.png" },
//   { name: "Mohamed Ayman", role: "FrondEnd", img: "/images/c.png" },
// ];

// export default function TeamSection() {
//   return (
//     <section className="py-20 text-center relative overflow-hidden bg-gradient-dark min-h-screen flex items-center justify-center">
//       <div className="container mx-auto px-4">
//         <h2 className="text-5xl font-bold text-foreground mb-16 animate-fade-in">
//          Our Team
//         </h2>

//         {/* Main container for the orbit */}
//         <div className="relative w-[700px] h-[700px] mx-auto">
//           {/* Rotating circle of team members */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 team-orbit">
//   {team.map((emp, i) => {
//     const angle = (i / team.length) * 2 * Math.PI;
//     const radius = 280;
//     const x = Math.cos(angle) * radius;
//     const y = Math.sin(angle) * radius;

//     return (
//       <div
//         key={i}
//         className="absolute team-member"
//         style={{
//           left: "50%",
//           top: "50%",
//           transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//         }}
//       >
//         {/* إضافة هذا الـ div الجديد لحل المشكلة */}
//         <div className="team-member-content">
//           <div className="text-center">
//             <div className="w-24 h-24 rounded-full border-4 border-accent overflow-hidden shadow-lg mx-auto member-glow transition-all duration-300 hover:scale-110">
//               <Image
//                 width={100}
//                 height={100}
//                 src={emp.img}
//                 alt={emp.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h4 className="mt-2 text-amber-400 text-sm font-semibold text-foreground">
//               {emp.name}
//             </h4>
//             <p className="text-sm text-muted-foreground">{emp.role}</p>
//           </div>
//         </div>
//       </div>
//     );
//   })}
// </div>

//           {/* CEO in center (fixed position) */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
//             <div className="w-40 h-40 rounded-full border-4 border-accent overflow-hidden mx-auto shadow-2xl ceo-glow transition-all duration-300 hover:scale-105">
//               <Image
//               width={100}
//               height={100}
//                 src={ceo.img}
//                 alt={ceo.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="text-2xl font-bold mt-6 text-foreground">{ceo.name}</h3>
//             <p className="text-lg text-accent font-medium">{ceo.role}</p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// import Image from "next/image";

// const ceo = {
//   name: "Sharidah Nafea",
//   role: "CEO & Founder",
//   img: "/images/team/sharidah.png",
// };

// const team = [
//   { name: "Mohamed Hassan", title: "FrondEnd", img: "/images/team/russi.jpeg" },
//   { name: "Mustafa Gameel", title: "BackEnd", img: "/images/team/darsh.jpeg" },
//   { name: "Abdelrahman Ahmed", title: "BackEnd", img: "/images/team/abdelrahman.png" },
//   { name: "Ahmed Ismael", title: "Full Stack", img: "/images/c.png" },
//   { name: "Ahmed Abdelmoeen ", title: "BackEnd", img: "/images/c.png" },
//   { name: "Mohamed Ayman", title: "FrondEnd", img: "/images/c.png" },
// ];

// export default function TeamSection() {
//   return (
//     <section className="py-20 text-center relative overflow-hidden bg-gradient-dark min-h-screen flex items-center justify-center">
//       <div className="container mx-auto px-4">
//         <h2 className="text-5xl font-bold text-foreground mb-16 animate-fade-in">
//          Our Team Developers
//         </h2>

//         {/* Main container for the orbit */}
//         <div className="relative w-[700px] h-[700px] mx-auto">
//           {/* Rotating circle of team members */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 team-orbit">
//   {team.map((emp, i) => {
//     const angle = (i / team.length) * 2 * Math.PI;
//     const radius = 280;
//     const x = Math.cos(angle) * radius;
//     const y = Math.sin(angle) * radius;

//     return (
//       <div
//         key={i}
//         className="absolute team-member"
//         style={{
//           left: "50%",
//           top: "50%",
//           transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//         }}
//       >

//         <div className="team-member-content">
//           <div className="text-center">
//             <div className="w-24 h-24 rounded-full border-4 border-accent overflow-hidden shadow-lg mx-auto member-glow transition-all duration-300 hover:scale-110">
//               <Image
//                 width={100}
//                 height={100}
//                 src={emp.img}
//                 alt={emp.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <h4 className="mt-2 text-amber-400 text-sm font-semibold text-foreground whitespace-nowrap">
//               {emp.name}
//             </h4>
//             <p className="text-sm text-muted-foreground">{emp.title}</p>
//           </div>
//         </div>
//       </div>
//     );
//   })}
// </div>

//           {/* CEO in center (fixed position) */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
//             <div className="w-40 h-40 rounded-full border-4 border-accent overflow-hidden mx-auto shadow-2xl ceo-glow transition-all duration-300 hover:scale-105">
//               <Image
//               width={100}
//               height={100}
//                 src={ceo.img}
//                 alt={ceo.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="text-2xl font-bold mt-6 text-foreground">{ceo.name}</h3>
//             <p className="text-lg text-accent font-medium">{ceo.role}</p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// responsive code
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

const ceo = {
  name: "Mr.Sharidah Nafea",
  role: "CEO & Founder",
  img: "/images/team/sharidah.png",
};

const team = [
  { 
    name: "Mohamed Hassan", 
    title: "FrondEnd", 
    img: "/images/team/russi.jpeg" 
  },
  { name: "Mustafa Gameel", 
    title: "BackEnd", 
    img: "/images/team/darsh.jpeg" 
  },
  {
    name: "Abdelrahman Ahmed",
    title: "BackEnd",
    img: "/images/team/abdelrahman.png",
  },
  { name: "Ahmed Ismael", 
    title: "Full Stack", 
    img: "/images/c.png" 
  },
  {
    name: "Ahmed Abdelmoeen ",
    title: "BackEnd",
    img: "/images/team/ahmed.jpeg",
  },
  { name: "Mohamed Ayman", 
    title: "FrondEnd", 
    img: "/images/c.png" 
  },
];

export default function TeamSection({ dict }: { dict: any }) {
  const orbitRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(280);

  useEffect(() => {
    const updateRadius = () => {
      if (orbitRef.current) {
        const newRadius = orbitRef.current.offsetWidth * 0.4;
        setRadius(newRadius);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const { lang } = useParams() as { lang?: string };
  const isArabic = lang === "ar";

  return (
    <section
      id="team"
      className="py-20 text-center relative overflow-hidden bg-gradient-dark min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 sm:mb-16 animate-fade-in text-primary">
        {isArabic ? dict.team_title_ar : dict.team_title}
        </h2>

        {/* Main container for the orbit */}
        <div
          ref={orbitRef}
          className="relative w-full max-w-[700px] aspect-square mx-auto"
        >
          {/* Rotating circle of team members */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 team-orbit">
            {team.map((emp, i) => {
              const angle = (i / team.length) * 2 * Math.PI;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={i}
                  className="absolute team-member"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div className="team-member-content">
                    <div className="text-center transition-all duration-900 hover:scale-180 hover:text-amber-300">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                      rounded-full border-2 sm:border-4 border-accent overflow-hidden shadow-lg mx-auto member-glow ">
                        <Image
                          width={100}
                          height={100}
                          src={emp.img}
                          alt={emp.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <h4 className="mt-2 text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">
                        {emp.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {emp.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CEO in center (fixed position) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          text-center z-10 transition-all duration-900 hover:scale-180 hover:text-amber-300">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full 
            border-2 sm:border-4 border-accent overflow-hidden mx-auto shadow-2xl ceo-glow ">
              <Image
                width={100}
                height={100}
                src={ceo.img}
                alt={ceo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-base sm:text-xl md:text-2xl font-bold mt-4 md:mt-6 text-foreground">
              {ceo.name}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-accent font-medium">
              {ceo.role}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
// responsive code

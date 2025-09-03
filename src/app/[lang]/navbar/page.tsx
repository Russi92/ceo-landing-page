
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
// import ceo from "../../../../public/navbar/ceo.webp"
import ContactModal from "../contactUs/page";
import { useParams, usePathname, useRouter } from "next/navigation";

export default function NavBar({ dict }: { dict: any }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const { lang } = useParams() as { lang?: string };
  const isArabic = lang === "ar";

  
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLang = isArabic ? "en" : "ar";
  
    const segments = pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <>
      <div className="w-full bg-gradient-to-l from-[#f8f4f0] to-[#f8e6bc]
                      fixed top-0 z-20 shadow-md">
        <div className="flex items-center h-18 justify-between px-4 md:px-8">
          {/* Logo */}
          <div>
            <Link href="/">
              {/* <Image src="/images/navbar/ceo.webp" alt="Logo" width={40} height={40} /> */}
              <Image src="/images/navbar/ceo.webp" alt="Logo" width={40} height={40} />
            </Link>
          </div>

          {/* Links - Desktop */}
          <div className="hidden md:flex text-gray-500">
            <ScrollLink
              to="home"
              smooth
              duration={800}
              offset={-70}
              className="me-4 font-extrabold transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              {dict.navbar_home}
            </ScrollLink>

            <ScrollLink
              to="about"
              smooth
              duration={800}
              offset={-70}
              className="me-4 font-extrabold transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              {dict.navbar_about}
            </ScrollLink>

            <ScrollLink
              to="services"
              smooth
              duration={800}
              offset={-70}
              className="me-4 font-extrabold transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              {dict.navbar_service}
            </ScrollLink>

            <ScrollLink
              to="pricing"
              smooth
              duration={800}
              offset={-70}
              className="me-4 font-extrabold transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              {dict.navbar_pricing}
            </ScrollLink>

            <ScrollLink
              to="team"
              smooth
              duration={800}
              offset={-70}
              className="me-4 font-extrabold transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              {dict.navbar_team}
            </ScrollLink>
            <span
              onClick={() => setIsOpen(true)}
              className="me-4 font-extrabold transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              {dict.navbar_contact}
            </span>
            <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
          </div>

          {/* Buttons - Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href="#"
              className="py-2 px-5 rounded bg-amber-400 text-black me-4 font-extrabold 
               transition-all duration-300 ease-in-out 
               hover:bg-amber-300 hover:scale-105 hover:shadow-lg"
            >
              {isArabic ? dict.navbar_login_ar : dict.navbar_login}
            </Link>
            <Link
              href="#"
              className="py-2 px-5 rounded bg-transparent border-2 border-[#FFCC00] text-black hover:bg-[#FFCC00] hover:text-black font-extrabold
               transition-all duration-300 ease-in-out 
                hover:scale-105 hover:shadow-lg"
            >
              {isArabic ? dict.navbar_register_ar : dict.navbar_register}
            </Link>

            {/* زر تغيير اللغة */}
            <button
              onClick={toggleLanguage}
              className="py-2 px-4 rounded bg-transparent ring-2 ring-gray-300 text-black me-4 font-extrabold 
               transition-all duration-300 ease-in-out 
               hover:bg-amber-300 hover:scale-105 hover:shadow-lg ms-2 cursor-pointer"
            >
              {isArabic ? "EN" : "AR"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-2 py-1 rounded bg-amber-400 cursor-pointer text-black"
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="text-white md:hidden flex flex-col items-center py-4 space-y-4 bg-secondary shadow-lg">
            <ScrollLink to="home" smooth duration={800} offset={-70} onClick={() => setMenuOpen(false)}>
              {dict.navbar_home}
            </ScrollLink>
            <ScrollLink to="about" smooth duration={800} offset={-70} onClick={() => setMenuOpen(false)}>
              {dict.navbar_about}
            </ScrollLink>
            <ScrollLink to="services" smooth duration={800} offset={-70} onClick={() => setMenuOpen(false)}>
              {dict.navbar_service}
            </ScrollLink>
            <ScrollLink to="pricing" smooth duration={800} offset={-70} onClick={() => setMenuOpen(false)}>
              {dict.navbar_pricing}
            </ScrollLink>
            <ScrollLink to="team" smooth duration={800} offset={-70} onClick={() => setMenuOpen(false)}>
              {dict.navbar_team}
            </ScrollLink>
            <span
              onClick={() => {
                setMenuOpen(false);
                setIsOpen(true);
              }}
              className="cursor-pointer"
            >
              {dict.navbar_contact}
            </span>
            <Link
              href="#"
              className="p-2 rounded bg-amber-400 text-black w-32 text-center font-extrabold"
            >
              {isArabic ? dict.navbar_login_ar : dict.navbar_login}
            </Link>
            <Link
              href="#"
              className="p-2 rounded bg-transparent border-2 border-[#FFCC00] text-[#FFCC00] hover:bg-[#FFCC00] hover:text-black w-32 text-center
              font-extrabold transition-all duration-300 ease-in-out"
            >
              {isArabic ? dict.navbar_register_ar : dict.navbar_register}
            </Link>

            {/* زر تغيير اللغة موبايل */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded bg-amber-400 text-black me-4 font-extrabold 
               transition-all duration-300 ease-in-out 
               hover:bg-amber-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              {isArabic ? "EN" : "AR"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

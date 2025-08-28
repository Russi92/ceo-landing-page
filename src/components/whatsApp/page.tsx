"use client";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useParams } from "next/navigation";

export default function WhatsAppButton({ dict }: { dict: any }) {
  const [hovered, setHovered] = useState(false);

  const { lang } = useParams() as { lang?: string };
  const isArabic = lang === "ar";

  return (
    <a
      href="https://wa.me/+966510222999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-10 flex items-center gap-2 
                 border-2 border-green-500 rounded-full px-4 py-2 
                 shadow-lg cursor-pointer transition-all duration-300 bg-white z-20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <FaWhatsapp className="text-green-500 text-2xl" />

      <span
        className={`font-semibold transition-all duration-300 ${
          hovered ? "text-green-600" : "text-black"
        }`}
      >
        {hovered
          ? isArabic
            ? dict.section_whatsapp_hover_ar
            : dict.section_whatsapp_hover
          : isArabic
          ? dict.section_whatsapp_ar
          : dict.section_whatsapp}
      </span>
    </a>
  );
}

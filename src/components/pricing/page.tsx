"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";

const plans = [
  { 
    range: "1 - 15 ", 
    price: 22, 
    total: 330 
   },
  { 
    range: "1 - 40", 
    price: 19, 
    total: 760 
   },
  { 
    range: "1 - 70 ", 
    price: 16, 
    total: 1120 
   },
  { 
    range: "1 - 120 ", 
    price: 14, 
    total: 1680 
   },
  { 
    range: "1 - 220 ", 
    price: 12, 
    total: 2640 
    },
  { 
    range: "1 - 500 ", 
    price: 9, 
    total: 4500 
    },
  { 
    range: "1 - 1000 ", 
    price: 7, 
    total: 7000 
    },
  { 
    range: "1 - 2000 ", 
    price: 5, 
    total: 10000 
    },
  { 
    range: "1 - 100,000 ", 
    price: 3, 
    total: 300000 
    },
];

export default function Pricing({ dict }: { dict: any }) {
  const [yearly, setYearly] = useState(false);

  const formatPrice = (plan: any, dict: any, isArabic: boolean, yearly: boolean) => {
    if (!yearly) {
      return `${plan.total}${isArabic ? dict.pricing_dollar_icon_ar : dict.pricing_dollar_icon} ${
        isArabic ? dict.pricing_button_monthly_ar : dict.pricing_button_monthly
      }`;
    }
  
    const yearlyPrice = plan.total * 12 * 0.9;
    return `${yearlyPrice.toLocaleString()}${isArabic ? dict.pricing_dollar_icon_ar : dict.pricing_dollar_icon} ${
      isArabic ? dict.pricing_button_yearly_ar : dict.pricing_button_yearly
    }`;
  };
  

  const { lang } = useParams() as { lang?: string };
  const isArabic = lang === "ar";

  return (
    <section id="pricing" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold ">{isArabic ? dict.pricing_title_ar : dict.pricing_title}</h2>
        <p className="text-gray-400 mt-2">
      {isArabic ? dict.pricing_subtitle_ar.text : dict.pricing_subtitle.text}{" "}
      <span className="font-semibold text-primary">
        {isArabic ? dict.pricing_subtitle_ar.highlight : dict.pricing_subtitle.highlight}
      </span>{" "}
      {isArabic ? dict.pricing_subtitle_ar.after : dict.pricing_subtitle.after}
    </p>
      </div>

      {/* Toggle Monthly / Yearly */}
      <div className="flex justify-center mb-10">
        <div className="bg-secondary shadow rounded-full p-1 flex gap-2">
          <button
            onClick={() => setYearly(false)}
            className={`px-6 py-2 rounded-full cursor-pointer transition ${
              !yearly
                ? "bg-gradient-to-r from-[#997A00] to-[#FFCC00] text-secondary"
                : "text-gray-400"
            }`}
          >
            
            {isArabic ? dict.pricing_button_monthly_ar : dict.pricing_button_monthly}
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`px-6 py-2 rounded-full cursor-pointer  transition ${
              yearly
                ? "bg-gradient-to-r from-[#997A00] to-[#FFCC00] text-secondary"
                : "text-gray-400"
            }`}
          >
            {isArabic ? dict.pricing_button_yearly_ar : dict.pricing_button_yearly}
          </button>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-secondary/50 shadow rounded-2xl p-6 flex flex-col hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
            {isArabic ? dict.pricing_emp_ar : dict.pricing_emp} {" "}
              {plan.range}
            </h3>
            <p className="text-lg font-semibold">
              {formatPrice(plan, dict, isArabic, yearly)}
            </p>

            <p className="text-gray-400 text-sm mb-6">
              {plan.price}{isArabic ? dict.pricing_dollar_icon_ar : dict.pricing_dollar_icon}{" "}
              {isArabic ? dict.pricing_per_employee_ar : dict.pricing_per_employee}
            </p>

            <button className="mt-auto bg-gradient-to-r from-[#997A00] to-[#FFCC00] text-secondary py-2 rounded-xl 
            hover:opacity-90 hover:font-extrabold transition-all duration-300 ease-in-out cursor-pointer ">
              {isArabic ? dict.pricing_subscribe_ar : dict.pricing_subscribe}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// "use client";

// import ceo from "../../../public/images/ceo_circles.svg";
// import Image from "next/image";
// import PrimaryButton from "../common/PrimaryButton";

// export default function WhoAreWe() {
//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-20">
//       <div className="relative min-h-[600px]">
//         <Image src={ceo} className="animate-pulse" alt="circle logo" />
//       </div>

//       <div className="flex flex-col justify-center gap-5">
//         <h3 className="text-primary text-8xl"> WHO ARE WE</h3>
//         <p className="text-3xl">
//           Khallaba offers a unique experience for businesses through a
//           multi-service application for executive control, business solutions,
//           and highly dynamic reporting management — enabling faster task
//           completion and better workflow regulation.
//         </p>
//         <p className="text-3xl">
//           Khallaba offers a unique experience for businesses through a
//           multi-service application for executive control, business solutions,
//           and highly dynamic reporting management — enabling faster task
//           completion and better workflow regulation.
//         </p>
//         <PrimaryButton>
//             KNOW MORE   
//         </PrimaryButton>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";
// import PrimaryButton from "../common/PrimaryButton";
// import ceo from "../../../public/images/ceo_circles.svg";
// import Image from "next/image";

// export default function WhoAreWe({dict} : {dict: any}) {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-10 p-20">

// <div className="relative min-h-[600px]">
//         <Image src={ceo} className="animate-pulse" alt="circle logo" />
//      </div>

//     <div className="flex flex-col justify-center gap-5">
//       <h3 className="text-primary text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
//       {dict.who_title}
//       </h3>

//       <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
//       {dict.who_description}
//       </p>

//       {/* الفقرة التانية بتظهر / تختفي */}
//       {showMore && (
//         <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-500 ease-in-out">
//           {dict.who_description}
//         </p>
//       )}

//       {/* الزرار */}
//       <PrimaryButton onClick={() => setShowMore(!showMore)}>
//         {showMore ? dict.who_buttonـless : dict.who_buttonـmore}
//       </PrimaryButton>
//     </div>
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import PrimaryButton from "../../components/common/PrimaryButton";
// import ceo from "../../../../public/images/ceo_circles.svg";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaFilePdf } from "react-icons/fa";

export default function WhoAreWe({ dict }: { dict: any }) {
  const [showMore, setShowMore] = useState(false);


 
  const { lang } = useParams() as { lang?: string };
  const isArabic = lang === "ar";

  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-10 p-20">
      <div className="relative min-h-[600px]">
        <Image fill src="/images/ceo_circles.svg"  className="animate-pulse" alt="circle logo" />
      </div>

      <div className="flex flex-col justify-center gap-5">
        <h3 className="text-primary text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
          {isArabic ? dict.who_title_ar : dict.who_title}
        </h3>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {isArabic ? dict.who_description_ar : dict.who_description}
        </p>

        {showMore && (
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-500 ease-in-out">
            {isArabic ? dict.who_description_ar : dict.who_description}
          </p>
        )}

      <div className="flex flex-col sm:flex-row  gap-4">
        <div>
          <PrimaryButton onClick={() => setShowMore(!showMore)}>
            {showMore
              ? isArabic
                ? dict.who_button_less_ar
                : dict.who_button_less
              : isArabic
                ? dict.who_button_more_ar
                : dict.who_button_more}
          </PrimaryButton>
        </div>

        <div>
        <PrimaryButton className="flex items-center gap-2">
          <FaFilePdf className="text-sm" />
          <span>
            {isArabic ? dict.who_button_download_ar : dict.who_button_download}
          </span>
        </PrimaryButton>
        </div>

        <div>
        <PrimaryButton className="flex items-center gap-2">
          <FaFilePdf className="text-sm" />
          <span>
            {isArabic ? dict.who_button_download_ar : dict.who_button_download}
          </span>
        </PrimaryButton>
        </div>
      </div>
      </div>
    </section>
  );
}

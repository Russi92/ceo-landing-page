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

// "use client";

// import { useState } from "react";
// import PrimaryButton from "../../components/common/PrimaryButton";
// // import ceo from "../../../../public/images/ceo_circles.svg";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import { FaFilePdf } from "react-icons/fa";

// export default function WhoAreWe({ dict }: { dict: any }) {
//   const [showMore, setShowMore] = useState(false);

//   const { lang } = useParams() as { lang?: string };
//   const isArabic = lang === "ar";

//   return (
//     <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-10 p-20">
//       <div className="relative min-h-[600px]">
//         <Image fill src="/images/ceo_circles.svg"  className="animate-pulse" alt="circle logo" />
//       </div>

//       <div className="flex flex-col justify-center gap-5">
//         <h3 className="text-primary text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
//           {isArabic ? dict.who_title_ar : dict.who_title}
//         </h3>

//         <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
//           {isArabic ? dict.who_description_ar : dict.who_description}
//         </p>

//         {showMore && (
//           <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-500 ease-in-out">
//             {isArabic ? dict.who_description_ar : dict.who_description}
//           </p>
//         )}

//       <div className="flex flex-col sm:flex-row  gap-4">
//         <div>
//           <PrimaryButton onClick={() => setShowMore(!showMore)}>
//             {showMore
//               ? isArabic
//                 ? dict.who_button_less_ar
//                 : dict.who_button_less
//               : isArabic
//                 ? dict.who_button_more_ar
//                 : dict.who_button_more}
//           </PrimaryButton>
//         </div>

//         <div>
//         <PrimaryButton className="flex items-center gap-2">
//           <FaFilePdf className="text-sm" />
//           <span>
//             {isArabic ? dict.who_button_download_ar : dict.who_button_download}
//           </span>
//         </PrimaryButton>
//         </div>

//         <div>
//         <PrimaryButton className="flex items-center gap-2">
//           <FaFilePdf className="text-sm" />
//           <span>
//             {isArabic ? dict.who_button_download_ar : dict.who_button_download}
//           </span>
//         </PrimaryButton>
//         </div>
//       </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useState } from "react";
import PrimaryButton from "../../components/common/PrimaryButton";
// import ceo from "../../../../public/images/ceo_circles.svg";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaFilePdf, FaVideo, FaImage } from "react-icons/fa";

export default function WhoAreWe({ dict }: { dict: any }) {

  const [showMore, setShowMore] = useState(false);

  const [showImagePopup , setShowImagePopup] = useState(false);

  const [showVideoPopup , setShowVideoPopup] = useState (false);

  const [popupMediaUrl , setPopupMediaUrl] = useState("");

  const { lang } = useParams() as { lang?: string };
  const isArabic = lang === "ar";

  const who = [
    {
      id : 1,
      imageUrl : "/images/c.png",
      videoUrl : "https://www.youtube.com/embed/mmeLCAP74KA",
      pdfUrl : "/assets/sample.pdf"
    }
  ]

  const handleImageClick = (url : string) => {
    setPopupMediaUrl(url);
    setShowImagePopup(true);
  }

  const handleVideoClick = (url : string) => {
    setPopupMediaUrl(url);
    setShowVideoPopup(true);
  }

  const closePopup = () => {
    setShowImagePopup(false)
    setShowVideoPopup(false);
    setPopupMediaUrl("");
  }

  return (
    <section id="about" className={`grid grid-cols-1 md:grid-cols-2 gap-10 p-20`}>
      <div className="relative min-h-[600px]">
        <Image
          fill
          src="/images/ceo_circles.svg"
          className="animate-pulse"
          alt="circle logo"
        />
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

        <div className="flex flex-col sm:flex-row gap-4">
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

          {who.map((person, index) => (
            <div key={index} className="flex gap-3 items-center">
              <button className="rounded-full w-[30px] cursor-pointer h-[30px] flex items-center justify-center bg-red-600 text-white hover:opacity-80"
                      onClick={() => handleVideoClick(person.videoUrl)}
              >
                <FaVideo />
              </button>
              <button className="rounded-full w-[30px] cursor-pointer h-[30px] flex items-center justify-center bg-blue-600 text-white hover:opacity-80"
                      onClick={() => handleImageClick (person.imageUrl)}
              >
                <FaImage />
              </button>
              <a href={person.pdfUrl} download className="rounded-full w-[30px] cursor-pointer h-[30px] flex items-center justify-center bg-green-600 text-white hover:opacity-80">
                <FaFilePdf />
              </a>
            </div>
          ))}

        </div>
      </div>
      
      {/* Popups */}
      {showImagePopup && (
        <div
        className="fixed inset-0 bg-transparent backdrop-blur-lg z-50 flex items-center justify-center p-4"
        onClick={closePopup}
    >
          <div 
            className="max-w-full md:max-w-4xl max-h-full overflow-y-auto bg-white/80 p-10 rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={popupMediaUrl}
              alt="Popup Image"
              width={500}
              height={500}
              className="w-full h-auto object-contain rounded-lg"
            />
            <button
              onClick={closePopup}
              className="cursor-pointer absolute top-2 right-2 text-white text-xl font-bold bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {showVideoPopup && (
        <div 
          className="fixed inset-5 bg-transparent backdrop-blur-lg bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closePopup}
        >
          <div 
            className="w-full max-w-4xl h-auto"
            style={{ paddingTop: '56.25%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={popupMediaUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white cursor-pointer text-xl font-bold bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center"
            >
              &times;
            </button>
          </div>
        </div>
      )}

    </section>
  );
}





// "use client";
// import { useState, ChangeEvent, FormEvent } from "react";

// interface ContactModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     message: "",
//   });

//   if (!isOpen) return null; // لو مش مفتوح ميظهرش

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     onClose(); // يقفل البوب اب بعد الإرسال
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className=" rounded-2xl shadow-xl p-8 bg-secondary/80 relative animate-fade-in">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
//         >
//           ✖
//         </button>
//         <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows={4}
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
//             required
//           ></textarea>

//           <button
//             type="submit"
//             className="w-full bg-amber-400 text-black px-4 py-2 rounded-lg transition cursor-pointer font-bold"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }




// "use client";
// import { useState, ChangeEvent, FormEvent } from "react";

// interface ContactModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// interface FormData {
//   name: string;
//   email: string;
//   country: string;
//   phone: string;
//   message: string;
// }

// export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     country: "",
//     phone: "",
//     message: "",
//   });
//   const [successMsg, setSuccessMsg] = useState(false);

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);

//     // reset form
//     setFormData({ name: "", email: "" , country : "" ,phone : "", message: ""});

//     onClose(); // close modal
//     setSuccessMsg(true); // show success message

//     setTimeout(() => {
//       setSuccessMsg(false); // hide after 3s
//     }, 3000);
//   };

//   return (
//     <>
//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="rounded-2xl shadow-xl p-8 bg-secondary/80 relative animate-fade-in">
//             <button
//               onClick={onClose}
//               className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
//             >
//               ✖
//             </button>
//             <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
//                 required
//               />
//                 <input
//                 type="text"
//                 name="phone"
//                 placeholder="Enter Your Phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
//                 required
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
//                 required
//               />

//               <input
//                 type="text"
//                 name="country"
//                 placeholder="Enter Your country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
//                 required
//               />

//               <textarea
//                 name="message"
//                 placeholder="Enter Your Message"
//                 rows={4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none resize-none"
//                 required
//               ></textarea>

//               <button
//                 type="submit"
//                 className="w-full bg-amber-400 text-black px-4 py-2 rounded-lg transition cursor-pointer font-bold"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Success Message in center */}
//       {successMsg && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-amber-400 text-black px-6 py-4 rounded-2xl shadow-xl text-lg font-semibold animate-fade-in">
//             Message sent successfully ✅
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  country: string;
  phone: string;
  message: string;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });
  const [successMsg, setSuccessMsg] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // reset form
    setFormData({
      name: "",
      email: "",
      country: "",
      phone: "",
      message: "",
    });

    // ✅ اعرض رسالة النجاح الأول
    setSuccessMsg(true);

    // ✅ خلي المودال يقفل بعد 500ms مش فورًا
    setTimeout(() => {
      onClose();
    }, 500);

    // ✅ اخفي الرسالة بعد 3 ثواني
    setTimeout(() => {
      setSuccessMsg(false);
    }, 3000);
  };

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="rounded-2xl shadow-xl p-8 bg-white relative animate-fade-in w-full max-w-lg">
            <button
              onClick={onClose}
              type="button"
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Enter Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
                required
              />

              <input
                type="text"
                name="country"
                placeholder="Enter Your Country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
                required
              />

              <textarea
                name="message"
                placeholder="Enter Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-400 outline-none resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-amber-400 text-black px-4 py-2 rounded-lg transition cursor-pointer font-bold hover:bg-amber-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {successMsg && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-amber-400 text-black px-6 py-4 rounded-2xl shadow-xl text-lg font-semibold animate-fade-in">
            ✅ Message sent successfully
          </div>
        </div>
      )}
    </>
  );
}


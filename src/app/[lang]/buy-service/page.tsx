

'use client';

import Image from 'next/image';

export default function BuyServicePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className='font-extrabold mb-10 text-3xl sm:text-4xl lg:text-5xl text-center'>Service Details</div>
      <div className="bg-[#f1daa5] rounded-xl shadow-md overflow-hidden w-full max-w-4xl transition-transform duration-500 hover:scale-105">
        
        
        <div className="md:flex md:flex-row-reverse">
        
        <div className="md:w-1/2 relative h-80 md:h-auto flex items-center justify-center">
  <Image
    src="/images/invoice.webp"
    alt="Service Image"
    height={500}
    width={500}
    className="rounded-t-xl md:rounded-t-none md:rounded-r-xl"
  />
</div>

         
          <div className="md:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center text-center md:text-start">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight text-center">
              Card 1
            </h1>
            
            
            <ul className="list-disc list-inside text-gray-500 mt-3 space-y-1 text-sm sm:text-base w-full
              overflow-y-auto max-h-[20rem] pr-2 custom-scrollbar mb-5">
              <li>Lorem, ipsum dolor sit amet consectetur </li>
              <li>Lorem, ipsum dolor sit amet consectetur </li>
              <li>Lorem, ipsum dolor sit amet consectetur </li>
              <li>Lorem, ipsum dolor sit amet consectetur </li>
              <li>Lorem, ipsum dolor sit amet consectetur </li>
            </ul>
            
            <div className=" sm:text-xl font-bold mb-6 sm:mb-8">
              Price : 500 SAR
            </div>
            
            <button
              className="text-gray-500 border border-gray-400 font-bold px-4 py-2 rounded-lg mt-auto 
              hover:bg-primary hover:text-black transition duration-300 w-full cursor-pointer"
              onClick={() => alert('Clicked')}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
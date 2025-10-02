import React from 'react';
import PreventionImg from "../Banner/bermasker.png"; 
import { FaHandsWash, FaHeadSideMask, FaPeopleArrows } from "react-icons/fa";

const Banner = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref} 
      className='min-h-[550px] flex justify-center items-center py-12 sm:py-0 mb-20'
    >
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>

          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={PreventionImg}
              alt="Pencegahan Covid"
              className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
            />
          </div>

          {/* text details section */}
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 className='text-3xl sm:text-4xl font-bold'>
              Pencegahan COVID-19
            </h1>
          </div>

          <p className='text-center text-gray-500 tracking-center leading-5'>
            Pencegahan COVID-19 sangat penting untuk melindungi diri sendiri 
            dan orang lain. Dengan melakukan langkah-langkah sederhana setiap hari, 
            kita bisa mengurangi risiko penyebaran virus.
          </p>

          <div className='flex flex-col gap-4'>
            <div data-aos="fade-up" className='flex items-center gap-4'>
              <FaHeadSideMask className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
              <p>
                Selalu gunakan masker ketika berada di tempat umum atau saat berinteraksi dengan orang lain.
              </p>
            </div>

            <div data-aos="fade-up" className='flex items-center gap-4'>
              <FaHandsWash className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-100 dark:bg-blue-400' />
              <p>
                Rajin mencuci tangan dengan sabun dan air mengalir minimal 20 detik, atau gunakan hand sanitizer.
              </p>
            </div>

            <div data-aos="fade-up" className='flex items-center gap-4'>
              <FaPeopleArrows className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400' />
              <p>
                Jaga jarak minimal 1-2 meter dari orang lain dan hindari kerumunan untuk meminimalisir risiko.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
});

export default Banner;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Image1 from "../../assets/hero/virus.png.png";
import Image2 from "../../assets/hero/Corona1.png";
import Image3 from "../../assets/hero/Corona3.png";
import Slider from "react-slick";

const Hero = () => {
  // state awal untuk slider
  const [imageList, setImageList] = useState([
    {
      id: 1,
      img: Image1,
      title: "Corona",
      Description:
        "Virus corona adalah kelompok virus yang menyerang sistem pernapasan manusia maupun hewan. Disebut “corona” karena permukaannya memiliki tonjolan mirip mahkota saat dilihat dengan mikroskop elektron. Pada manusia, virus ini dapat menyebabkan penyakit ringan seperti flu hingga penyakit berat seperti SARS, MERS, dan COVID-19.",
    },
    {
      id: 2,
      img: Image2,
      title: "SARS-CoV",
      Description:
        "Virus corona yang muncul tahun 2002 di Tiongkok, penyebab penyakit SARS (Sindrom Pernapasan Akut Berat). Gejalanya demam tinggi, batuk kering, dan sesak napas. Tingkat kematian sekitar 10%.",
    },
    {
      id: 3,
      img: Image3,
      title: "MERS-CoV",
      Description:
        "Virus corona yang muncul tahun 2012 di Arab Saudi, penyebab penyakit MERS (Sindrom Pernapasan Timur Tengah). Sumber utamanya unta dromedaris. Gejalanya demam, batuk, dan pneumonia berat. Tingkat kematian sekitar 30%.",
    },
  ]);


  // setting slider react-slick
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='relative overflow-hidden min-h-[500px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
      {/* background pattern */}
      <div className='h-[700px] w-[700px] bg-red-600 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>

      {/* hero section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {imageList.map((data) => (
            <div key={data.id}>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* text content section */}
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className='text-5xl sm:text-6xl lg:text-7xl font-bold'
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className='text-sm'
                  >
                    {data.Description}
                  </p>
                  <div
                    data-aos="fadeup"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    
                  </div>
                </div>

                {/* image section */}
                <div className='order-1 sm:order-2'>
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className='relative z-10'
                  >
                    <img
                      src={data.img}
                      alt={data.title}
                      className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-55 lg:scale-120 object-contain mx-auto'
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

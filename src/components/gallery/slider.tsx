"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

export default function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}

      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
    
      }}
      loop={true}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      effect="fade"
      className="h-full w-full"
    >
      <SwiperSlide>
        <ImageCard img="/gallery/1.png" alt="MOCOWW" />
      </SwiperSlide>
      <SwiperSlide>
      <ImageCard img="/gallery/2.png" alt="ron"  />
      </SwiperSlide>
      <SwiperSlide>
      <ImageCard img="/gallery/3.png" alt="Mo"  />
      </SwiperSlide>


    </Swiper>
  );
}

interface ImgProps {
  img: string
  alt: string
}

function ImageCard({img, alt} :ImgProps) {
  return (
    <div className="h-full w-full flex bg-white justify-center items-center text-black relative">
      <Image src={img} alt={alt} fill    />
    </div>
  );
}

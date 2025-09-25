"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import banner from "@/public/banner.webp";
import banner1 from "@/public/banner1.webp";

const slides = [
  { id: 1, image: banner },
  { id: 2, image: banner1 },
  { id: 3, image: banner },
  { id: 4, image: banner1 },
];

export default function BannerSlider() {
  return (
    <section className="w-full relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-full">
              <Image
                src={slide.image}
                fill
                priority
                alt="Banner"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Hide arrows & dots */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev,
        .swiper-pagination {
          display: none !important;
        }
      `}</style>
    </section>
  );
}

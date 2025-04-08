"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TestimonialSlider({ testimonials }) {
  const [swiper, setSwiper] = useState(null);

  return (
    <div className="relative testimonials-slider px-4 lg:px-0">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        onSwiper={setSwiper}
        navigation={false}
        className="pb-16"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-[#FDF4F7] rounded-2xl p-8 shadow-sm h-full">
              <div className="mb-6">
                <div className="mb-6">
                  <Image
                    src="/home/testimonialIcon.png"
                    alt="Testimonial"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-6 border-t border-gray-100 pt-6">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold text-[#421520]">
                  {testimonial.author}
                </h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation and Pagination Container */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={() => swiper?.slidePrev()}
          className="bg-transparent w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FDF4F7] transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 text-[#421520]" />
        </button>
        <div className="swiper-pagination"></div>
        <button
          onClick={() => swiper?.slideNext()}
          className="bg-transparent w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FDF4F7] transition-colors cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 text-[#421520]" />
        </button>
      </div>

      <style jsx global>{`
        .testimonials-slider .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
          width: auto !important;
          min-width: 120px;
        }

        .testimonials-slider .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #f8b8cc;
          opacity: 1;
          transition: all 300ms ease;
          margin: 0 4px !important;
        }

        .testimonials-slider .swiper-pagination-bullet-active {
          background: #c7597f;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}

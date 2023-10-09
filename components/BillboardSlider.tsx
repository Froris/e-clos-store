'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Billboard as BillboardData } from '@/types';

interface SliderProps {
  slides: BillboardData[];
}

export const BillboardSlider: React.FC<SliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 7600);

    return () => {
      clearInterval(timer);
    };
  }, [currentSlide, slides.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const imgsArr = slides.map((slide, index) => (
    <Image
      key={slide.cloudinaryImageId}
      src={slide.imageUrl}
      alt={`Billboard slide ${index + 1}`}
      fill
      className={`object-cover rounded-md animate-fadeIn animate-fadeInOut`}
    />
  ));

  return (
    <div className='relative p-4 sm:p-6 lg:p-8 rounded-xl aspect-square md:aspect-[2.4/1]'>
      {imgsArr[currentSlide]}

      <div className='absolute bottom-[-30px] left-0 w-full flex justify-center space-x-2 z-50'>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => handleSlideChange(index)}
            className={`h-4 w-4 rounded-full focus:outline-none transition-colors duration-300 
            ${
              index === currentSlide ? 'bg-black' : 'bg-gray-400'
            } hover:bg-indigo-400`}
          />
        ))}
      </div>
    </div>
  );
};

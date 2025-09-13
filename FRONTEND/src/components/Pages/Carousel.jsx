import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Carousel = ({
  children: sliders,
  autoSlide = true,
  autoSlideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex == 0 ? sliders.length - 1 : currentIndex - 1
    );
  };

  const next = () =>
    setCurrentIndex((currentIndex) =>
      currentIndex === sliders.length - 1 ? 0 : currentIndex + 1
    );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, currentIndex]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliders}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button onClick={prev} className="hover:bg-gray-200 p-2 rounded-full">
          <FaChevronLeft />
        </button>
        <button onClick={next} className="hover:bg-gray-200 p-2 rounded-full">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

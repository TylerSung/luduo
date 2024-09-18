"use client";
// components/FullScreenCarousel.tsx
import Image from "next/image";
import { FC, TouchEvent, useEffect, useState } from "react";

interface Slide {
  id: number;
  image: string;
  alt: string;
}

interface CarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const FullScreenCarousel: FC<CarouselProps> = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // 自动播放
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [current, autoPlay, autoPlayInterval, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, length]);

  // 触摸事件处理
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // 向左滑动
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // 向右滑动
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      aria-roledescription="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 relative h-full"
            aria-hidden={current !== slide.id - 1}>
            <Image
              src={slide.image}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* 左箭头 */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
        aria-label="Previous Slide">
        &#10094;
      </button>

      {/* 右箭头 */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
        aria-label="Next Slide">
        &#10095;
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            } hover:bg-white transition`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FullScreenCarousel;

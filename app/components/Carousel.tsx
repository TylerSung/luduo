// components/Carousel.tsx
import React, { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = false,
  autoPlayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  // 自动播放效果
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, length]);

  // 键盘导航
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    } else if (e.key === "ArrowRight") {
      setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      tabIndex={0}
      onKeyDown={handleKeyDown}>
      {/* 幻灯片容器 */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div className="min-w-full" key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* 左侧导航按钮 */}
      <button
        aria-label="Previous Slide"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={() =>
          setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
        }>
        &lt;
      </button>

      {/* 右侧导航按钮 */}
      <button
        aria-label="Next Slide"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={() =>
          setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
        }>
        &gt;
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

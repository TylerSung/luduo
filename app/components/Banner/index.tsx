"use client";
import type { NextPage } from "next";
import Carousel from "./BannerCarousel";

const Home: NextPage = () => {
  const slides = [
    { id: 1, image: "/image/banner/1.jpg", alt: "Slide 1" },
    { id: 2, image: "/image/banner/2.jpg", alt: "Slide 2" },
    { id: 3, image: "/image/banner/3.jpg", alt: "Slide 3" },
    // 添加更多幻灯片
  ];

  return (
    <div className="min-h-screen min-w-full ">
      <Carousel slides={slides} autoPlay={true} autoPlayInterval={5000} />
    </div>
  );
};

export default Home;

"use client";
import { useState } from "react";
import Card from "./Card";
import { CardItem, CardType } from "./CardItem";

const Index: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const showMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const isAllVisible = visibleCount >= CardItem.length;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {CardItem.slice(0, visibleCount).map((item: CardType) => (
          <Card key={item.id} img={item.img} title={item.title} />
        ))}
      </div>
      {!isAllVisible && (
        <div className="flex justify-center mt-4">
          <button
            onClick={showMore}
            className="px-20 py-4 bg-slate-600   text-white rounded hover:bg-slate-900">
            查看更多
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;

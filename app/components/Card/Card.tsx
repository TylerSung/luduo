// components/Card.tsx
import Image from "next/image";

interface CardProps {
  img: string | null;
  title: string;
}

const Card: React.FC<CardProps> = ({ img, title }) => {
  return (
    <div className="w-full hover:shadow-xl p-4 bg-white rounded">
      <div className="w-full h-48 relative">
        {img ? (
          <Image src={img} alt={title} layout="fill" objectFit="cover" />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span>暂无图片</span>
          </div>
        )}
      </div>
      <h3 className="mt-2 text-center text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default Card;

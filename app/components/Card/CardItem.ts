// components/CardItem.ts
export interface CardType {
  id: number;
  title: string;
  img: string | null;
}

export const CardItem: CardType[] = [
  {
    id: 1,
    title: "办公桌",
    img: "/image/ful/1.jpg",
  },
  {
    id: 2,
    title: "办公椅",
    img: "/image/ful/2.jpg",
  },
  {
    id: 3,
    title: "文件柜",
    img: "/image/ful/3.jpg",
  },
  {
    id: 4,
    title: "沙发",
    img: "/image/ful/4.jpg",
  },
  {
    id: 5,
    title: "会议桌",
    img: "/image/ful/1.jpg",
  },
  {
    id: 6,
    title: "系统类",
    img: "/image/ful/1.jpg",
  },
  {
    id: 7,
    title: "医养家具",
    img: "/image/ful/1.jpg",
  },
  {
    id: 8,
    title: "教育家具",
    img: "/image/ful/1.jpg",
  },
];

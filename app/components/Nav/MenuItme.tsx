// MenuItem.tsx
import { PhoneCall } from "lucide-react";
import React from "react";
export interface MenuItemType {
  name: string;
  path: string;
  icon: React.ReactNode | null; // 允许 icon 为 null
}

export const MenuItem: MenuItemType[] = [
  {
    name: "产品中心",
    path: "/",
    icon: null,
  },
  {
    name: "案例",
    path: "/case",
    icon: null,
  },
  {
    name: "关于我们",
    path: "/about",
    icon: null,
  },
  {
    name: "新闻中心",
    path: "/news",
    icon: null,
  },
  {
    name: "联系我们",
    path: "/contact",
    icon: <PhoneCall size={18} />, // 使用 size 属性
  },
];

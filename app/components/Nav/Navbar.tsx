import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { MenuItem } from "./MenuItme";

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 left-0 right-0 w-full bg-white/60 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            aria-label="Go to homepage"
            className="flex items-center">
            <Logo width={80} height={40} color="#c00000" />
            <h1 className="ml-1 text-3xl font-bold text-primary">鹿多家具</h1>
          </Link>
          <ul className="flex items-center gap-8">
            {MenuItem.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  aria-label={`Navigate to ${item.name}`}
                  className="flex items-center gap-2 text-lg font-bold text-slate-900 hover:text-primary hover:underline hover:underline-offset-8">
                  {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

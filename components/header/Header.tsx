"use client";

import React, { useState, useEffect } from "react";
import { ShoppingCart, Search, X } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/Naturo-Logo.svg";
import Link from "next/link";
import { Phone, Info, HelpCircle } from "lucide-react";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  // Hide top bar after scrolling 10%, show it again if scrolled to top
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.1; // 10% of viewport
      if (window.scrollY > scrollThreshold) {
        setShowTopBar(false); // hide
      } else {
        setShowTopBar(true); // show again at top
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top bar */}
      <div
        className={`bg-[#000F06] text-white text-xs sm:text-sm transition-all duration-300 overflow-hidden ${
          showTopBar ? "max-h-10 md:max-h-10" : "max-h-0"
        } md:block hidden`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Hotline */}
            <span className="flex items-center gap-1">
              <Phone size={14} /> 09639812525
            </span>

            {/* Slogan */}
            <span className="flex items-center gap-1 text-center">
              <Info size={14} /> Discover the Power of Nature with NaturoBD
            </span>

            {/* Customer Help */}
            <span className="flex items-center gap-1 cursor-pointer hover:underline">
              <HelpCircle size={14} /> Customer Help
            </span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-secoundary shadow w-full sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 gap-2 lg:gap-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={Logo}
                alt="NaturoBD Logo"
                width={140}
                height={50}
                priority
                className="w-[140px] h-auto"
              />
            </div>

            {/* Search (desktop) */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="w-full relative">
                <button className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-700">
                  <Search size={20} />
                </button>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-black text-primary font-bold py-2 pl-10 pr-4
                             border-none outline-none focus:outline-none hover:outline-none active:outline-none"
                />
              </div>
            </div>

            {/* Right: Cart + Mobile Search */}
            <div className="flex items-center justify-end gap-4">
              <Link href={"/cart"} className=" text-white relative flex items-center gap-1">
                <div className="relative p-2">
                  <ShoppingCart size={22} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
                    2
                  </span>
                </div>
                Cart
              </Link>

              <button
                className="md:hidden p-2 text-white"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                {searchOpen ? <X size={22} /> : <Search size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile search */}
          {searchOpen && (
            <div className="md:hidden w-full pb-4">
              <div className="relative">
                <button className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-700">
                  <Search size={20} />
                </button>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-black text-green-600 py-2 pl-10 pr-4
                             border-none outline-none focus:outline-none hover:outline-none active:outline-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

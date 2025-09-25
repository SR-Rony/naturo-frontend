"use client";
import { useState, useEffect } from "react";
import { ProductCard } from "../ProductItem";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sampleProducts = [
  { id: "1", name: "কালোজিরা ও খলিশা ফুলের মধুর কম্বো ", price: 350, regularPrice: 500, image: "https://pub-b80211003304448e8a7f0edc480f0608.r2.dev/B%20(1)_KMG5awonw.webp" },
  { id: "2", name: "প্রিমিয়াম বিটরুট পাউডার । Premium Beetroot Powder", price: 280, regularPrice: 400, image: "https://pub-b80211003304448e8a7f0edc480f0608.r2.dev/01_KMGpjsa5m.webp" },
  { id: "3", name: "কালোজিরা ও খলিশা ফুলের মধুর কম্বো ", price: 150, regularPrice: 200, image: "https://pub-b80211003304448e8a7f0edc480f0608.r2.dev/B%20(1)_KMG5awonw.webp" },
  { id: "4", name: "প্রিমিয়াম বিটরুট পাউডার । Premium Beetroot Powder", price: 150, regularPrice: 200, image: "https://pub-b80211003304448e8a7f0edc480f0608.r2.dev/01_KMGpjsa5m.webp" },
  { id: "5", name: "কালোজিরা ও খলিশা ফুলের মধুর কম্বো ", price: 600, regularPrice: 800, image: "https://pub-b80211003304448e8a7f0edc480f0608.r2.dev/B%20(1)_KMG5awonw.webp" },
  { id: "6", name: "প্রিমিয়াম বিটরুট পাউডার । Premium Beetroot Powder", price: 600, regularPrice: 800, image: "https://pub-b80211003304448e8a7f0edc480f0608.r2.dev/01_KMGpjsa5m.webp" },
];

// function to get visible items per screen
function getVisible() {
  if (typeof window === "undefined") return 1; // mobile default
  if (window.innerWidth >= 1024) return 5; // large screen -> 5 items
  if (window.innerWidth >= 768) return 3; // medium screen -> 3 items
  return 1; // mobile -> 1 item
}

export function Honey() {
  const [visible, setVisible] = useState(getVisible());
  const [index, setIndex] = useState(getVisible());
  const [isAnimating, setIsAnimating] = useState(true);

  // update visible on resize
  useEffect(() => {
    const handleResize = () => {
      const newVisible = getVisible();
      setVisible(newVisible);
      setIndex(newVisible);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // clone items for infinite loop
  const loopedProducts = [
    ...sampleProducts.slice(-visible),
    ...sampleProducts,
    ...sampleProducts.slice(0, visible),
  ];

  const handleNext = () => {
    setIndex((prev) => prev + 1);
    setIsAnimating(true);
  };

  const handlePrev = () => {
    setIndex((prev) => prev - 1);
    setIsAnimating(true);
  };


  // reset index when at clone edges
  useEffect(() => {
    if (index === loopedProducts.length - visible) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(visible);
      }, 500);
    }
    if (index === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(sampleProducts.length);
      }, 500);
    }
  }, [index, loopedProducts.length, visible]);

  const itemWidth = 100 / visible;

  return (
    <section className="container mx-auto px-4 py-10 relative">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-6">
          <h2>Honey</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-500 flex items-center gap-1 cursor-pointer hover:text-gray-700 transition">
            View more <ChevronRight size={20} />
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="px-2 py-2 bg-gray-200 shadow-sm hover:bg-gray-300 transition rounded-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="px-2 py-2 bg-gray-200 shadow-sm hover:bg-gray-300 transition rounded-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className={`flex ${isAnimating ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${index * itemWidth}%)` }}
          onTransitionEnd={() => setIsAnimating(true)}
        >
          {loopedProducts.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-2 box-border"
              style={{ width: `${itemWidth}%` }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

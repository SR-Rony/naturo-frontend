"use client";
import { Phone } from "lucide-react";

const FloatingCartButton = () => {
  return (
    <button
      className="
        fixed 
        bottom-30 
        right-4 
        bg-red-500 
        text-white 
        p-4 
        rounded-full 
        shadow-lg 
        hover:bg-red-600 
        transition 
        duration-300 
        transform 
        hover:scale-110 
        animate-bounce
        cursor-pointer
      "
    >
      <Phone size={24} />
    </button>
  );
};

export default FloatingCartButton;

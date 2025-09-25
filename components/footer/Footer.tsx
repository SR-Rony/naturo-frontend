"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/public/Naturo-Logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secoundary text-primary pt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start gap-4">
          <Image src={Logo} alt="Naturo Logo" width={140} height={50} />
          <p className="font-semibold">Naturo - BACK TO NATURE</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">Hotline 24/7:</h3>
          <p>09639812525</p>
          <p>Level-5, Noor Tower, 110 Bir Uttam CR Dutta Rd, Dhaka 1205</p>
          <p>naturo@gmail.com</p>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <Link href="#" className="hover:text-green-500">About Us</Link>
          <Link href="#" className="hover:text-green-500">Privacy Policy</Link>
          <Link href="#" className="hover:text-green-500">Terms and Conditions</Link>
          <Link href="#" className="hover:text-green-500">Return and Refund</Link>
          <Link href="#" className="hover:text-green-500">Cookie Policy</Link>
          <Link href="#" className="hover:text-green-500">Sitemap</Link>
        </div>

        {/* Help & Social Media */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">Help & Support</h3>
          <Link href="#" className="hover:text-green-500">Help Center</Link>
          <Link href="#" className="hover:text-green-500">Order Tracking</Link>
          <Link href="#" className="hover:text-green-500">Contact Us</Link>
          <Link href="#" className="hover:text-green-500">How to Order</Link>
          <Link href="#" className="hover:text-green-500">Product Returns</Link>
          <Link href="#" className="hover:text-green-500">FAQ</Link>

          <p className="mt-4">
            Follow us on social media to stay updated with our latest offers.
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-primary pt-4 text-center text-primary text-sm">
        © 2025 Naturo. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

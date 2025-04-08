"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { useCallback } from "react";

export default function Footer() {
  const scrollToTop = useCallback((e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <footer className="bg-[#421520] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Hello Bundle Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/service"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Service
            </Link>
            <Link
              href="/education"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Education
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Got to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 cursor-pointer"
            aria-label="Scroll to top"
          >
            Got To Top
            <ArrowUp
              className="bg-[#833146] text-white rounded-full hover:bg-[#B84A6B] transition-colors w-8 h-8 p-1 animate-bounce"
              size={16}
            />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 border border-[#B84A6B] py-4 px-4 rounded-md bg-[#833146]">
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-300">
              <Link
                href="mailto:hello@hellobundle.com"
                className="hover:text-white transition-colors border border-[#B84A6B] px-3 py-3 rounded flex items-center gap-2"
              >
                <Mail size={16} />
                hello@hellobundle.com
              </Link>
              <Link
                href="tel:+123456789"
                className="hover:text-white transition-colors border border-[#B84A6B] px-3 py-3 rounded flex items-center gap-2"
              >
                <Phone size={16} />
                +123 456 789 00
              </Link>
              <span className="border border-[#B84A6B] px-3 py-3 rounded flex items-center gap-2">
                <MapPin size={16} />
                Somewhere in the World
              </span>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-300">
              © 2025 Hello Bundle. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#69664c] text-white py-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Logo */}
        <div className="text-2xl font-bold tracking-wide">
          LANDMARK<sup>®</sup>
        </div>

        {/* Center Navigation */}
        <nav className="flex space-x-8 text-sm md:text-base font-semibold">
          <a href="/about" className="hover:text-gray-200">About us</a>
          <a href="/properties" className="hover:text-gray-200">Properties</a>
          <a href="/cities" className="hover:text-gray-200">Cities</a>
          <a href="/contact" className="hover:text-gray-200">Contact us</a>
        </nav>

        {/* Right Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.tiktok.com/@landmarkresidences"
            target="_blank"
            className="hover:text-gray-200"
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="https://www.instagram.com/landmarkresidences/"
            target="_blank"
            className="hover:text-gray-200"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="hover:text-gray-200"
          >
            <FaFacebook size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-4 text-xs md:text-sm">
        LANDMARK RESIDENCES<sup>®</sup> 2025 All Rights Reserved.
      </div>
    </footer>
  );
}

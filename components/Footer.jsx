import { FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-black text-white py-10 px-6 md:px-20 border-t border-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Portfolio Section */}
        <div>
        <h3 className="text-xl font-light tracking-wide uppercase ">Landmark<sup>®</sup></h3>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li><a href="/properties" className="hover:text-white">Properties</a></li>
            <li><a href="/" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>

          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold">Need Help?</h3>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li><a href="tel:+19492572019" className="hover:text-white">Phone: (949) 257-2019
            </a></li>
            <li><a href="mailto:info@staylandmark.com" className="hover:text-white">Email: info@staylandmark.com</a></li>
          </ul>
        </div>


        <div className="flex flex-col justify-between items-end">
        <div className="flex space-x-4 mt-3 ">
          <a href="https://www.tiktok.com/@staylandmark" target="_blank" className="text-gray-400 hover:text-white"><FaTiktok size={24} /></a>
          <a href="https://www.instagram.com/staylandmark/" target="_blank" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
        </div>
        <div className="text-center mt-12 text-gray-400">
            <span className="tracking-wide uppercase ">Landmark<sup>®</sup></span> <span>2025 All Rights Reserved.</span>
        </div>

      </div>


      </div>

    </footer>
  );
};

export default Footer;
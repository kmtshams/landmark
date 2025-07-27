'use client'
import ContactForm from '@/components/ContactForm'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { useLazyBackground } from "@/utils/useLazyBackground";

export default function Contact() {
  const bg1 = useLazyBackground("/contactpage/contactusbg.jpg");
  return (
    <main>
      <div
        className="min-h-[150vh] flex items-center justify-center p-8 py-[150px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="w-full bg-[#69664c]/56 max-w-7xl flex flex-col md:flex-row justify-between gap-8 p-8 rounded-md">

          {/* Left: Text + Contact Info */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Our team will be in contact with you soon.
            </h2>
            <p className="text-2xl text-white leading-relaxed mb-6">
              At Landmark Residences, your satisfaction is at the heart of everything we do. From the
              moment you inquire, our dedicated team is committed to delivering a seamless, A-class
              experience tailored to your needs. Whether it’s finding the perfect luxury apartment or
              ensuring every detail of your stay exceeds expectations, we go above and beyond to make
              you feel at home.
            </p>

            <div className="mt-6">
              <h3 className="font-bold text-2xl text-white mb-3">Contact</h3>
              <div className="space-y-3 text-sm text-white">
                <li className="flex gap-2 items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white">
                    <FaPhoneAlt className="text-lg" />
                  </div>
                  <span className='text-2xl'>(949) 257-2019</span>
                </li>
                <li className="flex gap-2 items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white">
                    <MdEmail className="text-lg" />
                  </div>
                  <span className='text-2xl'>info@staylandmark.com</span>
                </li>
                <li className="flex gap-2 items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white">
                    <FaInstagram className="text-lg" />
                  </div>
                  <span className='text-2xl'>@landmarkresidences</span>
                </li>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}

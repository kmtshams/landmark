// import ContactForm from '@/components/ContactForm'

// export default function Contact() {
//   return (
//     <main>
//       <div className="min-h-screen flex items-center justify-center p-8 bg-cover bg-center relative" 
//            style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/1.png)' }}>
//         <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between gap-8">
//           {/* Contact Info Section */}
//           <div className="md:w-[45%] mt-[100px] md:mt-[200px] text-white bg-black/30 backdrop-blur-sm p-10 rounded-lg">
//             <h1 className="mb-4 text-6xl font-bold">Get in touch</h1>
//             <div className="space-y-4 text-lg">
//               <div className="flex flex-col space-y-2">
//                 <a href="tel:+19492572019" className="mb-0">(949) 257-2019</a>
//                 <a href="mailto:info@staylandmark.com" className="mb-0">info@staylandmark.com</a>
//                 <p className="mb-0">2211 Michelson Dr Suite 900<br/>Irvine, CA 92612</p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form Section */}
//           <div className=" md:w-[45%] rounded-lg">
//             <ContactForm />
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// } 

import ContactForm from '@/components/ContactForm'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <main>
      <div
        className="min-h-[150vh] flex items-center justify-center p-8 py-[150px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/contactusbg.jpg')", // replace with your new background image
        }}
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

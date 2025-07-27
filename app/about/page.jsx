'use client'
import Link from "next/link";
import { useLazyBackground } from "@/utils/useLazyBackground";

export default function About() {
  const bg1 = useLazyBackground("/aboutpage/aboutPage1.jpg");
  const bg2 = useLazyBackground("/aboutpage/aboutPage2.jpg");
  return (
    <main>
      <div
        className="min-h-[220vh] bg-cover bg-center flex flex-col items-center justify-start px-6 py-12"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="text-center mb-18 mt-18">
          <h2
            className="text-white text-3xl md:text-5xl font-bold"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
          >
            About us
          </h2>
          <p
            className="text-white text-lg md:text-xl mt-18 tracking-wide uppercase"
            style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
          >
            AT LANDMARK RESIDENCES, WE PROVIDE PREMIUM LUXURY,<br />
            MOVE IN READY HOMES TAILORED FOR:
          </p>
        </div>


        {/* Categories (Buttons) */}
        <div className="grid grid-cols-2 justify-center gap-4 mb-18">
          {["Academia", "Business Travel", "Insurance/Relocation Housing", "Healthcare Heroes"].map(
            (category, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-[10px] bg-[#69664c] text-white font-semibold hover:bg-[#5a5940] transition"
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Description */}
        <div className="max-w-3xl bg-[#69664c]/70 text-white p-6 md:p-8 rounded-md text-justify leading-relaxed mb-18">
          <p className="text-sm md:text-base">
            At Landmark Residences, corporate housing is reimagined—far from the ordinary, we deliver an
            elevated living experience that blends luxury, comfort, and intentional design. Each residence
            is thoughtfully curated with high-end finishes, modern aesthetics, and warm, inviting interiors
            that go beyond functionality to inspire a sense of belonging. We don’t just provide a place to
            stay; we craft an environment where lasting memories are made. Every property is a “landmark”
            in its own right—distinctive, unforgettable, and designed to stand out—because creating
            exceptional living spaces is not just what we do, it’s what we stand for. With every detail
            meticulously considered, our guests enjoy a level of hospitality that exceeds the standard
            five-star experience—this is luxury living, refined for the modern traveler.
          </p>
        </div>

        {/* Connect Button */}
        <Link href="/contact" className="px-6 py-2 text-xl rounded-full bg-[#69664c] text-white font-semibold hover:bg-[#5a5940] transition">
          Connect with us
        </Link>
      </div>

      <div
        className="min-h-[200vh] bg-cover bg-center flex flex-col items-center justify-center px-6 py-12"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        {/* Content Box */}
        <div className="max-w-3xl bg-[#69664c]/70 text-white p-6 md:p-8 rounded-md shadow-lg mb-8 text-sm md:text-base leading-relaxed">
          {/* Insurance / Relocation Housing */}
          <div className="mb-4">
            <h3 className="font-bold uppercase">Insurance/Relocation Housing</h3>
            <p className="mt-1 text-gray-100">
              For policyholders displaced by fire, water damage and companies/families/individuals who are in the process
              of moving and relocating.
            </p>
            <div className=" mt-2 space-y-1">
              <li>Fast placement</li>
              <li>Fully furnished and family-friendly</li>
              <li>All utilities included</li>
              <li>No setup required</li>
              <li>Tailored to your situation</li>
            </div>
          </div>

          {/* Healthcare Heroes */}
          <div className="mb-4">
            <h3 className="font-bold uppercase">Healthcare Heroes</h3>
            <p className="mt-1 text-gray-100">
              Ideal for traveling nurses, doctors, specialists, residents, and other professionals.
            </p>
            <div className="mt-2 space-y-1">
              <li>Located near major hospitals</li>
              <li>Quiet, clean spaces</li>
              <li>Flexible lease terms</li>
            </div>
          </div>

          {/* Academic Housing */}
          <div className="mb-4">
            <h3 className="font-bold uppercase">Academic Housing</h3>
            <p className="mt-1 text-gray-100">Perfect for students, researchers, and faculty.</p>
            <div className=" mt-2 space-y-1">
              <li>Study-ready furnishings</li>
              <li>Month-to-month flexibility</li>
              <li>Close to universities</li>
            </div>
          </div>

          {/* Business Travel */}
          <div>
            <h3 className="font-bold uppercase">Business Travel</h3>
            <p className="mt-1 text-gray-100">For companies who need housing for their employees.</p>
            <div className=" mt-2 space-y-1">
              <li>Corporate billing available</li>
              <li>Located close to major business centers</li>
              <li>Easy approval and quick setup process</li>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-6">
          <Link href="/properties" className="px-10 py-2 rounded-full bg-[#69664c] text-white font-semibold hover:bg-[#5a5940] transition">
            Properties
          </Link>
          <Link href="/contact" className="px-10 py-2 rounded-full bg-[#69664c] text-white font-semibold hover:bg-[#5a5940] transition">
            Contact us
          </Link>
        </div>
      </div>

    </main>
  )
}

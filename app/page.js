'use client';
import PropertyCard from '@/components/PropertyCard';
import properties from '../public/properties.json';
import Link from 'next/link';
import { useLazyBackground } from '@/utils/useLazyBackground';

export default function Home() {
  const bg1 = useLazyBackground('/landingpage/landingPage1.jpg');
  const bg2 = useLazyBackground('/landingpage/landingPage2.jpg');
  const bg3 = useLazyBackground('/landingpage/landingPage3.jpg');
  const bg4 = useLazyBackground('/landingpage/landingPage4.jpg');
  const bg5 = useLazyBackground('/landingpage/landingPage5.jpg');
  return (
    <main>
      <div
        className="min-h-screen md:h-[50vh] flex items-center justify-center p-6 md:p-8 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        {/* Overlay (for better text readability) */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Centered Text */}
        <h1 className="relative text-white text-center font-bold text-2xl md:text-4xl max-w-4xl">
          Elevating temporary stays with the comfort of home <br />
          and the elegance of luxury.
        </h1>
      </div>

      <div className="min-h-screen flex relative">
        {/* Left Image */}
        <div
          className="w-1/3 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg2})` }}
        ></div>

        {/* Right Image */}
        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg3})` }}
        ></div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white text-lg md:text-xl font-semibold leading-relaxed max-w-4xl bg-[#69664c]/45 py-4 px-3">
            Welcome to Landmark Residences—your premier destination for refined,
            month-to-month living. Enjoy the freedom of flexible stays in
            beautifully designed, fully furnished apartments crafted for your
            comfort. Clear pricing. No commitments. Just effortless living.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              href="/properties"
              className="px-10 py-1.5 rounded-full bg-[#69664c] text-white font-semibold hover:bg-[#5a5940] transition"
            >
              Properties
            </Link>
            <Link
              href="/contact"
              className="px-10 py-1.5 rounded-full bg-[#69664c] text-white font-semibold hover:bg-[#5a5940] transition"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      <div
        className="min-h-[130vh] bg-cover bg-center flex flex-col items-center justify-center px-6"
        style={{ backgroundImage: `url(${bg4})` }}
      >
        {/* Headings */}
        <div className="text-center mb-[80px]">
          <h2
            className="text-white text-4xl md:text-5xl font-bold"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}
          >
            Our Landmarks
          </h2>
          <p
            className="text-white text-xl md:text-3xl mt-2"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
          >
            Luxury landmarks at your fingertips
          </p>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-[80px] w-full">
          {properties.slice(0, 4).map((property, index) => (
            <PropertyCard key={`property_${index}`} property={property} />
          ))}
        </div>

        {/* More Landmarks Button */}
        <Link
          href="/properties"
          className="text-xl px-6 py-2 rounded-full bg-[#69664c] text-white font-semibold hover:bg-[#5a5940] transition"
        >
          More Landmarks
        </Link>
      </div>

      <div
        className="min-h-[150vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg5})` }}
      >
        <div className="w-full min-h-[150vh] bg-[#69664c]/39 flex items-center justify-center">
          <div className="text-white max-w-6xl rounded-md shadow-lg text-justify">
            <p className="leading-relaxed text-lg md:text-2xl">
              At Landmark Residences, corporate housing is reimagined—far from
              the ordinary, we deliver an elevated living experience that blends
              luxury, comfort, and intentional design. Each residence is
              thoughtfully curated with high-end finishes, modern aesthetics,
              and warm, inviting interiors that go beyond functionality to
              inspire a sense of belonging. We don’t just provide a place to
              stay; we craft an environment where lasting memories are made.
              Every property is a “landmark” in its own right—distinctive,
              unforgettable, and designed to stand out— because creating
              exceptional living spaces is not just what we do, it’s what we
              stand for. With every detail meticulously considered, our guests
              enjoy a level of hospitality that exceeds the standard five-star
              experience—this is luxury living, refined for the modern traveler.
            </p>

            <div className="mt-12">
              <Link
                href="/contact"
                className="px-6 py-2 text-xl rounded-full bg-[#69664c] text-white font-semibold hover:bg-[#5a5940] transition"
              >
                Connect with us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

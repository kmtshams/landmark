import PropertyCard from '@/components/PropertyCard';
import properties from '../public/properties.json';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div
        className="min-h-screen md:h-[50vh] flex items-center justify-center p-6 md:p-8 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(/landingPage1.jpg)',
        }}
      >
        {/* Overlay (for better text readability) */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Centered Text */}
        <h1 className="relative text-white text-center font-bold text-2xl md:text-4xl max-w-4xl">
          Elevating temporary stays with the comfort of home <br />
          and the elegance of luxury.
        </h1>
      </div>
      {/* <div
        className="min-h-screen flex items-center justify-start p-8 bg-red-100 bg-cover bg-center relative"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/3.png)',
        }}
      >
        <div className="max-w-2xl text-white bg-black/30 backdrop-blur-sm w-1/2 p-10 mt-80">
          <h1 className="mb-4 text-6xl font-bold">About us</h1>
          <p className="text-left text-xl">
            At Landmark Residences, corporate housing is reimagined—far from the
            ordinary, we deliver an elevated living experience that blends
            luxury, comfort, and intentional design. Each residence is
            thoughtfully curated with high-end finishes, modern aesthetics, and
            warm, inviting interiors that go beyond functionality to inspire a
            sense of belonging. We don’t just provide a place to stay; we craft
            an environment where lasting memories are made. Every property is a
            “landmark” in its own right—distinctive, unforgettable, and designed
            to stand out—because creating exceptional living spaces is not just
            what we do, it’s what we stand for. With every detail meticulously
            considered, our guests enjoy a level of hospitality that exceeds the
            standard five-star experience—this is luxury living, refined for the
            modern traveler.{' '}
          </p>
        </div>
      </div> */}

      <div className="min-h-screen flex relative">
        {/* Left Image */}
        <div
          className="w-1/3 bg-cover bg-center"
          style={{ backgroundImage: 'url(/landingPage2.jpg)' }}
        ></div>

        {/* Right Image */}
        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: 'url(/landingPage3.jpg)' }}
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
        style={{ backgroundImage: 'url(/landingPage4.jpg)' }}
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
            <div
              key={index}
              className="bg-[#69664c] text-white font-semibold rounded-md 
                   aspect-[3/4]
                   flex items-center justify-center 
                   shadow-lg hover:scale-105 transition"
            >
              {/* {property} */}
              <img
                src={property.cover_image}
                alt={`${property.title} image ${index + 1}`}
                className="w-full h-full rounded-md object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>

        {/* More Landmarks Button */}
        <button className="text-xl px-6 py-2 rounded-full bg-[#69664c] text-white font-semibold hover:bg-[#5a5940] transition">
          More Landmarks
        </button>
      </div>

      <div
        className="min-h-[150vh] bg-cover bg-center"
        style={{ backgroundImage: 'url(/landingPage5.jpg)' }}
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
              <button className="px-6 py-2 text-xl rounded-full bg-[#69664c] text-white font-semibold hover:bg-[#5a5940] transition">
                Connect with us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="min-h-screen p-8  bg-cover bg-center relative bg-landmark-green">
        <h1 className="mb-4 text-6xl text-center pb-15">
          Some of our properties.
        </h1>

        <div className="flex flex-wrap space-x-12 items-center justify-center">
          {properties.slice(0, 6).map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>
        <div className="flex justify-center mt-15">
          <a
            href="/properties"
            className="px-5 py-3 border border-white rounded text-white hover:bg-white hover:text-black transition cursor-pointer"
          >
            <span>See All</span> <span>→</span>
          </a>
        </div>
      </div> */}

      {/* <div className="min-h-screen p-8 pt-30 bg-cover bg-center relative bg-landmark-green">
        <h1 className="mb-4 text-6xl text-center">
          Real people are looking after you!
        </h1>
        <h2 className="text-center text-2xl">
          Never feel left alone with a problem, our team will accommodate
        </h2>
        <h2 className="text-center text-2xl">
          whatever request is needed to make your stay perfect.
        </h2>
        <img
          src="/4.jpg"
          alt=""
          className="w-full px-[5rem] my-20 h-[400px] object-cover"
        />
        <div className="flex justify-center flex-wrap items-start gap-15">
          <div className="w-[400px] flex items-center ">
            <img src="/phone.svg" alt="" className="w-full w-15 h-15 mr-5" />
            <div>
              <h2 className="text-2xl font-bold ">Local Team</h2>
              <p className="text-md text-gray-400">
                Lockouts, check-in problems, noise complaints - our team works
                around the clock to look after you.
              </p>
            </div>
          </div>
          <div className="w-[400px] flex items-center">
            <img src="/wrench.svg" alt="" className="w-full w-15 h-15 mr-5" />
            <div>
              <h2 className="text-2xl font-bold ">Maintenance</h2>
              <p className="text-md text-gray-400">
                We resolve all issues in the unit immediately to ensure the
                property is flawlessly maintained.
              </p>
            </div>
          </div>
          <div className="w-[400px] flex items-center">
            <img src="/cleaning.svg" alt="" className="w-full w-15 h-15 mr-5" />
            <div>
              <h2 className="text-2xl font-bold ">Cleaning Staff</h2>
              <p className="text-md text-gray-400">
                We take immense pride in our housekeeping team. They leave no
                corner untouched.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div
        className="max-h-[40vh] px-30 py-20 mt-30 flex items-start justify-start flex-col bg-cover bg-center relative bg-landmark-green"
        style={{
          backgroundImage:
            'linear-gradient(260deg,rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.72) 100%), url(/5.webp)',
        }}
      >
        <h1 className="mb-4 text-3xl font-bold">Live, Work, Stay in Luxury.</h1>
        <p className="text-lg max-w-[300px]">
          Landmark<sup>®</sup> properties offer a unique blend of comfort and
          luxury.
        </p>
        <a
          href="/contact"
          className="mt-5 px-3 py-3 border border-white rounded text-white hover:bg-white hover:text-black transition cursor-pointer"
        >
          <span>Get Started</span> <span>→</span>
        </a>
      </div> */}
    </main>
  );
}

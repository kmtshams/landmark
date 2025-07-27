import Link from 'next/link';
import cities from '../../public/cities.json';
import blurData from '@/public/citiespage/blur/blurData.json';
import Image from 'next/image';


export default function Cities() {
  const cityData = Object.values(cities);

  return (
    <main className='bg-[#97947c]'>

      <div className="min-h-screen bg-[#69664c]/10 px-6 pb-6 pt-28 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">Cities</h2>

        {/* Cities List */}
        <div className="w-full space-y-6">
          {/* City Cards Data */}
          <Link href={`/cities/Irvine`}>
            <div
              className="bg-[#69664c]/85 rounded-md shadow-lg flex flex-col md:flex-row overflow-hidden p-6"
            >
              {/* City Image */}
              <div className='w-full md:w-1/5 relative'>
                <Image
                  src="/citiespage/city1.jpg"
                  alt="IRVINE, CA"
                  width={400}
                  height={600}
                  className="w-full rounded-md object-cover"
                  placeholder="blur"
                  blurDataURL={blurData["city1.jpg"]}
                />
                <div className="absolute left-3 bottom-3 text-white">
                  <h3
                    className="text-2xl font-bold"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
                  >
                    Irvine, CA
                  </h3>
                  <p
                    style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}
                  >
                    4 Landmark Properties
                  </p>
                </div>
              </div>

              {/* City Text */}
              <div className="p-4 flex-1">
                <div className="relative inline-block bg-[#ad997b] text-white font-bold uppercase px-4 py-2 mb-2 text-sm md:text-2xl">
                  IRVINE, CA
                  <span className="absolute top-0 right-[-15px] w-0 h-0 border-t-[24px] border-b-[24px] border-l-[15px] border-t-transparent border-b-transparent border-l-[#ad997b]"></span>
                </div>

                <p className="text-white text-xl leading-relaxed">
                  Experience elevated corporate living in the heart of Irvine, CA with fully furnished units featuring modern décor, a gourmet kitchen, in‑unit laundry, high‑speed Wi‑Fi, and a private balcony. Enjoy resort‑style amenities including a pool, fitness center, business lounge, and gated parking. Perfectly located near top attractions and conveniences—from top‑rated Irvine Unified schools and premier shopping destinations like Irvine Spectrum Center and Fashion Island to Disneyland, Newport and Laguna beaches—this location offers seamless access to both work and leisure. With flexible leases and pet‑friendly options, this is the ideal stay for professionals, relocations, or extended visits.
                </p>
              </div>
            </div>
          </Link>
          <Link href={`/cities/Los Angeles`}>
            <div
              className="bg-[#988f75]/85 rounded-md shadow-lg flex flex-col md:flex-row overflow-hidden p-6"
            >
              {/* City Image */}
              <div className='w-full md:w-1/5 relative'>
                <Image
                  src="/citiespage/city2.jpg"
                  alt="Los Angeles, CA"
                  width={400}
                  height={600}
                  className="w-full rounded-md object-cover"
                  placeholder="blur"
                  blurDataURL={blurData["city2.jpg"]}
                />
                <div className="absolute left-3 bottom-3 text-white">
                  <h3
                    className="text-2xl font-bold"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
                  >
                    Los Angeles, CA
                  </h3>
                  <p
                    style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}
                  >
                    5 Landmark Properties
                  </p>
                </div>
              </div>

              {/* City Text */}
              <div className="p-4 flex-1">
                <div className="relative inline-block bg-[#453d27] text-white font-bold uppercase px-4 py-2 mb-2 text-sm md:text-2xl">
                  LOS ANGELES, CA
                  <span className="absolute top-0 right-[-15px] w-0 h-0 border-t-[24px] border-b-[24px] border-l-[15px] border-t-transparent border-b-transparent border-l-[#453d27]"></span>
                </div>

                <p className="text-white text-xl leading-relaxed">
                  Experience the best of Los Angeles in this luxury, cozy home designed for comfort and style. Featuring high-end furnishings, a fully equipped chef’s kitchen, in-home laundry, fast Wi-Fi, and serene outdoor space, it’s perfect for relaxing or entertaining. Located in a quiet, upscale neighborhood, you're just minutes from Beverly Hills, Santa Monica, The Grove, top-rated schools, and designer shopping districts. Whether you're in town for work, relocation, or an extended getaway, this elegant retreat offers the privacy and warmth of home with the sophistication of LA living.
                </p>
              </div>
            </div>
          </Link>
          <Link href={`/cities/San Diego`}>
            <div
              className="bg-[#3c3328]/85 rounded-md shadow-lg flex flex-col md:flex-row overflow-hidden p-6"
            >
              {/* City Image */}
              <div className='w-full md:w-1/5 relative'>
                <Image
                  src="/citiespage/city3.jpg"
                  alt="SAN DIEGO, CA"
                  width={400}
                  height={600}
                  className="w-full rounded-md object-cover"
                  placeholder="blur"
                  blurDataURL={blurData["city3.jpg"]}
                />
                <div className="absolute left-3 bottom-3 text-white">
                  <h3
                    className="text-2xl font-bold"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
                  >
                    SAN DIEGO, CA
                  </h3>
                  <p
                    style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}
                  >
                    4 Landmark Properties
                  </p>
                </div>
              </div>

              {/* City Text */}
              <div className="p-4 flex-1">
                <div className="relative inline-block bg-[#988f75] text-white font-bold uppercase px-4 py-2 mb-2 text-sm md:text-2xl">
                  SAN DIEGO, CA
                  <span className="absolute top-0 right-[-15px] w-0 h-0 border-t-[24px] border-b-[24px] border-l-[15px] border-t-transparent border-b-transparent border-l-[#988f75]"></span>
                </div>

                <p className="text-white text-xl leading-relaxed">
                  Experience vibrant coastal living in this fully furnished San Diego retreat featuring modern décor,  well-equipped kitchen, in‑unit laundry, fast Wi‑Fi, and a private balcony or patio. Enjoy resort-style amenities like a pool, fitness center, and secure parking, all ideal for work or relaxation. Perfectly positioned close to La Jolla’s scenic beaches, Mission Bay, Balboa Park, top dining and shopping districts like Little Italy and UTC, and award-winning USD and San Diego Unified schools, it blends convenience with coastal charm With flexible booking options and pet-friendly policies, it’s ideal for families, professionals, or anyone seeking an extended stay in America’s Finest City.
                </p>
              </div>
            </div>
          </Link>
          <Link href={`/cities/Seattle`}>
            <div
              className="bg-[#6c583b]/85 rounded-md shadow-lg flex flex-col md:flex-row overflow-hidden p-6"
            >
              {/* City Image */}
              <div className='w-full md:w-1/5 relative'>
                <Image
                  src="/citiespage/city4.jpg"
                  alt="SEATTLE, WA"
                  width={400}
                  height={600}
                  className="w-full rounded-md object-cover"
                  placeholder="blur"
                  blurDataURL={blurData["city4.jpg"]}
                />
                <div className="absolute left-3 bottom-3 text-white">
                  <h3
                    className="text-2xl font-bold"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
                  >
                    Seattle, WA
                  </h3>
                  <p
                    style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}
                  >
                    2 Landmark Properties
                  </p>
                </div>
              </div>

              {/* City Text */}
              <div className="p-4 flex-1">
                <div className="relative inline-block bg-[#988f75] text-white font-bold uppercase px-4 py-2 mb-2 text-sm md:text-2xl">
                  SEATTLE, WA
                  <span className="absolute top-0 right-[-15px] w-0 h-0 border-t-[24px] border-b-[24px] border-l-[15px] border-t-transparent border-b-transparent border-l-[#988f75]"></span>
                </div>

                <p className="text-white text-xl leading-relaxed">
                  As one of the most innovative and naturally beautiful cities in the country, Seattle offers a unique blend of business, technology, culture, and outdoor adventure. Whether you're visiting for work, relocating temporarily, or planning an extended stay, Seattle provides a seamless mix of modern living and Pacific Northwest charm. From thriving corporate hubs to scenic waterfronts and iconic landmarks, this city is built for professionals, creatives, and explorers alike.
                  With distinct neighborhoods like Capitol Hill, South Lake Union, Ballard, and Queen Anne, Seattle is home to industry leaders in tech, biotech, and aerospace, along with top universities and research centers. Enjoy fresh seafood at the famous Pike Place Market, explore endless trails and green spaces, or take in the views from the Space Needle—all within minutes of your stay in this vibrant, forward-thinking city.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <section
        className="w-full relative h-[200px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/explore_properties.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Link href="/properties" className="bg-[#8d8a68] text-white text-lg md:text-xl font-bold px-6 py-2 rounded-full shadow-md">
          Explore Properties
        </Link>
      </section>

    </main>
  );
}

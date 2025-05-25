import Image from "next/image";

export default function Cities() {

  return (
    <main>
      
    

      <div
                className="h-[700px] md:min-h-screen flex items-center justify-start p-8 bg-cover bg-center relative"
                style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/2.jpg)`}}
            >
                <div className="w-full md:w-1/2 max-w-2xl text-white bg-black/30 backdrop-blur-sm p-6 md:p-10">
                    <h1 className="mb-4 text-4xl md:text-6xl font-bold text-left">Cities</h1>
                    <p className="text-left text-base md:text-xl">
                    Explore Landmark<sup>®</sup> stays, available in different cities.
                    </p>
                </div>
            </div>
      

      
      
    </main>
  );
}

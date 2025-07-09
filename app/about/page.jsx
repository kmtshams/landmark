
export default function About() {

  return (
    <main>
      <div
        className="h-[700px] md:min-h-screen flex items-center justify-start p-8 bg-cover bg-center relative"
        style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(/landmark.jpg)`}}
      >
        <div className="w-full md:w-2/3  text-white bg-black/30 backdrop-blur-sm p-6 md:p-10 mt-50">
            <h1 className="mb-4 text-4xl md:text-6xl font-bold text-left">Who We Are & What We Offer</h1>
            <p className="text-left text-3xl">   
              At Landmark Residences, we provide premium, move-in ready homes for:
            </p>
            <ul className="mt-10 text-2xl ml-[3rem]">
              <li>{" "}Business Travelers</li>
              <li>{" "}Healthcare Professionals</li>
              <li>{" "}Insurance Housing</li>
              <li>{" "}Relocation Housing</li>
              <li>{" "}Academic Housing</li>
            </ul>
        </div>
      </div>

      <div
        className="h-[700px] md:min-h-screen flex items-center justify-start p-8 bg-cover bg-center relative"
        style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/insurance.jpg)`}}
      >
        <div className="w-full md:w-1/2 max-w-3xl text-white bg-black/30 backdrop-blur-sm p-6 md:p-10 mt-80 ml-auto">
            <h1 className="mb-4 text-4xl md:text-6xl font-bold text-left">Insurance Housing</h1>
            <p className="text-left text-3xl">   
              For policy holders displaced by fire, water, and other disasters.  
            </p>
            <ul className="mt-10 text-2xl ml-[3rem]">
              <li>{" "}Fast Placement</li>
              <li>{" "}Fully Furnished and Family Ready</li>
              <li>{" "}All Utilities Included</li>
            </ul>
        </div>
      </div>

      <div
        className="h-[700px] md:min-h-screen flex items-center justify-start p-8 bg-cover bg-center relative"
        style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/healthcare.jpg)`}}
      >
        <div className="w-full md:w-1/2 max-w-3xl text-white bg-black/30 backdrop-blur-sm p-6 md:p-10 mt-80">
            <h1 className="mb-4 text-4xl md:text-6xl font-bold text-left">Healthcare Professionals</h1>
            <p className="text-left text-3xl">   
              Ideal for traveling nurses, doctors, specialists, residents, and other professionals.
            </p>
            <ul className="mt-10 text-2xl ml-[3rem]">
              <li>{" "}Near Major Hospitals</li>
              <li>{" "}Quiet, Clean Spaces</li>
              <li>{" "}Flexible Lease Terms</li>
            </ul>
        </div>
      </div>  

      <div
        className="h-[700px] md:min-h-screen flex items-center justify-start p-8 bg-cover bg-center relative"
        style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/business.jpg)`}}
      >
        <div className="w-full md:w-1/2 max-w-3xl text-white bg-black/30 backdrop-blur-sm p-6 md:p-10 mt-80 ml-auto">
            <h1 className="mb-4 text-4xl md:text-6xl font-bold text-left">Business Travelers</h1>
            <p className="text-left text-3xl">   
             For companies & relocation services helping employees move.
            </p>
            <ul className="mt-10 text-2xl ml-[3rem]">
              <li>{" "}Corporate Billing Available</li>
              <li>{" "}Located Close to Business Districts</li>
              <li>{" "}Easy Approval and Quick Setup</li>
            </ul>
        </div>
      </div>

      <div
        className="h-[700px] md:min-h-screen flex items-center justify-start p-8 bg-cover bg-center relative"
        style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/academic.jpg)`}}
      >
        <div className="w-full md:w-1/2 max-w-3xl text-white bg-black/30 backdrop-blur-sm p-6 md:p-10 mt-80">
            <h1 className="mb-4 text-4xl md:text-6xl font-bold text-left">Academic Housing</h1>
            <p className="text-left text-3xl">   
             Perfect for students, researchers, and faculty.
            </p>
            <ul className="mt-10 text-2xl ml-[3rem]">
              <li>{" "}Study-Ready Furnishings</li>
              <li>{" "}Month-to-Month Flexibility</li>
              <li>{" "}Close to Universities</li>
            </ul>
        </div>
      </div>

  </main>
  )
}

import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <main>
      <div className="min-h-screen flex items-center justify-center p-8 bg-cover bg-center relative" 
           style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/1.png)' }}>
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between gap-8">
          {/* Contact Info Section */}
          <div className="md:w-[45%] mt-[100px] md:mt-[200px] text-white bg-black/30 backdrop-blur-sm p-10 rounded-lg">
            <h1 className="mb-4 text-6xl font-bold">Get in touch</h1>
            <div className="space-y-4 text-lg">
              <div className="flex flex-col space-y-2">
                <a href="tel:+19492572019" className="mb-0">(949) 257-2019</a>
                <a href="mailto:info@staylandmark.com" className="mb-0">info@staylandmark.com</a>
                <p className="mb-0">2211 Michelson Dr Suite 900<br/>Irvine, CA 92612</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className=" md:w-[45%] rounded-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
} 
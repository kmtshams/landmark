import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <main>
      <div className="min-h-screen flex items-center justify-center p-8 bg-cover bg-center relative" 
           style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/1.jpg)' }}>
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between gap-8">
          {/* Contact Info Section */}
          <div className="md:w-[45%] text-white bg-black/30 backdrop-blur-sm p-10 rounded-lg">
            <h1 className="mb-4 text-6xl font-bold">Get in touch</h1>
            <div className="space-y-4 text-lg">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
                <p>Email: info@staylandmark.com</p>
                <p>Phone: +1 (949) 832-7199</p>
                <p className="mb-0">Address: 2211 Michelson Dr Suite 900<br/>Irvine, CA 92612</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="md:w-[45%] p-10 rounded-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
} 
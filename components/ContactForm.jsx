'use client'
import { useState } from 'react'
import { sendEmailMessage } from '@/utils/utils'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    console.log("form submit")
    console.log("formdata", formData)
    e.preventDefault()
    sendEmailMessage(formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>

        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/20 
                   text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                   focus:ring-white/50 bg-black/60 backdrop-blur-sm"
          placeholder="Your name"
          required
        />
      </div>

      <div>

        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/20 
                   text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                   focus:ring-white/50 bg-black/60 backdrop-blur-sm"
          placeholder="your@email.com"
          required
        />
      </div>

      <div>

        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/20 
                   text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                   focus:ring-white/50 bg-black/60 backdrop-blur-sm"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/20 
                   text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                   focus:ring-white/50 bg-black/60 backdrop-blur-sm"
          placeholder="How can we help you?"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-white text-black py-2 px-4 rounded-md hover:bg-gray-100 
                 transition duration-200 font-medium cursor-pointer"
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm 
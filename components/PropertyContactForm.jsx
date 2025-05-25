'use client'

import { useState } from 'react'
import { sendEmailMessage } from '@/utils/utils'
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
    },
  },
})

const PropertyContactForm = ({property}) => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: null,
    checkout: null,
    message: '',
  })

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
        ...formData,
        checkin: dayjs(formData.checkin).format('MM-DD-YYYY'),
        checkout: dayjs(formData.checkout).format('MM-DD-YYYY'),
        "property name": property.name,
        "property location": property.location?.city + ', ' + property.location?.state,
    }
    sendEmailMessage(data)
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkin: null,
      checkout: null,
      message: '',
    })
    setAlertOpen(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <ThemeProvider theme={darkTheme}>
        <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{
            width: '95vw',
            color: 'white', // text color
            backgroundColor: '#16a34a', // optional: override MUI green
            fontSize: '1rem',
          }}
        >
          Your message has been sent successfully! We will get back to you soon.
        </Alert>
      </Snackbar>
      <div className="text-white bg-black/30 backdrop-blur-sm p-10 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 text-white text-lg font-medium">Name</label>  
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white bg-black/60 backdrop-blur-sm"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-white text-lg font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white bg-black/60 backdrop-blur-sm"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 text-white text-lg font-medium">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white bg-black/60 backdrop-blur-sm"
              placeholder="(555) 123-4567"
            />
          </div>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-1 text-white text-lg font-medium">Check-in</label>
                <DatePicker
                  value={formData.checkin}
                  onChange={(newValue) => {setFormData(prev => ({ ...prev, checkin: newValue }))}}
                  slots={{ openPickerIcon: EditCalendarRoundedIcon }}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: 'outlined',
                    }
                  }}
                />
              </div>

              <div className="flex-1">
                <label className="block mb-1 text-white text-lg font-medium">Check-out</label>
                <DatePicker
                  value={formData.checkout}
                  onChange={(newValue) => { setFormData(prev => ({ ...prev, checkout: newValue }))}}
                  slots={{ openPickerIcon: EditCalendarRoundedIcon }}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: 'outlined',
                    }
                  }}
                />
              </div>
            </div>
          </LocalizationProvider>

          <div>
            <label htmlFor="message" className="block mb-1 text-white text-lg font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white bg-black/60 backdrop-blur-sm"
              placeholder="How can we help you?"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-2 px-4 rounded-md hover:bg-gray-300 transition duration-200 font-medium cursor-pointer text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </ThemeProvider>
  )
}

export default PropertyContactForm

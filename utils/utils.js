"use server";

import { Resend } from 'resend';

const resend = new Resend('re_GRwZjZQ8_GTbNyvQtVoYbCjQwUcBSLKGY');

const sendEmailMessage = (formData) =>{

    const body = `
    <div>
        <p>Name: ${formData.name}</p>
        <p>Email: ${formData.email}</p>
        <p>Phone Number: ${formData.phone}</p>
        <p>Message: <br/> ${formData.message}</p>

    </div>
    `

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'info@staylandmark.com',
        subject: 'Contact Form Inquiry',
        html: body
      });
}

export {sendEmailMessage}
"use server";

import { Resend } from 'resend';

const resend = new Resend('re_GRwZjZQ8_GTbNyvQtVoYbCjQwUcBSLKGY');

const sendEmailMessage = (formData) =>{
    let body = '<div>';
    Object.keys(formData).forEach(key => {
        body += `<p>${key} - ${formData[key]}</p>`;
    });
    body += '</div>';

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'info@staylandmark.com',
        subject: 'Staylandmark Contact Form Inquiry',
        html: body
    });
}

export {sendEmailMessage}
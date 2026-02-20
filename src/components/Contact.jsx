import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
  import.meta.env.VITE_EMAIL_PUBLIC_KEY
  )
  .then((response) => {
    console.log("SUCCESS!", response.status, response.text);
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  })
  .catch((error) => {
    console.error("FAILED...", error);
    alert("Failed to send message.");
  });
};


  return (
    <section id="contact" className="mb-10">
      <div className="text-center mb-8">
        <div className="inline-block rounded-lg bg-white text-gray-900 px-3 py-1 text-sm mb-4">
          Contact
        </div>
        <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
        <p className="text-gray-400 max-w-[600px] mx-auto">
          Want to chat? Use the form below or shoot an email to{' '}
          <a href="mailto:randisyuja1312@gmail.com" className="text-blue-500 hover:underline">
            randisyuja1312@gmail.com
          </a>
        </p>
      </div>
      
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-red-600 focus:outline-none text-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-red-600 focus:outline-none text-sm"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-red-600 focus:outline-none text-sm resize-none"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white font-medium text-sm hover:from-red-600 hover:via-red-500 hover:to-red-400 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
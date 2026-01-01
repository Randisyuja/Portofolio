import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
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
          <a href="mailto:hello@example.com" className="text-blue-500 hover:underline">
            hello@example.com
          </a>
        </p>
      </div>
      
      <div className="max-w-md mx-auto">
        <div className="space-y-4">
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
            onClick={handleSubmit}
            className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white font-medium text-sm hover:from-red-600 hover:via-red-500 hover:to-red-400 transition-all"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
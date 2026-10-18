import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in all fields before sending.');
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID || '',
      import.meta.env.VITE_EMAIL_TEMPLATE_ID || '',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY || ''
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      setStatus('success');
      setStatusMessage('Your message has been sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 6000);
    })
    .catch((error) => {
      console.error("FAILED...", error);
      setStatus('error');
      setStatusMessage('Failed to send message via form. Please email directly at randisyuja1312@gmail.com.');
    });
  };

  return (
    <section id="contact" className="space-y-8">
      <div className="text-center max-w-xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-red-500 font-semibold text-xs tracking-wider uppercase">
          <span>07</span>
          <span className="w-8 h-px bg-red-500/40"></span>
          <span>Contact</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Let's Connect</h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Have an open role, project inquiry, or just want to discuss backend architecture? Shoot me a message or write directly to{' '}
          <a
            href="mailto:randisyuja1312@gmail.com"
            className="text-red-600 dark:text-rose-400 font-medium hover:underline inline-flex items-center gap-1"
          >
            randisyuja1312@gmail.com
          </a>
        </p>
      </div>

      <div className="max-w-lg mx-auto rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-red-500 dark:focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none text-sm transition-all"
              placeholder="e.g. John Doe"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-red-500 dark:focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none text-sm transition-all"
              placeholder="e.g. john@company.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Message
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-red-500 dark:focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none text-sm resize-none transition-all"
              placeholder="Tell me about your team or project..."
            />
          </div>

          {/* Status Message Banner */}
          {status === 'success' && (
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{statusMessage}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-rose-400 text-xs">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{statusMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3 px-5 rounded-lg bg-gradient-to-r from-red-600 via-rose-600 to-red-500 hover:from-red-500 hover:to-rose-500 text-white font-medium text-sm shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
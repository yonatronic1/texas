import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full pt-20 sm:pt-32 pb-8 sm:pb-16">
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Get in Touch</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="w-12 h-12 text-2xl mx-auto mb-4">📞</div>
              <h3 className="font-bold mb-2">Phone</h3>
              <a href="tel:+251115549273" className="text-gray-600 hover:text-blue-500">+251 11 554 92 73</a>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="w-12 h-12 text-2xl mx-auto mb-4">✉️</div>
              <h3 className="font-bold mb-2">Email</h3>
              <a href="mailto:info@texas.edu.et" className="text-gray-600 hover:text-blue-500">info@texas.edu.et</a>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="w-12 h-12 text-2xl mx-auto mb-4">📍</div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-gray-600">Bole Road, Dembel City<br />Addis Ababa, Ethiopia</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg bg-blue-400 text-white placeholder-blue-200"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg bg-blue-400 text-white placeholder-blue-200"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-blue-400 text-white placeholder-blue-200"
                />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold py-3 px-4 rounded-lg hover:shadow-lg">
                Send Message
              </button>
              {sent && <p className="text-center text-green-200">Message sent! We'll respond soon.</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}


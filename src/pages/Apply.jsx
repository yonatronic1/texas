import React, { useState } from 'react';

export default function Apply() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '', level: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full pt-20 sm:pt-32 pb-8 sm:pb-16">
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Apply Online</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">Start your language learning journey</p>
        </div>
      </section>

      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 sm:p-8 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-2">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg bg-blue-400 text-white"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg bg-blue-400 text-white"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-2">Phone *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg bg-blue-400 text-white"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Course *</label>
                <select name="course" value={formData.course} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg bg-blue-400 text-white">
                  <option value="">Select a course</option>
                  <option value="english">English Fundamentals</option>
                  <option value="ielts">IELTS Preparation</option>
                  <option value="toefl">TOEFL Mastery</option>
                  <option value="business">Business English</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-2">Level *</label>
              <select name="level" value={formData.level} onChange={handleChange} required
                className="w-full px-4 py-3 rounded-lg bg-blue-400 text-white">
                <option value="">Select your level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                className="w-full px-4 py-3 rounded-lg bg-blue-400 text-white"
              />
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold py-3 px-4 rounded-lg hover:shadow-lg">
              Submit Application
            </button>

            {submitted && <p className="text-center text-green-200">Application submitted! We'll contact you within 24 hours.</p>}
          </form>
        </div>
      </section>
    </div>
  );
}

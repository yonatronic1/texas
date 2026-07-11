import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen w-full bg-white pt-20 pb-8 transition-colors duration-300 dark:bg-black sm:pt-32 sm:pb-16">
      <section className="bg-white dark:bg-black py-12 sm:py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Get in Touch</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-8 sm:py-16 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="w-12 h-12 text-2xl mx-auto mb-4">📞</div>
              <h3 className="font-bold mb-2">Phone</h3>
              <a href="tel:+251115549273" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">+251 11 554 92 73</a>
            </div>

            

            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="w-12 h-12 text-2xl mx-auto mb-4">📍</div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">Bole Road, Dembel City<br />Addis Ababa, Ethiopia</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800 text-white p-8 rounded-xl text-center transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-3">Contact Us Directly</h2>
            <p className="text-blue-100 mb-4">
              You can reach us anytime by phone or email for registration and general inquiries.
            </p>
            <div className="space-y-3 text-sm sm:text-base">
              <a href="tel:+251115549273" className="block hover:text-yellow-300">📞 +251 11 554 92 73</a>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


import React from 'react';

export default function About() {
  return (
    <div className="w-full pt-20 sm:pt-32 pb-8 sm:pb-16">
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">About Us</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated to excellence in language education
          </p>
        </div>
      </section>
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Our Mission</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            We empower students and professionals through world-class language education and practical skills.
          </p>
        </div>
      </section>
    </div>
  );
}

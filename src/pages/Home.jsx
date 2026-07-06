import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20 pb-12 sm:pt-32 sm:pb-20">
        <div className="container-custom text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Speak Beyond <span className="text-gradient">Borders.</span></h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">Empowering students and professionals through world-class language education.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link to="/courses" className="btn-primary btn-premium px-6 sm:px-8 py-2.5 sm:py-3">Explore Courses</Link>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="container-custom px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">20,000+</h3>
            <p className="text-xs sm:text-sm text-gray-600">Students trained</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">95%</h3>
            <p className="text-xs sm:text-sm text-gray-600">Exam success rate</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">15+</h3>
            <p className="text-xs sm:text-sm text-gray-600">Awards & recognition</p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 md:py-24 bg-gray-50">
        <div className="container-custom px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="glass p-4 sm:p-6 rounded-lg">
              <h3 className="font-semibold text-sm sm:text-base">IELTS Preparation</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">8 weeks • Intermediate+</p>
            </div>
            <div className="glass p-4 sm:p-6 rounded-lg">
              <h3 className="font-semibold text-sm sm:text-base">TOEFL Excellence</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">10 weeks • Advanced</p>
            </div>
            <div className="glass p-4 sm:p-6 rounded-lg">
              <h3 className="font-semibold text-sm sm:text-base">Kids Summer Program</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">4 weeks • Ages 6-12</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

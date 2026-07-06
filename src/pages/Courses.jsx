import React from 'react';

export default function Courses() {
  const courses = [
    { id: 1, title: 'English Fundamentals', level: 'Beginner', duration: '12 weeks', students: 45, price: '$199', desc: 'Master basic English grammar, vocabulary, and conversation skills.' },
    { id: 2, title: 'English Intermediate', level: 'Intermediate', duration: '12 weeks', students: 38, price: '$249', desc: 'Build confidence in reading, writing, and speaking at intermediate level.' },
    { id: 3, title: 'English Advanced', level: 'Advanced', duration: '12 weeks', students: 32, price: '$299', desc: 'Achieve fluency and master complex communication skills.' },
    { id: 4, title: 'Conversational English', level: 'All Levels', duration: '8 weeks', students: 28, price: '$199', desc: 'Focus on real-world speaking and listening with native speakers.' },
    { id: 5, title: 'Business English', level: 'Professional', duration: '10 weeks', students: 24, price: '$349', desc: 'Professional communication, presentations, and business writing.' },
    { id: 6, title: 'English for Kids', level: 'Ages 6-12', duration: '6 weeks', students: 22, price: '$149', desc: 'Fun and interactive English learning for young learners.' },
  ];

  return (
    <div className="w-full pt-20 sm:pt-32 pb-8 sm:pb-16">
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Our Courses</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive language programs for every level</p>
        </div>
      </section>

      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 hover:shadow-lg transition">
                <div className="h-28 sm:h-40 bg-blue-400 rounded-lg mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{course.title}</h3>
                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-blue-100 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">📊</span>
                    <span>Level: {course.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">⏱️</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">👥</span>
                    <span>{course.students} enrolled</span>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-3 sm:pt-4 border-t border-blue-300">
                  <span className="text-xl sm:text-2xl font-bold text-yellow-300">{course.price}/month</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


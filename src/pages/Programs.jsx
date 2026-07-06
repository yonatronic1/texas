import React from 'react';
import { Link } from 'react-router-dom';

export default function Programs() {
  const programs = [
    {
      title: 'English Language Programs',
      icon: '📚',
      desc: 'From beginner to advanced levels',
      courses: ['English Fundamentals', 'English Intermediate', 'English Advanced'],
    },
    {
      title: 'Exam Preparation',
      icon: '⭐',
      desc: 'Master IELTS and TOEFL',
      courses: ['IELTS Preparation', 'TOEFL Excellence', 'Cambridge Exams'],
    },
    {
      title: 'International Languages',
      icon: '🌍',
      desc: 'Learn global languages',
      courses: ['French', 'German', 'Arabic', 'Amharic'],
    },
    {
      title: 'Kids Summer Program',
      icon: '👥',
      desc: 'Fun learning for children',
      courses: ['Ages 6-9', 'Ages 10-12', 'Teen Program'],
    },
  ];

  return (
    <div className="w-full pt-20 sm:pt-32 pb-8 sm:pb-16">
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Our Programs</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">Comprehensive language training solutions</p>
        </div>
      </section>

      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl hover:shadow-lg transition">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{program.icon}</div>
                <h3 className="text-lg sm:text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-blue-100 mb-4 sm:mb-6 text-sm sm:text-base">{program.desc}</p>
                
                <div className="space-y-2 mb-6">
                  {program.courses.map((course, cidx) => (
                    <div key={cidx} className="text-blue-100 text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full" />
                      {course}
                    </div>
                  ))}
                </div>

                <Link to="/apply" className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-lg hover:shadow-lg">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Program Features</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              'Expert Instructors',
              'Interactive Classes',
              'Flexible Scheduling',
              'Certification',
              'Small Groups',
              'Modern Materials',
              'Progress Tracking',
              'Career Support',
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-4 sm:p-6 rounded-lg text-center shadow">
                <p className="font-semibold text-sm sm:text-base">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


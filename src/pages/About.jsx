import React from 'react';

export default function About() {
  const values = [
    { title: 'Excellence', description: 'We are committed to the highest standards of language education and student success.' },
    { title: 'Innovation', description: 'We continuously evolve our teaching methods using the latest educational technology.' },
    { title: 'Inclusivity', description: 'We welcome learners of all backgrounds and proficiency levels.' },
    { title: 'Integrity', description: 'We maintain transparency and honesty in all our dealings with students and partners.' },
  ];

  return (
    <div className="min-h-screen w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero Section */}
      <section className="bg-white dark:bg-black py-16 sm:py-24 transition-colors duration-300 pt-32 sm:pt-40">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300 mb-6">
            About Us
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-gray-900 dark:text-white">About Texas International Study Center</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a leading language education institution dedicated to helping students and professionals achieve fluency and excel in standardized English proficiency examinations.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values Grid */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-zinc-950 dark:to-zinc-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To empower students and professionals worldwide with world-class language education that builds confidence, promotes fluency, and opens doors to global opportunities in education and career advancement.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To be the most trusted and innovative language education institution in the region, recognized for our commitment to excellence, student success, and transformative learning experiences.
              </p>
            </div>

            {/* Impact */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Our Impact</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With over 20,000 students trained and 95% exam success rate, we have helped thousands achieve their dreams of studying abroad, advancing their careers, and connecting with the global community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="p-6 bg-gray-50 dark:bg-zinc-900 rounded-lg hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Choose Texas International Study Center?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                    <span className="text-white font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Experienced Faculty</h3>
                  <p className="text-gray-600 dark:text-gray-300">Our instructors are certified professionals with extensive teaching experience and international qualifications.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                    <span className="text-white font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Proven Results</h3>
                  <p className="text-gray-600 dark:text-gray-300">95% of our students successfully pass their target exams and achieve their language learning goals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                    <span className="text-white font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Comprehensive Curriculum</h3>
                  <p className="text-gray-600 dark:text-gray-300">Our courses are designed with international standards and tailored to student needs at every level.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                    <span className="text-white font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Modern Facilities</h3>
                  <p className="text-gray-600 dark:text-gray-300">Our state-of-the-art classrooms and learning resources support effective and engaging language learning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold mb-2">20,000+</p>
              <p className="text-blue-100">Students Trained</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">95%</p>
              <p className="text-blue-100">Success Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-blue-100">Expert Instructors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Start Your Language Learning Journey Today</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Discover the right course for your level and goals. Take our free placement assessment to get started.</p>
          <a href="/placement-quiz" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition">
            Take Assessment Quiz
          </a>
        </div>
      </section>
    </div>
  );
}

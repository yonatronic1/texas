import React from 'react';

export default function Home() {
  const features = [
    { icon: '🎯', title: 'Expert Instructors', description: 'Learn from certified professionals with 10+ years of experience' },
    { icon: '📚', title: 'Comprehensive Curriculum', description: 'Structured courses designed for all proficiency levels' },
    { icon: '🌍', title: 'Global Standards', description: 'Aligned with international language proficiency frameworks' },
    { icon: '💻', title: 'Interactive Learning', description: 'Modern teaching methods combining traditional and digital approaches' },
  ];

  return (
    <div className="min-h-screen w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero Section */}
      <section className="min-h-screen bg-white dark:bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_transparent_40%),_#000000] pt-32 pb-12 sm:pt-40 sm:pb-20 transition-colors duration-300 flex items-center">
        <div className="container-custom text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Speak Beyond <span className="text-gradient">Borders.</span></h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering students and professionals through world-class language education. Achieve fluency, pass your exams, and unlock career opportunities with Texas International Study Center.
          </p>
          <div className="flex justify-center">
            <a href="#features" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition">Explore More</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-zinc-950 dark:to-zinc-900 transition-colors duration-300">
        <div className="container-custom px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-300">20,000+</h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 mt-2">Students trained</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-300">95%</h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 mt-2">Exam success rate</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-300">15+</h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 mt-2">Years experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-300">50+</h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 mt-2">Expert instructors</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 bg-white dark:bg-black transition-colors duration-300">
        <div className="container-custom px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-gray-50 dark:bg-zinc-900 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800 transition-colors duration-300">
        <div className="container-custom text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Find out your English level and discover the perfect course for you with our placement assessment.</p>
          <a href="/placement-quiz" className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:shadow-lg transition">
            Take Placement Quiz
          </a>
        </div>
      </section>
    </div>
  );
}

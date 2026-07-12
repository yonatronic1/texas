import React from 'react';

export default function Testimonials() {
  const testimonials = [
    { name: 'Bekalu Mola', rating: 5, text: 'Excellent teaching methods and very supportive instructors.' },
    { name: 'Yinebeb Tariku', rating: 5, text: 'The teaching method is very good. I used to be afraid to speak, but now I can talk to foreigners at my job without any problem' },
    { name: 'Solomon Kebede', rating: 4, text: 'Amazing experience with interactive lessons and personalized feedback.' },
    { name: 'Desta Tegegne', rating: 5, text: 'This course helped me pass my interview for an international company. My speaking is much more confident now.' },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white pt-20 pb-8 transition-colors duration-300 dark:from-zinc-950 dark:to-black sm:pt-32 sm:pb-16">
      <section className="py-12 sm:py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300 mb-4">
            Student Voices
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">Student Testimonials</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">Hear from our successful students</p>
        </div>
      </section>

      <section className="py-8 sm:py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="group bg-white/90 dark:bg-zinc-900/90 border border-gray-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 dark:border-zinc-800 pt-4">
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


import React from 'react';

export default function Testimonials() {
  const testimonials = [
    { name: 'Ahmed Hassan', program: 'IELTS Preparation', rating: 5, text: 'Excellent teaching methods and very supportive instructors.' },
    { name: 'Sarah Johnson', program: 'Business English', rating: 5, text: 'The course transformed my professional communication skills.' },
    { name: 'Maria Rodriguez', program: 'English Fluency', rating: 5, text: 'Amazing experience with interactive lessons and personalized feedback.' },
    { name: 'Desta Tegegne', program: 'Kids Summer Program', rating: 5, text: 'My daughter loved the summer program and improved significantly.' },
  ];

  return (
    <div className="w-full pt-20 sm:pt-32 pb-8 sm:pb-16">
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Student Testimonials</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">Hear from our successful students</p>
        </div>
      </section>

      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 rounded-xl shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.program}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


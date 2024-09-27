import React from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Customer',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    feedback:
      'Tailwind CSS has significantly improved our workflow, making our development process faster and more enjoyable. Highly recommend!',
  },
  {
    name: 'John Smith',
    role: 'Client',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    feedback:
      'Using React with Tailwind CSS has been a great experience. The speed and ease of creating responsive UIs is unmatched!',
  },
  {
    name: 'Emily Clark',
    role: 'Partner',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    feedback:
      'The tools and technologies used by the team were top-notch. They delivered on time, and the quality was excellent.',
  },
];

const TestimonialCards = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-100 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-sm text-indigo-600 uppercase tracking-wider">Our Testimonials</p>
        <h2 className="text-5xl font-bold text-gray-800">What Our Clients Say</h2>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-8 h-[400px] transition-transform transform hover:scale-105 duration-300"
          >
            <div className="flex items-center mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 italic leading-relaxed overflow-hidden">
              "{testimonial.feedback}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCards;

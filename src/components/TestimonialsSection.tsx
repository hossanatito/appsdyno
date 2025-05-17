
import React from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Appsdyno transformed our concept into a beautiful, functional platform that our users love. Their team was responsive, professional, and delivered beyond our expectations. We've seen a 40% increase in user engagement since launch.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "David Chen",
    role: "Marketing Director, GrowthHub",
    content: "Working with Appsdyno has been a game-changer for our business. Their development expertise and attention to detail resulted in a website that not only looks great but performs exceptionally well. Our conversion rate has improved significantly.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, InnovateMobile",
    content: "The mobile app Appsdyno developed for us received outstanding feedback from our users. Their team took the time to understand our vision and executed it flawlessly. I highly recommend their services to anyone looking for quality development.",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary/50 relative">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-secondary/50 to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            Don't just take our word for it - here's what our clients have to say
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card bg-background/40 backdrop-blur-sm border border-gray-800 relative overflow-hidden group"
            >
              <div 
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-brand-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              ></div>
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-14 w-14 rounded-full border-2 border-brand-500"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
              <div className="text-brand-500 mt-4 text-5xl opacity-20 font-serif">"</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default TestimonialsSection;

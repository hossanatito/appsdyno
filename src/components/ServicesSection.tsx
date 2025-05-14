
import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies for optimal performance and user experience.",
    icon: "💻",
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality to create intuitive and engaging interfaces.",
    icon: "🎨",
  },
  {
    title: "Custom Software",
    description: "Bespoke software solutions tailored to your specific business needs and challenges.",
    icon: "⚙️",
  },
  {
    title: "Maintenance",
    description: "Ongoing support, updates, and enhancements to keep your digital products running smoothly and securely.",
    icon: "🔧",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure setup and management for optimal performance and reliability.",
    icon: "☁️",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive digital solutions to power your business growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card group hover:border-brand-500 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="flex items-center text-brand-500 font-medium group-hover:translate-x-1 transition-transform duration-300">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-4 rounded-full bg-secondary">
            <p className="text-gray-300">
              Need something specific? <span className="text-brand-500 font-medium">Let's discuss your custom requirements</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

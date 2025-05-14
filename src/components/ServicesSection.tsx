
import React from 'react';
import { ArrowRight, Globe, Smartphone, Palette, Cog, Wrench, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies for optimal performance and user experience.",
    icon: <Globe className="h-8 w-8 text-brand-500" />,
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
    icon: <Smartphone className="h-8 w-8 text-brand-500" />,
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality to create intuitive and engaging interfaces.",
    icon: <Palette className="h-8 w-8 text-brand-500" />,
  },
  {
    title: "Custom Software",
    description: "Bespoke software solutions tailored to your specific business needs and challenges.",
    icon: <Cog className="h-8 w-8 text-brand-500" />,
  },
  {
    title: "Maintenance",
    description: "Ongoing support, updates, and enhancements to keep your digital products running smoothly and securely.",
    icon: <Wrench className="h-8 w-8 text-brand-500" />,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure setup and management for optimal performance and reliability.",
    icon: <Cloud className="h-8 w-8 text-brand-500" />,
  },
];

const ServicesSection = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <div className="mb-4 flex items-center justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <a 
                href="#contact" 
                onClick={scrollToContact}
                className="flex items-center text-brand-500 font-medium group-hover:translate-x-1 transition-transform duration-300"
              >
                Talk to Us <ArrowRight className="ml-2 h-4 w-4" />
              </a>
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

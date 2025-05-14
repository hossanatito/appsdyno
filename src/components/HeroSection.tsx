
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16">
      <div className="absolute inset-0 bg-hero-pattern opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Transforming Ideas into Powerful Digital Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            We are <span className="text-brand-500 font-semibold">Appsdyno</span>, your partner in creating innovative, high-performance web and mobile experiences that drive results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-lg px-8 py-6">
              Get a Free Quote
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Our Services
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-500">100+</div>
              <div className="text-gray-400 mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-500">50+</div>
              <div className="text-gray-400 mt-1">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-500">5+</div>
              <div className="text-gray-400 mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-500">24/7</div>
              <div className="text-gray-400 mt-1">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="currentColor" fillOpacity="1" d="M0,288L60,266.7C120,245,240,203,360,197.3C480,192,600,224,720,229.3C840,235,960,213,1080,192C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

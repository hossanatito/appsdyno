
import React from 'react';
import { Button } from "@/components/ui/button";
import P5Grid from './P5Grid';

const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center pt-32 pb-28">
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      <P5Grid className="opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background z-20"></div>
      
      <div className="container relative mx-auto px-6 z-30">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Transforming Ideas into Powerful Digital Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            We are <span className="text-brand-500 font-semibold">Appsdyno</span>, your partner in creating innovative, high-performance web and mobile experiences that drive results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-base px-7 py-5">
              Get a Free Quote
            </Button>
            <Button size="lg" variant="outline" className="text-base px-7 py-5">
              Our Services
            </Button>
          </div>
          
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-xl border border-white/10"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 p-10 rounded-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-500">100+</div>
                <div className="text-gray-300 text-sm mt-1">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-500">50+</div>
                <div className="text-gray-300 text-sm mt-1">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-500">5+</div>
                <div className="text-gray-300 text-sm mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-500">24/7</div>
                <div className="text-gray-300 text-sm mt-1">Support</div>
              </div>
            </div>
          </div>
          
          {/* Core Values Section */}
          <div className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#0A0E1A] p-8 rounded-xl border border-white/5 text-center">
                <h3 className="text-2xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-400">
                  Pushing boundaries with cutting-edge solutions
                </p>
              </div>
              
              <div className="bg-[#0A0E1A] p-8 rounded-xl border border-white/5 text-center">
                <h3 className="text-2xl font-bold mb-3">Performance</h3>
                <p className="text-gray-400">
                  Creating fast, reliable, and scalable applications
                </p>
              </div>
              
              <div className="bg-[#0A0E1A] p-8 rounded-xl border border-white/5 text-center">
                <h3 className="text-2xl font-bold mb-3">Customer-First</h3>
                <p className="text-gray-400">
                  Your goals and satisfaction are our top priority
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;

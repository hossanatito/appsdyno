
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50 relative">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title">About Appsdyno</h2>
            <p className="section-subtitle mb-6">
              Delivering Excellence in Digital Solutions Since 2018
            </p>
            <div className="space-y-4 text-gray-300">
              <p>
                Appsdyno is a forward-thinking software development agency that specializes in creating innovative, scalable, and high-performance digital solutions. With our team of experienced developers, designers, and strategists, we transform complex ideas into elegant software products that drive business growth.
              </p>
              <p>
                Our approach combines technical expertise with creative thinking, ensuring that every project we deliver not only meets but exceeds our clients' expectations. We pride ourselves on our customer-first values, transparent communication, and commitment to excellence.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card bg-background/50 text-center">
                <div className="text-brand-500 text-xl font-bold mb-2 text-white">Innovation</div>
                <p className="text-gray-400 text-sm">Pushing boundaries with cutting-edge solutions</p>
              </div>
              <div className="card bg-background/50 text-center">
                <div className="text-brand-500 text-xl font-bold mb-2 text-white">Performance</div>
                <p className="text-gray-400 text-sm">Creating fast, reliable, and scalable applications</p>
              </div>
              <div className="card bg-background/50 text-center">
                <div className="text-brand-500 text-xl font-bold mb-2 text-white">Customer-First</div>
                <p className="text-gray-400 text-sm">Your goals and satisfaction are our top priority</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-600 to-purple-700 p-1">
                <div className="h-full w-full rounded-xl bg-secondary/90 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-purple-500 p-8">
                    <div className="transform -rotate-6">Appsdyno</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl bg-gradient-to-br from-brand-300 to-brand-600"></div>
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-700"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary/50 to-transparent z-10"></div>
    </section>
  );
};

export default AboutSection;


import React from 'react';
import { Card } from '@/components/ui/card';
import { Sparkles, Code2, Gauge, Users } from 'lucide-react';

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
              <p className="text-base leading-relaxed">
                Appsdyno is a forward-thinking software development agency that specializes in creating 
                <span className="text-brand-400 font-semibold"> innovative</span>, 
                <span className="text-purple-400 font-semibold"> scalable</span>, and 
                <span className="text-brand-300 font-semibold"> high-performance</span> digital solutions. 
                With our team of experienced developers, designers, and strategists, we transform complex ideas into 
                elegant software products that drive business growth.
              </p>
              <p className="text-base leading-relaxed">
                Our approach combines technical expertise with creative thinking, ensuring that every project we deliver 
                not only meets but <span className="text-purple-400 italic">exceeds our clients' expectations</span>. 
                We pride ourselves on our customer-first values, transparent communication, and commitment to excellence.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-background/80 to-background p-4 border-brand-800/30 shadow-lg hover:shadow-brand-900/20 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center">
                    <Sparkles className="text-brand-400 h-5 w-5" />
                  </div>
                  <div className="text-white font-semibold">Innovation</div>
                  <p className="text-gray-400 text-sm">Pushing boundaries with cutting-edge solutions</p>
                </div>
              </Card>
              <Card className="bg-gradient-to-br from-background/80 to-background p-4 border-purple-800/30 shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Gauge className="text-purple-400 h-5 w-5" />
                  </div>
                  <div className="text-white font-semibold">Performance</div>
                  <p className="text-gray-400 text-sm">Creating fast, reliable, and scalable applications</p>
                </div>
              </Card>
              <Card className="bg-gradient-to-br from-background/80 to-background p-4 border-blue-800/30 shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Users className="text-brand-300 h-5 w-5" />
                  </div>
                  <div className="text-white font-semibold">Customer-First</div>
                  <p className="text-gray-400 text-sm">Your goals and satisfaction are our top priority</p>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-600/80 to-purple-700/80 p-1 shadow-xl shadow-brand-700/20">
                <div className="h-full w-full rounded-xl bg-secondary/90 backdrop-blur-sm flex items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-purple-700/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 p-8 text-center">
                    <div className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-purple-400 to-brand-300 mb-4">
                      <div className="transform -rotate-6">Appsdyno</div>
                    </div>
                    <div className="text-sm text-gray-300 max-w-xs mx-auto">
                      <span className="text-brand-300">Transforming</span> ideas into 
                      <span className="text-purple-400"> exceptional</span> digital experiences
                    </div>
                    
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="px-3 py-2 rounded-lg bg-brand-500/10 text-xs text-brand-300 font-medium">Web Development</div>
                      <div className="px-3 py-2 rounded-lg bg-purple-500/10 text-xs text-purple-300 font-medium">Mobile Apps</div>
                      <div className="px-3 py-2 rounded-lg bg-blue-500/10 text-xs text-blue-300 font-medium">UI/UX Design</div>
                      <div className="px-3 py-2 rounded-lg bg-teal-500/10 text-xs text-teal-300 font-medium">Cloud Solutions</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl bg-gradient-to-br from-brand-400/80 to-brand-600/80 blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-400/80 to-purple-700/80 blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute bottom-12 -left-4 h-16 w-16 rounded-lg bg-gradient-to-br from-blue-400/50 to-blue-700/50 blur-lg opacity-40 animate-pulse"></div>
              <div className="absolute top-12 -right-4 h-16 w-16 rounded-lg bg-gradient-to-br from-teal-400/50 to-teal-700/50 blur-lg opacity-40 animate-pulse"></div>
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

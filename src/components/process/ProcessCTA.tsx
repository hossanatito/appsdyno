
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProcessCTA = () => {
  return (
    <div className="mt-16 text-center">
      <h4 className="text-xl md:text-2xl font-medium mb-6 text-gradient-to-r from-brand-300 via-purple-300 to-teal-300 max-w-2xl mx-auto">
        Ready to transform your digital vision into reality?
      </h4>
      <a href="#contact" className="inline-flex items-center gap-2 btn-primary group">
        Start your project with us
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default ProcessCTA;

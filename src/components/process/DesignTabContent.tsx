
import React from 'react';
import { Card } from '@/components/ui/card';
import { Layout } from 'lucide-react';

const DesignTabContent = () => {
  return (
    <Card className="p-6 border-brand-500/20 bg-gradient-to-br from-background via-background to-brand-900/5">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-brand-500/10">
            <Layout className="text-brand-400 h-6 w-6" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-brand-300">Design & Discovery</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              We begin by understanding your vision, goals, and requirements through in-depth 
              consultation sessions. Our designers then craft intuitive user experiences that align 
              with your brand identity.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-brand-400 mr-2">•</span>
                <span>Requirements gathering & analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-400 mr-2">•</span>
                <span>User research & persona creation</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-400 mr-2">•</span>
                <span>Wireframing & prototyping</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-400 mr-2">•</span>
                <span>UI/UX design & brand alignment</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full rounded-xl overflow-hidden relative bg-gradient-to-br from-brand-500/5 to-brand-700/20 p-1">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-brand-700/30 opacity-30"></div>
          <div className="rounded-lg overflow-hidden relative h-full min-h-[300px] flex items-center justify-center bg-black/40">
            {/* Faint Number Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[20rem] font-bold text-brand-500 opacity-10">01</span>
            </div>
            <div className="relative z-10 p-6 text-center">
              <span className="text-xs font-semibold px-3 py-1 bg-brand-500/20 border border-brand-500/30 rounded-full text-brand-300 mb-3 inline-block">DESIGN PHASE</span>
              <div className="font-semibold text-xl text-white">Prototype Preview</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DesignTabContent;

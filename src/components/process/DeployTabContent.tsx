
import React from 'react';
import { Card } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const DeployTabContent = () => {
  return (
    <Card className="p-6 border-teal-500/20 bg-gradient-to-br from-background via-background to-teal-900/5">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-teal-500/10">
            <Sparkles className="text-teal-400 h-6 w-6" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-teal-300">Deployment & Launch</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              We carefully deploy your solution to production environments with minimal downtime, 
              providing ongoing support and maintenance to ensure continued success.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">•</span>
                <span>Smooth production deployment</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">•</span>
                <span>CI/CD pipeline setup</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">•</span>
                <span>Performance monitoring & analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">•</span>
                <span>Post-launch support & maintenance</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full rounded-xl overflow-hidden relative bg-gradient-to-br from-teal-500/5 to-teal-700/20 p-1">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-teal-700/30 opacity-30"></div>
          <div className="rounded-lg overflow-hidden relative h-full min-h-[300px] flex items-center justify-center bg-black/40">
            {/* Faint Number Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[20rem] font-bold text-teal-500 opacity-10">04</span>
            </div>
            <div className="relative z-10 p-6 text-center">
              <span className="text-xs font-semibold px-3 py-1 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-300 mb-3 inline-block">DEPLOYMENT PHASE</span>
              <div className="font-semibold text-xl text-white">Live Operation</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DeployTabContent;

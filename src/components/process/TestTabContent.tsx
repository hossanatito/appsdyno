
import React from 'react';
import { Card } from '@/components/ui/card';
import { Gauge } from 'lucide-react';

const TestTabContent = () => {
  return (
    <Card className="p-6 border-blue-500/20 bg-gradient-to-br from-background via-background to-blue-900/5">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-blue-500/10">
            <Gauge className="text-blue-400 h-6 w-6" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-300">Testing & Quality Assurance</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              We conduct rigorous testing to ensure your solution works flawlessly across all devices and 
              scenarios, identifying and resolving issues before they reach your users.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Functional & integration testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Performance & load testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Cross-browser & device compatibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Security & vulnerability assessment</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full rounded-xl overflow-hidden relative bg-gradient-to-br from-blue-500/5 to-blue-700/20 p-1">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/30 opacity-30"></div>
          <div className="rounded-lg overflow-hidden relative h-full min-h-[300px] flex items-center justify-center bg-black/40">
            {/* Faint Number Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[20rem] font-bold text-blue-500 opacity-10">03</span>
            </div>
            <div className="relative z-10 p-6 text-center">
              <span className="text-xs font-semibold px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 mb-3 inline-block">TESTING PHASE</span>
              <div className="font-semibold text-xl text-white">Quality Assurance</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TestTabContent;

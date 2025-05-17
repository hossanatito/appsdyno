
import React from 'react';
import { Card } from '@/components/ui/card';
import { Code2 } from 'lucide-react';

const DevelopTabContent = () => {
  return (
    <Card className="p-6 border-purple-500/20 bg-gradient-to-br from-background via-background to-purple-900/5">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-purple-500/10">
            <Code2 className="text-purple-400 h-6 w-6" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-purple-300">Development & Engineering</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              Our expert developers transform designs into functional, responsive, and 
              scalable applications using the latest technologies and best practices in software development.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Technical architecture planning</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Frontend development (React, Angular, Vue)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Backend systems & API development</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Database design & integration</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full rounded-xl overflow-hidden relative bg-gradient-to-br from-purple-500/5 to-purple-700/20 p-1">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-700/30 opacity-30"></div>
          <div className="rounded-lg overflow-hidden relative h-full min-h-[300px] flex items-center justify-center bg-black/40">
            {/* Faint Number Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[20rem] font-bold text-purple-500 opacity-10">02</span>
            </div>
            <div className="relative z-10 p-6 text-center">
              <span className="text-xs font-semibold px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 mb-3 inline-block">DEVELOPMENT PHASE</span>
              <div className="font-semibold text-xl text-white">Code Implementation</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DevelopTabContent;


import React from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import ProcessTabsList from './process/ProcessTabsList';
import DesignTabContent from './process/DesignTabContent';
import DevelopTabContent from './process/DevelopTabContent';
import TestTabContent from './process/TestTabContent';
import DeployTabContent from './process/DeployTabContent';
import ProcessCTA from './process/ProcessCTA';

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Development Process</h2>
          <p className="section-subtitle">
            Transforming ideas into impactful digital solutions through our proven methodology
          </p>
        </div>

        <Tabs defaultValue="design" className="w-full max-w-4xl mx-auto">
          <ProcessTabsList />
          
          <div className="relative mt-8">
            <TabsContent value="design" className="mt-0">
              <DesignTabContent />
            </TabsContent>
            
            <TabsContent value="develop" className="mt-0">
              <DevelopTabContent />
            </TabsContent>
            
            <TabsContent value="test" className="mt-0">
              <TestTabContent />
            </TabsContent>
            
            <TabsContent value="deploy" className="mt-0">
              <DeployTabContent />
            </TabsContent>
          </div>
        </Tabs>
        
        <ProcessCTA />
      </div>
    </section>
  );
};

export default ProcessSection;

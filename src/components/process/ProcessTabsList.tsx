
import React from 'react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProcessTabsList = () => {
  return (
    <TabsList className="grid w-full grid-cols-4 mb-8">
      <TabsTrigger value="design" className="data-[state=active]:bg-brand-500/20 data-[state=active]:text-brand-400">
        <span className="hidden sm:inline mr-2">01.</span> Design
      </TabsTrigger>
      <TabsTrigger value="develop" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
        <span className="hidden sm:inline mr-2">02.</span> Develop
      </TabsTrigger>
      <TabsTrigger value="test" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400">
        <span className="hidden sm:inline mr-2">03.</span> Test
      </TabsTrigger>
      <TabsTrigger value="deploy" className="data-[state=active]:bg-teal-500/20 data-[state=active]:text-teal-400">
        <span className="hidden sm:inline mr-2">04.</span> Deploy
      </TabsTrigger>
    </TabsList>
  );
};

export default ProcessTabsList;

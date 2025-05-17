
import React from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Code2, Layout, Gauge, Sparkles, ArrowRight } from 'lucide-react';

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
          
          <div className="relative mt-8">
            <TabsContent value="design" className="mt-0">
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
            </TabsContent>
            
            <TabsContent value="develop" className="mt-0">
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
            </TabsContent>
            
            <TabsContent value="test" className="mt-0">
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
            </TabsContent>
            
            <TabsContent value="deploy" className="mt-0">
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
            </TabsContent>
          </div>
        </Tabs>
        
        <div className="mt-16 text-center">
          <h4 className="text-xl md:text-2xl font-medium mb-6 text-gradient-to-r from-brand-300 via-purple-300 to-teal-300 max-w-2xl mx-auto">
            Ready to transform your digital vision into reality?
          </h4>
          <a href="#contact" className="inline-flex items-center gap-2 btn-primary group">
            Start your project with us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Image, Text, Plus } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                ✨ AI-Powered Design Tool
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
                Create Stunning 
                <span className="text-primary block">Flyers & Posters</span>
                in Minutes
              </h1>
              
              <p className="text-lg md:text-xl text-secondary-lighter mb-8 max-w-2xl">
                No design skills needed! Our AI-powered platform helps small businesses and hustlers create professional marketing materials that get results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg">
                  Start Creating Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg">
                  View Templates
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">500+</div>
                  <div className="text-sm text-secondary-lighter">Templates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">10K+</div>
                  <div className="text-sm text-secondary-lighter">Designs Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">4.9★</div>
                  <div className="text-sm text-secondary-lighter">User Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Design Preview */}
            <div className="relative animate-slide-up">
              <div className="relative">
                {/* Main Design Canvas */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute top-4 left-4 right-4 h-12 bg-white rounded-lg shadow-sm flex items-center px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <Text className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-semibold text-secondary">Summer Sale</span>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Plus className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-secondary-lighter font-medium">AI-Generated Content</p>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 h-20 bg-white rounded-lg shadow-sm flex items-center justify-between px-4">
                      <div className="flex items-center space-x-2">
                        <Image className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-secondary">Auto Images</span>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary-dark text-white">
                        Generate
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-xs font-medium text-secondary">Live Preview</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium text-secondary">KES 50 per design</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Plus, Image, Text } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            🚀 Ready to Start?
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Start Creating Professional Flyers
            <span className="block">in the Next 5 Minutes</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of Kenyan hustlers who are already growing their businesses with professional marketing materials. No design skills required!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Creating Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              Watch Demo
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">500+ Templates</h3>
              <p className="text-white/80 text-sm">Professional designs for every business type</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Text className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
              <p className="text-white/80 text-sm">Smart content generation and suggestions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Image className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Print Ready</h3>
              <p className="text-white/80 text-sm">High-resolution files ready for printing</p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 mb-4">Trusted by 10,000+ business owners across Kenya</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-white font-semibold">Nairobi</div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="text-white font-semibold">Mombasa</div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="text-white font-semibold">Kisumu</div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="text-white font-semibold">Nakuru</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

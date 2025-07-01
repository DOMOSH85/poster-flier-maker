
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight } from 'lucide-react';

const TemplatesSection = () => {
  const categories = [
    { id: 'business', name: 'Business', count: 120 },
    { id: 'sale', name: 'Sales & Promo', count: 98 },
    { id: 'event', name: 'Events', count: 85 },
    { id: 'restaurant', name: 'Food & Dining', count: 67 },
    { id: 'service', name: 'Services', count: 45 },
  ];

  const templates = {
    business: [
      { name: 'Professional Service', colors: ['bg-blue-500', 'bg-white', 'bg-gray-800'], popular: true },
      { name: 'Modern Corporate', colors: ['bg-purple-600', 'bg-white', 'bg-gray-100'], popular: false },
      { name: 'Clean Business', colors: ['bg-primary', 'bg-white', 'bg-gray-50'], popular: true },
      { name: 'Executive Suite', colors: ['bg-gray-800', 'bg-white', 'bg-blue-600'], popular: false },
    ],
    sale: [
      { name: 'Big Sale Banner', colors: ['bg-red-500', 'bg-yellow-400', 'bg-white'], popular: true },
      { name: 'Discount Flyer', colors: ['bg-orange-500', 'bg-white', 'bg-gray-100'], popular: true },
      { name: 'Flash Sale', colors: ['bg-pink-500', 'bg-purple-600', 'bg-white'], popular: false },
      { name: 'Clearance Event', colors: ['bg-green-600', 'bg-white', 'bg-gray-50'], popular: false },
    ],
    event: [
      { name: 'Concert Poster', colors: ['bg-purple-600', 'bg-pink-500', 'bg-black'], popular: true },
      { name: 'Workshop Flyer', colors: ['bg-blue-600', 'bg-white', 'bg-gray-100'], popular: false },
      { name: 'Party Invitation', colors: ['bg-yellow-400', 'bg-orange-500', 'bg-white'], popular: true },
      { name: 'Conference Banner', colors: ['bg-gray-800', 'bg-primary', 'bg-white'], popular: false },
    ],
    restaurant: [
      { name: 'Menu Special', colors: ['bg-red-600', 'bg-yellow-500', 'bg-white'], popular: true },
      { name: 'Grand Opening', colors: ['bg-primary', 'bg-white', 'bg-gray-100'], popular: false },
      { name: 'Happy Hour', colors: ['bg-orange-500', 'bg-yellow-400', 'bg-white'], popular: true },
      { name: 'Catering Service', colors: ['bg-blue-600', 'bg-white', 'bg-gray-50'], popular: false },
    ],
    service: [
      { name: 'Home Services', colors: ['bg-blue-600', 'bg-white', 'bg-gray-100'], popular: true },
      { name: 'Cleaning Service', colors: ['bg-primary', 'bg-white', 'bg-blue-100'], popular: false },
      { name: 'Repair Service', colors: ['bg-orange-600', 'bg-white', 'bg-gray-800'], popular: false },
      { name: 'Professional Service', colors: ['bg-gray-800', 'bg-primary', 'bg-white'], popular: true },
    ],
  };

  return (
    <section id="templates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            🎨 Design Templates
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            500+ Professional Templates
            <span className="text-primary block">Ready to Customize</span>
          </h2>
          <p className="text-lg text-secondary-lighter max-w-2xl mx-auto">
            Choose from our extensive library of professionally designed templates, organized by industry and purpose.
          </p>
        </div>

        <Tabs defaultValue="business" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-12 bg-white border border-gray-200 rounded-xl p-1">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex flex-col py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all"
              >
                <span className="font-medium text-sm">{category.name}</span>
                <span className="text-xs opacity-70">{category.count} templates</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {templates[category.id as keyof typeof templates].map((template, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-primary/30 cursor-pointer overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        {/* Template Preview */}
                        <div className="aspect-[3/4] bg-white p-4 flex flex-col">
                          <div className={`h-8 ${template.colors[0]} rounded-md mb-3 flex items-center justify-center`}>
                            <div className="w-16 h-2 bg-white/30 rounded-full"></div>
                          </div>
                          <div className={`flex-1 ${template.colors[1]} rounded-md p-3 mb-3 relative overflow-hidden`}>
                            <div className={`w-full h-3 ${template.colors[2]} rounded mb-2`}></div>
                            <div className={`w-3/4 h-2 ${template.colors[2]} rounded mb-2`}></div>
                            <div className={`w-1/2 h-2 ${template.colors[2]} rounded`}></div>
                            <div className={`absolute bottom-2 right-2 w-8 h-8 ${template.colors[0]} rounded-full`}></div>
                          </div>
                          <div className={`h-6 ${template.colors[0]} rounded-md`}></div>
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button className="bg-primary hover:bg-primary-dark text-white">
                            Use Template
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>

                        {/* Popular Badge */}
                        {template.popular && (
                          <Badge className="absolute top-2 right-2 bg-primary text-white text-xs">
                            Popular
                          </Badge>
                        )}
                      </div>

                      <div className="p-4">
                        <h3 className="font-semibold text-secondary group-hover:text-primary transition-colors">
                          {template.name}
                        </h3>
                        <div className="flex items-center space-x-1 mt-2">
                          {template.colors.map((color, colorIndex) => (
                            <div key={colorIndex} className={`w-3 h-3 ${color} rounded-full border border-white shadow-sm`}></div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8">
            Browse All Templates
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;

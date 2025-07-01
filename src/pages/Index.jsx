
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TemplatesSection from '../components/TemplatesSection';
import PricingSection from '../components/PricingSection';
import GallerySection from '../components/GallerySection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TemplatesSection />
      <PricingSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

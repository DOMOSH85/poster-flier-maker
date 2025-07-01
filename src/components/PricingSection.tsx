
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Pay Per Design',
      price: 'KES 50',
      period: 'per design',
      description: 'Perfect for occasional users who need designs on demand',
      features: [
        'AI-powered design generation',
        'Access to 500+ templates',
        'High-resolution download',
        'Basic customization tools',
        'Commercial use license',
        '24/7 support'
      ],
      buttonText: 'Create Design',
      popular: false,
      gradient: 'from-gray-50 to-white'
    },
    {
      name: 'Hustler Pro',
      price: 'KES 1,500',
      period: 'per month',
      description: 'Unlimited designs for growing businesses and active hustlers',
      features: [
        'Unlimited AI designs',
        'Premium template library',
        'Advanced customization',
        'Brand kit & logo upload',
        'Priority support',
        'Design history & saves',
        'Bulk export options',
        'Custom brand templates'
      ],
      buttonText: 'Start Free Trial',
      popular: true,
      gradient: 'from-primary/10 to-primary/5'
    },
    {
      name: 'Business Elite',
      price: 'KES 3,000',
      period: 'per month',
      description: 'Complete solution with printing services for established businesses',
      features: [
        'Everything in Hustler Pro',
        'Print service integration',
        'Delivery to your location',
        'Bulk printing discounts',
        'Dedicated account manager',
        'Custom template creation',
        'Team collaboration tools',
        'White-label options'
      ],
      buttonText: 'Contact Sales',
      popular: false,
      gradient: 'from-secondary/10 to-secondary/5'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            💰 Simple Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Choose Your Perfect Plan
            <span className="text-primary block">Start Free, Scale as You Grow</span>
          </h2>
          <p className="text-lg text-secondary-lighter max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Start with pay-per-design or go unlimited with our monthly plans.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
              plan.popular 
                ? 'border-primary shadow-lg scale-105' 
                : 'border-gray-200 hover:border-primary/30'
            }`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className={`bg-gradient-to-br ${plan.gradient} rounded-t-lg pb-8`}>
                <CardTitle className="text-2xl font-bold text-secondary mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                  <span className="text-secondary-lighter ml-2">{plan.period}</span>
                </div>
                <CardDescription className="text-secondary-lighter text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-6">
                <Button 
                  className={`w-full mb-6 ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary-dark text-white' 
                      : 'bg-secondary hover:bg-secondary-light text-white'
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <div className="space-y-4">
                  <h4 className="font-semibold text-secondary mb-3">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-secondary-lighter">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Pricing Info */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="font-semibold text-secondary mb-2">Secure Payments</h3>
              <p className="text-secondary-lighter text-sm">Pay with M-Pesa, Visa, or Mastercard. All transactions are encrypted and secure.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-semibold text-secondary mb-2">Cancel Anytime</h3>
              <p className="text-secondary-lighter text-sm">No long-term commitments. Cancel your subscription anytime with just one click.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-secondary mb-2">Money-Back Guarantee</h3>
              <p className="text-secondary-lighter text-sm">Not satisfied? Get a full refund within 30 days, no questions asked.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

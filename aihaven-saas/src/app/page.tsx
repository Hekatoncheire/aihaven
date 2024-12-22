import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Globe, CloudCog, Rocket, ChevronRight, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const features = [
    {
      icon: <Globe className="w-12 h-12 text-brand-primary-500" />,
      title: 'Cloud Hosting',
      description: 'Deploy AI models globally with our enterprise-grade infrastructure. Get started in minutes.',
    },
    {
      icon: <CloudCog className="w-12 h-12 text-brand-secondary-500" />,
      title: 'Model Training',
      description: 'Leverage state-of-the-art ML tools and optimized training pipelines for better results.',
    },
    {
      icon: <Rocket className="w-12 h-12 text-brand-accent-cyan-500" />,
      title: 'Scalable Solutions',
      description: 'Automatically scale resources based on demand. Pay only for what you use.',
    }
  ];

  const benefits = [
    '99.9% Uptime SLA',
    'Global CDN',
    '24/7 Support',
    'Auto-scaling',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-neutral-50 to-white text-brand-neutral-900">
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-brand-neutral-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-brand-primary-500 to-brand-secondary-500 text-transparent bg-clip-text">AI Haven</h1>
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-brand-neutral-600 hover:text-brand-neutral-900 font-medium">Features</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white rounded-lg shadow-lg p-2 border border-brand-neutral-200">
                    <NavigationMenuLink href="/features/hosting" className="block px-4 py-3 text-sm rounded-md hover:bg-brand-primary-50 hover:text-brand-primary-600 transition-all">Hosting</NavigationMenuLink>
                    <NavigationMenuLink href="/features/training" className="block px-4 py-3 text-sm rounded-md hover:bg-brand-secondary-50 hover:text-brand-secondary-600 transition-all">Training</NavigationMenuLink>
                    <NavigationMenuLink href="/features/scaling" className="block px-4 py-3 text-sm rounded-md hover:bg-brand-accent-cyan-50 hover:text-brand-accent-cyan-600 transition-all">Scaling</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-brand-neutral-600 hover:text-brand-neutral-900 font-medium">Company</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white rounded-lg shadow-lg p-2 border border-brand-neutral-200">
                    <NavigationMenuLink href="/about" className="block px-4 py-3 text-sm rounded-md hover:bg-brand-primary-50 hover:text-brand-primary-600 transition-all">About Us</NavigationMenuLink>
                    <NavigationMenuLink href="/careers" className="block px-4 py-3 text-sm rounded-md hover:bg-brand-secondary-50 hover:text-brand-secondary-600 transition-all">Careers</NavigationMenuLink>
                    <NavigationMenuLink href="/blog" className="block px-4 py-3 text-sm rounded-md hover:bg-brand-accent-cyan-50 hover:text-brand-accent-cyan-600 transition-all">Blog</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="secondary" 
              className="text-brand-secondary-600 hover:text-brand-secondary-700"
            >
              Login
            </Button>
            <Button
              variant="primary"
              className="group"
              glow="subtle"
            >
              Get Started Free
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-50 to-brand-secondary-50 opacity-50 -z-10" />
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-1.5 bg-white/80 backdrop-blur-sm text-brand-primary-600 border-brand-primary-200 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 inline-block mr-2" />
              The Next Generation AI Platform
            </Badge>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-brand-primary-500 via-brand-secondary-500 to-brand-accent-cyan-500 text-transparent bg-clip-text leading-tight">
              Build, Deploy, and Scale Your AI Models
            </h2>
            <p className="text-xl text-brand-neutral-600 mb-10 leading-relaxed">
              Experience seamless AI deployment with enterprise-grade infrastructure. 
              Start building the future of AI today.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <Button
                size="xl"
                variant="primary"
                className="group w-full sm:w-auto"
                glow="pulse"
              >
                Start Building
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="xl"
                variant="secondary"
                className="group w-full sm:w-auto"
              >
                View Demo
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="mt-10 flex items-center justify-center space-x-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-brand-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent-emerald-500 mr-2" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 bg-white text-brand-secondary-600 border-brand-secondary-200 rounded-full">
              Features
            </Badge>
            <h3 className="text-3xl font-bold mb-4 text-brand-neutral-900">
              Everything you need to succeed
            </h3>
            <p className="text-lg text-brand-neutral-600 max-w-2xl mx-auto">
              Our platform provides all the tools and features you need to build and scale your AI solutions.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative overflow-hidden rounded-2xl border border-brand-neutral-200/60 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary-50">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-neutral-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-brand-neutral-600">{feature.description}</p>
                <Button
                  variant="ghost"
                  className="group mt-4"
                >
                  Learn more
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 text-center bg-gradient-to-r from-brand-primary-50 to-brand-secondary-50 rounded-3xl my-20">
          <h3 className="text-3xl font-bold mb-6 text-brand-neutral-900">Ready to get started?</h3>
          <p className="text-lg text-brand-neutral-600 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and companies building the future with AI Haven.
          </p>
          <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <Button
              size="lg"
              variant="primary"
              className="group w-full sm:w-auto"
              glow="subtle"
            >
              Get Started
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="group w-full sm:w-auto"
            >
              Learn More
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>

        <section className="py-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 bg-white text-brand-secondary-600 border-brand-secondary-200 rounded-full">
              Pricing
            </Badge>
            <h3 className="text-3xl font-bold mb-4 text-brand-neutral-900">
              Simple and transparent pricing
            </h3>
            <p className="text-lg text-brand-neutral-600 max-w-2xl mx-auto">
              Our pricing is designed to be fair and flexible. 
              Start building the future of AI today.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <Button
              size="lg"
              variant="premium"
              className="group w-full sm:w-auto"
              glow="strong"
            >
              Get Started Free
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="glass"
              className="group w-full sm:w-auto"
            >
              View Pricing
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-neutral-200 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-brand-neutral-600">&copy; {new Date().getFullYear()} AI Haven. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-brand-neutral-600 hover:text-brand-neutral-900">Privacy</a>
              <a href="/terms" className="text-brand-neutral-600 hover:text-brand-neutral-900">Terms</a>
              <a href="/contact" className="text-brand-neutral-600 hover:text-brand-neutral-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

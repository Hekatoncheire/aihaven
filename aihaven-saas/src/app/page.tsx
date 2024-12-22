import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Globe, CloudCog, Rocket, ChevronRight } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      title: 'Cloud Hosting',
      description: 'Seamless deployment of AI models with global infrastructure.',
    },
    {
      icon: <CloudCog className="w-10 h-10 text-green-600" />,
      title: 'Model Training',
      description: 'Advanced training pipelines with cutting-edge machine learning tools.',
    },
    {
      icon: <Rocket className="w-10 h-10 text-purple-600" />,
      title: 'Scalable Solutions',
      description: 'Easily scale your AI models to meet growing computational needs.',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-slate-800">AI Haven</h1>
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-600 hover:text-slate-900">Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink href="/features/hosting" className="block px-3 py-2 text-sm rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors">Hosting</NavigationMenuLink>
                    <NavigationMenuLink href="/features/training" className="block px-3 py-2 text-sm rounded-md hover:bg-green-100 hover:text-green-600 transition-colors">Training</NavigationMenuLink>
                    <NavigationMenuLink href="/features/scaling" className="block px-3 py-2 text-sm rounded-md hover:bg-purple-100 hover:text-purple-600 transition-colors">Scaling</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-600 hover:text-slate-900">Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink href="/about" className="block px-3 py-2 text-sm rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors">About Us</NavigationMenuLink>
                    <NavigationMenuLink href="/careers" className="block px-3 py-2 text-sm rounded-md hover:bg-green-100 hover:text-green-600 transition-colors">Careers</NavigationMenuLink>
                    <NavigationMenuLink href="/blog" className="block px-3 py-2 text-sm rounded-md hover:bg-purple-100 hover:text-purple-600 transition-colors">Blog</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="text-slate-700">Login</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-slate-100 text-slate-800">AI Hosting Platform</Badge>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Empower Your AI Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Host, Train, and Scale AI Models with Unprecedented Ease
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white p-4 rounded-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  {feature.icon}
                  <CardTitle className="text-slate-800">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-blue-600 hover:text-blue-700">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </section>

        <section className="text-center">
          <Button size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </section>
      </main>

      <footer className="bg-slate-100 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600">&copy; 2024 AI Haven. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

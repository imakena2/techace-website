
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background gradient element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-r from-techace-blue/20 to-techace-teal/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-techace-dark">
              Empowering Youth Through <span className="bg-clip-text text-transparent bg-tech-gradient">Technology</span>
            </h1>
            <p className="text-lg text-techace-gray mb-8 max-w-lg">
              Tech Ace Solutions is dedicated to bridging the digital divide by providing technology education and resources to youth in marginalized communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-tech-gradient hover:opacity-90 transition-opacity text-white py-6 px-8"
                asChild
                size="lg"
              >
                <Link to="/services">Our Initiatives</Link>
              </Button>
              <Button
                variant="outline"
                className="border-techace-blue text-techace-blue hover:bg-techace-blue/10 transition-colors py-6 px-8"
                asChild
                size="lg"
              >
                <Link to="/contact">Join Us</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in hidden md:block z-10">
            <div className="bg-gradient-to-br from-techace-blue to-techace-teal rounded-xl h-80 w-80 mx-auto" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-2 rounded-xl shadow-xl w-72 h-72">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Students learning technology" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

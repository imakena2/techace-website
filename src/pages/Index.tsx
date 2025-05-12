import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Code, BookOpen, User, Briefcase, Calendar, MessageSquare } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Tech Ace Solutions | Empowering Youth Through Technology";
  }, []);

  // Services data
  const services = [
    {
      icon: BookOpen,
      title: 'Digital Literacy Programs',
      description: 'Foundational tech skills training for youth in underserved communities to bridge the digital divide.'
    },
    {
      icon: Code,
      title: 'Coding Workshops',
      description: 'Hands-on programming courses teaching essential coding skills from basic to advanced levels.'
    },
    {
      icon: User,
      title: 'Tech Mentorship',
      description: 'One-on-one guidance from industry professionals to nurture young tech talent.'
    },
    {
      icon: Briefcase,
      title: 'Career Development',
      description: 'Preparing youth for tech careers through resume building, interview skills, and industry connections.'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'David Kamau',
      role: 'Program Graduate',
      testimonial: 'Tech Ace changed my life. I went from having no computer skills to landing a job as a junior web developer in just 6 months.',
    },
    {
      name: 'Sarah Ochieng',
      role: 'Community Partner',
      testimonial: 'The impact Tech Ace has had on our community is immeasurable. Young people now have opportunities they never imagined possible.',
    },
    {
      name: 'Michael Wanyama',
      role: 'Program Mentor',
      testimonial: 'Being part of Tech Ace allows me to give back to my community. Seeing the students grow their skills is incredibly rewarding.',
    }
  ];

  // Blog posts data
  const blogPosts = [
    {
      title: 'Digital Skills Gap in Marginalized Communities',
      excerpt: 'Exploring the challenges and solutions to bridge the growing digital divide.',
      date: 'June 15, 2023',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Success Story: From Tech Novice to Developer',
      excerpt: 'How our coding boot camp transformed a student with no prior experience into a skilled developer.',
      date: 'May 28, 2023',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Community Tech Hubs: Creating Access Points',
      excerpt: 'Our approach to establishing technology centers in underserved neighborhoods.',
      date: 'April 10, 2023',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-techace-dark">About Tech Ace Solutions</h2>
              <p className="text-techace-gray max-w-2xl mx-auto">
                Founded with a mission to bridge the digital divide, Tech Ace Solutions empowers youth in marginalized communities through technology education, mentorship, and resources.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-techace-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-techace-blue">01</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-techace-dark">Our Mission</h3>
                <p className="text-techace-gray">
                  To provide equal access to technology education and career opportunities for underserved youth.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-techace-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-techace-teal">02</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-techace-dark">Our Vision</h3>
                <p className="text-techace-gray">
                  A world where all young people have the digital skills needed to thrive in the modern economy.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-gradient-to-r from-techace-blue/10 to-techace-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-tech-gradient">03</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-techace-dark">Our Impact</h3>
                <p className="text-techace-gray">
                  Over 500 youth trained, 200+ placed in tech jobs, and 10 community tech hubs established.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-techace-dark">Our Services</h2>
              <p className="text-techace-gray max-w-2xl mx-auto">
                We offer various programs designed to equip youth with the skills and resources they need to succeed in the digital economy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                className="bg-gradient-to-r from-techace-blue to-techace-teal hover:opacity-90 transition-opacity"
                asChild
                size="lg"
              >
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Statistics Section */}
        <section className="bg-gradient-to-r from-techace-blue to-techace-teal text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <p>Youth Trained</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10</div>
                <p>Community Tech Hubs</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <p>Job Placements</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25</div>
                <p>Partner Organizations</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Portfolio/Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-techace-dark">Projects & Impact</h2>
              <p className="text-techace-gray max-w-2xl mx-auto">
                Explore some of our successful community initiatives and the impact they've had.
              </p>
            </div>
            
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="community">Community</TabsTrigger>
                  <TabsTrigger value="career">Career</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden border-none shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="Project" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-techace-dark">Coding Boot Camps</h3>
                    <p className="text-techace-gray mb-4">Intensive 12-week programs teaching web development skills to youth from underserved areas.</p>
                    <Button variant="outline" className="w-full border-techace-blue text-techace-blue">View Details</Button>
                  </div>
                </Card>
                
                <Card className="overflow-hidden border-none shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="Project" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-techace-dark">Community Tech Hub</h3>
                    <p className="text-techace-gray mb-4">Establishing technology centers in marginalized communities to provide access to computers and internet.</p>
                    <Button variant="outline" className="w-full border-techace-blue text-techace-blue">View Details</Button>
                  </div>
                </Card>
                
                <Card className="overflow-hidden border-none shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="Project" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-techace-dark">Digital Skills Training</h3>
                    <p className="text-techace-gray mb-4">Basic computer literacy programs for communities with limited access to technology.</p>
                    <Button variant="outline" className="w-full border-techace-blue text-techace-blue">View Details</Button>
                  </div>
                </Card>
              </TabsContent>
              
              {/* Other tabs would have similar content structure */}
              <TabsContent value="education" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Education projects */}
              </TabsContent>
              
              <TabsContent value="community" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Community projects */}
              </TabsContent>
              
              <TabsContent value="career" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Career development projects */}
              </TabsContent>
            </Tabs>
            
            <div className="mt-12 text-center">
              <Button 
                className="bg-gradient-to-r from-techace-blue to-techace-teal hover:opacity-90 transition-opacity"
                asChild
                size="lg"
              >
                <Link to="/portfolio">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-techace-dark">Success Stories</h2>
              <p className="text-techace-gray max-w-2xl mx-auto">
                Hear from our program participants, community partners, and mentors.
              </p>
            </div>
            
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                    <TestimonialCard
                      name={testimonial.name}
                      role={testimonial.role}
                      testimonial={testimonial.testimonial}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </section>
        
        {/* Blog Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-techace-dark">Latest News</h2>
              <p className="text-techace-gray max-w-2xl mx-auto">
                Stay updated with our latest activities, stories, and tech insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-techace-gray mb-2 flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-techace-dark">{post.title}</h3>
                    <p className="text-techace-gray mb-4">{post.excerpt}</p>
                    <Button variant="outline" className="w-full border-techace-blue text-techace-blue">Read More</Button>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                className="bg-gradient-to-r from-techace-blue to-techace-teal hover:opacity-90 transition-opacity"
                asChild
                size="lg"
              >
                <Link to="/blog">View All Posts</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="py-16 bg-techace-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Involved Today</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Whether you want to join our programs, volunteer as a mentor, or partner with us, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-gradient-to-r from-techace-blue to-techace-teal hover:opacity-90 transition-opacity"
                asChild
                size="lg"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 transition-colors"
                asChild
                size="lg"
              >
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

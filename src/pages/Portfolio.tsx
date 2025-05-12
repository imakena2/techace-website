
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Portfolio = () => {
  useEffect(() => {
    // Set page title
    document.title = "Portfolio | Tech Ace Solutions";
  }, []);

  // Portfolio projects
  const projects = [
    {
      title: "Coding Boot Camps",
      category: "education",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Intensive 12-week programs teaching web development skills to youth from underserved areas.",
      achievements: ["Trained over 200 students", "85% job placement rate", "Partnerships with 15 tech companies"]
    },
    {
      title: "Community Tech Hub - Kibera",
      category: "community",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Establishing technology centers in marginalized communities to provide access to computers and internet.",
      achievements: ["Serves 500+ community members monthly", "24 computers with high-speed internet", "Open 7 days a week"]
    },
    {
      title: "Digital Skills Training",
      category: "education",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Basic computer literacy programs for communities with limited access to technology.",
      achievements: ["Reached 1000+ individuals", "Curriculum translated to 3 local languages", "Mobile training unit for remote areas"]
    },
    {
      title: "Tech Career Fair",
      category: "career",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Annual event connecting trained youth with potential employers in the technology sector.",
      achievements: ["30+ participating companies", "150+ job placements achieved", "Resume building workshops included"]
    },
    {
      title: "Girls in Tech Initiative",
      category: "education",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Special program focused on encouraging girls and young women to pursue careers in technology.",
      achievements: ["300+ female participants", "Mentorship from women in tech", "STEM scholarship program"]
    },
    {
      title: "Rural Tech Access Program",
      category: "community",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Mobile technology training centers that travel to rural communities with limited infrastructure.",
      achievements: ["Reached 15 rural communities", "Solar-powered equipment", "Basic to intermediate tech skills training"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-techace-blue to-techace-teal text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Projects & Impact</h1>
            <p className="max-w-2xl mx-auto">
              Explore our initiatives that are transforming communities through technology access and education.
            </p>
          </div>
        </section>
        
        {/* Portfolio Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                <TabsList>
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="community">Community</TabsTrigger>
                  <TabsTrigger value="career">Career</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-lg">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-techace-dark">{project.title}</h3>
                      <p className="text-techace-gray mb-4">{project.description}</p>
                      
                      <h4 className="font-semibold text-sm mb-2 text-techace-blue">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-techace-gray mb-4">
                        {project.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-techace-blue to-techace-teal hover:opacity-90 transition-opacity"
                      >
                        View Project Details
                      </Button>
                    </div>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="education" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter(project => project.category === "education")
                  .map((project, index) => (
                    <Card key={index} className="overflow-hidden border-none shadow-lg">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-techace-dark">{project.title}</h3>
                        <p className="text-techace-gray mb-4">{project.description}</p>
                        
                        <h4 className="font-semibold text-sm mb-2 text-techace-blue">Key Achievements:</h4>
                        <ul className="list-disc list-inside text-techace-gray mb-4">
                          {project.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                        
                        <Button 
                          className="w-full bg-gradient-to-r from-techace-blue to-techace-teal hover:opacity-90 transition-opacity"
                        >
                          View Project Details
                        </Button>
                      </div>
                    </Card>
                  ))}
              </TabsContent>
              
              <TabsContent value="community" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter(project => project.category === "community")
                  .map((project, index) => (
                    <Card key={index} className="overflow-hidden border-none shadow-lg">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-techace-dark">{project.title}</h3>
                        <p className="text-techace-gray mb-4">{project.description}</p>
                        
                        <h4 className="font-semibold text-sm mb-2 text-techace-blue">Key Achievements:</h4>
                        <ul className="list-disc list-inside text-techace-gray mb-4">
                          {project.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                        
                        <Button 
                          className="w-full bg-gradient-to-r from-techace-blue to-techace-teal hover:opacity-90 transition-opacity"
                        >
                          View Project Details
                        </Button>
                      </div>
                    </Card>
                  ))}
              </TabsContent>
              
              <TabsContent value="career" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter(project => project.category === "career")
                  .map((project, index) => (
                    <Card key={index} className="overflow-hidden border-none shadow-lg">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-techace-dark">{project.title}</h3>
                        <p className="text-techace-gray mb-4">{project.description}</p>
                        
                        <h4 className="font-semibold text-sm mb-2 text-techace-blue">Key Achievements:</h4>
                        <ul className="list-disc list-inside text-techace-gray mb-4">
                          {project.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                        
                        <Button 
                          className="w-full bg-gradient-to-r from-techace-blue to-techace-teal hover:opacity-90 transition-opacity"
                        >
                          View Project Details
                        </Button>
                      </div>
                    </Card>
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-techace-dark text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join our mission to bridge the digital divide and empower youth through technology education. Together, we can make a difference.
            </p>
            <Button 
              className="bg-gradient-to-r from-techace-blue to-techace-teal hover:opacity-90 transition-opacity"
              size="lg"
            >
              Become a Partner
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;

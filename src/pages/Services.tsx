
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Briefcase, Calendar, Code, MessageSquare, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Services = () => {
  useEffect(() => {
    // Set page title
    document.title = "Services | Tech Ace Solutions";
  }, []);

  // Core services
  const coreServices = [
    {
      icon: BookOpen,
      title: "Digital Literacy Programs",
      description: "Foundational tech skills training for youth in underserved communities to bridge the digital divide.",
      benefits: [
        "Basic computer skills and internet navigation",
        "Office productivity applications",
        "Online safety and digital citizenship",
        "Email and professional communication"
      ]
    },
    {
      icon: Code,
      title: "Coding Workshops",
      description: "Hands-on programming courses teaching essential coding skills from basic to advanced levels.",
      benefits: [
        "Web development (HTML, CSS, JavaScript)",
        "Mobile app development",
        "Programming fundamentals",
        "Project-based learning approach"
      ]
    },
    {
      icon: User,
      title: "Tech Mentorship",
      description: "One-on-one guidance from industry professionals to nurture young tech talent.",
      benefits: [
        "Personalized career guidance",
        "Industry connections",
        "Skill development plans",
        "Regular feedback and support"
      ]
    },
    {
      icon: Briefcase,
      title: "Career Development",
      description: "Preparing youth for tech careers through resume building, interview skills, and industry connections.",
      benefits: [
        "Resume and portfolio preparation",
        "Interview training",
        "Job placement support",
        "Internship opportunities"
      ]
    },
    {
      icon: MessageSquare,
      title: "Community Tech Hubs",
      description: "Physical spaces equipped with technology resources for community access and learning.",
      benefits: [
        "Free computer and internet access",
        "Study and workspace",
        "Regular workshops and events",
        "Tech support and guidance"
      ]
    },
    {
      icon: Calendar,
      title: "Tech Events & Hackathons",
      description: "Collaborative events that foster innovation, problem-solving, and community engagement.",
      benefits: [
        "Skill application in real-world contexts",
        "Team collaboration experience",
        "Networking opportunities",
        "Recognition and prizes for top projects"
      ]
    }
  ];

  // Programs with more details
  const programs = [
    {
      title: "CodeStart Bootcamp",
      category: "beginner",
      duration: "12 weeks",
      schedule: "Weekends, 9am-3pm",
      description: "An intensive program for beginners to learn the fundamentals of web development and create their first websites and applications.",
      curriculum: [
        "HTML & CSS Basics",
        "JavaScript Fundamentals",
        "Responsive Design",
        "Basic Backend Concepts",
        "Final Project Development"
      ]
    },
    {
      title: "Advanced Web Development",
      category: "advanced",
      duration: "16 weeks",
      schedule: "Tuesdays & Thursdays, 5pm-8pm",
      description: "Take your coding skills to the next level with advanced web development technologies and frameworks.",
      curriculum: [
        "Modern JavaScript Frameworks",
        "Database Design & Management",
        "API Development",
        "Authentication & Security",
        "Deployment & DevOps Basics"
      ]
    },
    {
      title: "Digital Skills Essentials",
      category: "beginner",
      duration: "8 weeks",
      schedule: "Mondays & Wednesdays, 10am-12pm",
      description: "A foundational course on essential digital skills for those with limited technology exposure.",
      curriculum: [
        "Computer Basics & Operating Systems",
        "Internet Navigation & Search Skills",
        "Email & Professional Communication",
        "Productivity Software (Word Processing, Spreadsheets)",
        "Online Safety & Digital Citizenship"
      ]
    },
    {
      title: "Mobile App Development",
      category: "intermediate",
      duration: "14 weeks",
      schedule: "Weekends, 10am-4pm",
      description: "Learn to create mobile applications for Android and iOS platforms using modern frameworks.",
      curriculum: [
        "Mobile Development Fundamentals",
        "UI/UX for Mobile Applications",
        "Cross-Platform Development",
        "App Testing & Debugging",
        "App Store Submission Process"
      ]
    },
    {
      title: "Tech Career Preparation",
      category: "career",
      duration: "6 weeks",
      schedule: "Fridays, 2pm-5pm",
      description: "A specialized program focusing on job readiness for tech industry positions.",
      curriculum: [
        "Tech Resume Building",
        "Portfolio Development",
        "Technical Interview Preparation",
        "Job Search Strategies",
        "Professional Networking"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-techace-blue to-techace-teal text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Services & Programs</h1>
            <p className="max-w-2xl mx-auto">
              We offer a range of technology education and resource programs designed to empower youth and communities.
            </p>
          </div>
        </section>
        
        {/* Core Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-techace-dark">Core Services</h2>
              <p className="text-techace-gray max-w-2xl mx-auto">
                Our comprehensive approach to technology education and access includes the following key services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <Card key={index} className="border-none shadow-lg h-full">
                  <div className="p-6">
                    <div className="bg-gradient-to-r from-techace-blue/20 to-techace-teal/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="text-techace-blue" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-techace-dark">{service.title}</h3>
                    <p className="text-techace-gray mb-4">{service.description}</p>
                    
                    <h4 className="font-medium text-sm mb-2 text-techace-blue">Key Benefits:</h4>
                    <ul className="list-disc list-inside text-techace-gray mb-6 space-y-1">
                      {service.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="w-full bg-white border border-techace-blue text-techace-blue hover:bg-techace-blue/10 transition-colors flex items-center justify-center gap-2"
                      variant="outline"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Programs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-techace-dark">Our Programs</h2>
              <p className="text-techace-gray max-w-2xl mx-auto">
                Explore our structured educational programs designed for different skill levels and learning goals.
              </p>
            </div>
            
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                <TabsList>
                  <TabsTrigger value="all">All Programs</TabsTrigger>
                  <TabsTrigger value="beginner">Beginner</TabsTrigger>
                  <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                  <TabsTrigger value="career">Career</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="space-y-6">
                {programs.map((program, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <div className="p-6">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-techace-dark">{program.title}</h3>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="bg-techace-blue/10 text-techace-blue text-xs font-medium px-3 py-1 rounded-full">
                              {program.category.charAt(0).toUpperCase() + program.category.slice(1)}
                            </span>
                            <span className="text-sm text-techace-gray">Duration: {program.duration}</span>
                          </div>
                        </div>
                        
                        <Button 
                          className="bg-gradient-to-r from-techace-blue to-techace-teal hover:opacity-90 transition-opacity"
                          size="sm"
                        >
                          Apply Now
                        </Button>
                      </div>
                      
                      <p className="text-techace-gray mb-4">{program.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2 text-techace-blue">Schedule:</h4>
                          <p className="text-techace-gray mb-4">{program.schedule}</p>
                          
                          <h4 className="font-medium text-sm mb-2 text-techace-blue">Curriculum Highlights:</h4>
                          <ul className="list-disc list-inside text-techace-gray space-y-1">
                            {program.curriculum.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <h4 className="font-medium text-sm mb-2 text-techace-blue">Program Details:</h4>
                          <ul className="text-techace-gray space-y-2">
                            <li><strong>Prerequisites:</strong> Varies by level</li>
                            <li><strong>Materials:</strong> All provided</li>
                            <li><strong>Location:</strong> Tech Ace Hub & Online</li>
                            <li><strong>Certificate:</strong> Yes, upon completion</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
              
              {/* Filtered tabs */}
              {["beginner", "intermediate", "advanced", "career"].map((category) => (
                <TabsContent key={category} value={category} className="space-y-6">
                  {programs
                    .filter(program => program.category === category)
                    .map((program, index) => (
                      <Card key={index} className="border-none shadow-md">
                        <div className="p-6">
                          <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-techace-dark">{program.title}</h3>
                              <div className="flex items-center gap-4 mt-2">
                                <span className="bg-techace-blue/10 text-techace-blue text-xs font-medium px-3 py-1 rounded-full">
                                  {program.category.charAt(0).toUpperCase() + program.category.slice(1)}
                                </span>
                                <span className="text-sm text-techace-gray">Duration: {program.duration}</span>
                              </div>
                            </div>
                            
                            <Button 
                              className="bg-gradient-to-r from-techace-blue to-techace-teal hover:opacity-90 transition-opacity"
                              size="sm"
                            >
                              Apply Now
                            </Button>
                          </div>
                          
                          <p className="text-techace-gray mb-4">{program.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium text-sm mb-2 text-techace-blue">Schedule:</h4>
                              <p className="text-techace-gray mb-4">{program.schedule}</p>
                              
                              <h4 className="font-medium text-sm mb-2 text-techace-blue">Curriculum Highlights:</h4>
                              <ul className="list-disc list-inside text-techace-gray space-y-1">
                                {program.curriculum.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="bg-gray-100 p-4 rounded-lg">
                              <h4 className="font-medium text-sm mb-2 text-techace-blue">Program Details:</h4>
                              <ul className="text-techace-gray space-y-2">
                                <li><strong>Prerequisites:</strong> Varies by level</li>
                                <li><strong>Materials:</strong> All provided</li>
                                <li><strong>Location:</strong> Tech Ace Hub & Online</li>
                                <li><strong>Certificate:</strong> Yes, upon completion</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Testimonial */}
        <section className="py-16 bg-techace-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <svg className="w-12 h-12 text-techace-blue/50 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-xl md:text-2xl italic mb-6">
                "Tech Ace Solutions has transformed our community. The skills our youth have gained have opened doors we never thought possible. The impact will be felt for generations."
              </p>
              <div>
                <p className="font-bold">Sarah Ochieng</p>
                <p className="text-gray-400">Community Leader, Kibera</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How to Join */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-techace-dark">How to Join Our Programs</h2>
              <p className="text-techace-gray max-w-2xl mx-auto">
                Follow these simple steps to enroll in any of our educational programs or initiatives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-gradient-to-r from-techace-blue/20 to-techace-teal/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-techace-blue">01</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-techace-dark">Browse Programs</h3>
                <p className="text-techace-gray">
                  Explore our available programs and select the one that matches your interests and skill level.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-techace-blue/20 to-techace-teal/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-techace-blue">02</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-techace-dark">Apply Online</h3>
                <p className="text-techace-gray">
                  Complete the application form for your chosen program with your personal details and background.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-techace-blue/20 to-techace-teal/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-techace-blue">03</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-techace-dark">Get Started</h3>
                <p className="text-techace-gray">
                  Once accepted, you'll receive all necessary information to begin your learning journey with us.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                className="bg-gradient-to-r from-techace-blue to-techace-teal hover:opacity-90 transition-opacity"
                asChild
                size="lg"
              >
                <Link to="/contact">Apply Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;

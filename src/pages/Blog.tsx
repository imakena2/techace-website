
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, Search, User } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Set page title
    document.title = "Blog | Tech Ace Solutions";
  }, []);

  // Blog posts data
  const allPosts = [
    {
      id: 1,
      title: "Digital Skills Gap in Marginalized Communities",
      excerpt: "Exploring the challenges and solutions to bridge the growing digital divide in underserved areas.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "James Mwangi",
      date: "June 15, 2023",
      readTime: "5 min read",
      category: "digital-literacy",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Success Story: From Tech Novice to Developer",
      excerpt: "How our coding boot camp transformed a student with no prior experience into a skilled developer.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Sarah Ochieng",
      date: "May 28, 2023",
      readTime: "8 min read",
      category: "success-stories",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Community Tech Hubs: Creating Access Points",
      excerpt: "Our approach to establishing technology centers in underserved neighborhoods.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "David Kamau",
      date: "April 10, 2023",
      readTime: "6 min read",
      category: "initiatives",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "The Impact of Early Tech Education",
      excerpt: "Research findings on how early exposure to technology shapes future career paths.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Mary Wambui",
      date: "March 22, 2023",
      readTime: "7 min read",
      category: "education",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Partnerships That Drive Change",
      excerpt: "How collaborations with businesses and NGOs amplify our community impact.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Paul Omondi",
      date: "February 18, 2023",
      readTime: "5 min read",
      category: "partnerships",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Tech Skills for the Future Workforce",
      excerpt: "Preparing youth for careers in emerging technology fields.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Lucy Njeri",
      date: "January 5, 2023",
      readTime: "9 min read",
      category: "career",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Categories
  const categories = [
    { id: "all", name: "All Categories" },
    { id: "digital-literacy", name: "Digital Literacy" },
    { id: "success-stories", name: "Success Stories" },
    { id: "initiatives", name: "Initiatives" },
    { id: "education", name: "Education" },
    { id: "partnerships", name: "Partnerships" },
    { id: "career", name: "Career" }
  ];

  // State for filtering
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter posts by category and search query
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-techace-blue to-techace-teal text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
            <p className="max-w-2xl mx-auto">
              Stories, insights, and updates from Tech Ace Solutions and our community.
            </p>
          </div>
        </section>
        
        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-3/4">
                {/* Search Bar */}
                <div className="mb-8 relative">
                  <Input
                    placeholder="Search articles..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-techace-gray" size={18} />
                </div>
                
                {/* Featured Post */}
                {filteredPosts.length > 0 && (
                  <Card className="border-none shadow-lg overflow-hidden mb-8">
                    <div className="md:flex">
                      <div className="md:w-1/2 h-64 md:h-auto">
                        <img 
                          src={filteredPosts[0].image} 
                          alt={filteredPosts[0].title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-6 md:p-8">
                        <div className="flex items-center gap-2 text-sm text-techace-gray mb-2">
                          <Calendar size={14} />
                          <span>{filteredPosts[0].date}</span>
                          <span className="mx-2">•</span>
                          <Clock size={14} />
                          <span>{filteredPosts[0].readTime}</span>
                        </div>
                        
                        <h2 className="text-2xl font-bold mb-3 text-techace-dark">{filteredPosts[0].title}</h2>
                        <p className="text-techace-gray mb-4">{filteredPosts[0].excerpt}</p>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <User size={14} className="text-techace-gray" />
                          <span className="text-sm text-techace-gray">By {filteredPosts[0].author}</span>
                        </div>
                        
                        <Button 
                          className="bg-gradient-to-r from-techace-blue to-techace-teal hover:opacity-90 transition-opacity"
                        >
                          Read Article
                        </Button>
                      </div>
                    </div>
                  </Card>
                )}
                
                {/* More Posts */}
                {filteredPosts.length > 1 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPosts.slice(1).map(post => (
                      <Card key={post.id} className="border-none shadow-lg overflow-hidden">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-sm text-techace-gray mb-2">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <Clock size={14} />
                            <span>{post.readTime}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-3 text-techace-dark">{post.title}</h3>
                          <p className="text-techace-gray mb-4">{post.excerpt}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <User size={14} className="text-techace-gray" />
                              <span className="text-sm text-techace-gray">By {post.author}</span>
                            </div>
                            
                            <Button variant="link" className="text-techace-blue p-0">
                              Read More
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-xl text-techace-gray">No articles found matching your criteria.</p>
                      <Button 
                        variant="outline" 
                        className="mt-4 border-techace-blue text-techace-blue"
                        onClick={() => {
                          setSearchQuery('');
                          setActiveCategory('all');
                        }}
                      >
                        Reset Filters
                      </Button>
                    </div>
                  )
                )}
                
                {/* Pagination - static for demo */}
                {filteredPosts.length > 1 && (
                  <div className="flex justify-center mt-12">
                    <nav className="inline-flex">
                      <Button variant="outline" size="sm" className="rounded-l-md border-techace-gray/30 text-techace-gray">
                        Previous
                      </Button>
                      <Button variant="outline" size="sm" className="border-l-0 border-techace-blue bg-techace-blue/10 text-techace-blue">
                        1
                      </Button>
                      <Button variant="outline" size="sm" className="border-l-0 border-techace-gray/30 text-techace-gray">
                        2
                      </Button>
                      <Button variant="outline" size="sm" className="border-l-0 border-techace-gray/30 text-techace-gray">
                        3
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-r-md border-l-0 border-techace-gray/30 text-techace-gray">
                        Next
                      </Button>
                    </nav>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/4">
                {/* Categories */}
                <Card className="border-none shadow-lg p-6 mb-8">
                  <h3 className="font-bold text-lg mb-4 text-techace-dark">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                          activeCategory === category.id
                            ? 'bg-techace-blue/10 text-techace-blue'
                            : 'text-techace-gray hover:bg-gray-100'
                        }`}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </Card>
                
                {/* Recent Posts */}
                <Card className="border-none shadow-lg p-6 mb-8">
                  <h3 className="font-bold text-lg mb-4 text-techace-dark">Recent Posts</h3>
                  <div className="space-y-4">
                    {allPosts.slice(0, 3).map(post => (
                      <div key={post.id} className="flex gap-3">
                        <div className="w-16 h-16 flex-shrink-0">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-techace-dark">{post.title}</h4>
                          <p className="text-xs text-techace-gray mt-1">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
                
                {/* Subscribe */}
                <Card className="border-none shadow-lg p-6 bg-gradient-to-r from-techace-blue/10 to-techace-teal/10">
                  <h3 className="font-bold text-lg mb-2 text-techace-dark">Subscribe to Our Newsletter</h3>
                  <p className="text-sm text-techace-gray mb-4">Stay updated with our latest news and events.</p>
                  <div className="space-y-3">
                    <Input placeholder="Your Email" />
                    <Button className="w-full bg-gradient-to-r from-techace-blue to-techace-teal hover:opacity-90 transition-opacity">
                      Subscribe
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;

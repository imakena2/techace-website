
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import FaqSection from '@/components/FaqSection';

const Contact = () => {
  useEffect(() => {
    // Set page title
    document.title = "Contact Us | Tech Ace Solutions";
  }, []);

  return (
    <div className="min-h-screen d-flex flex-column">
      <Navbar />
      
      <main className="flex-grow-1">
        {/* Bootstrap Contact Page */}
        <div className="container-fluid bg-primary py-5 text-center text-white">
          <div className="container">
            <h1 className="display-4 fw-bold">Contact Us</h1>
            <p className="lead">Have questions or want to get involved? We'd love to hear from you.</p>
          </div>
        </div>
        
        <div className="container py-5">
          <div className="row g-4">
            {/* Contact Information */}
            <div className="col-lg-6">
              <ContactInfo />
            </div>
            
            {/* Contact Form */}
            <div className="col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <FaqSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;

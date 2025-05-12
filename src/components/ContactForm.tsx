
import React, { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Form validation script
    const validateForm = () => {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation');
      
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach((form) => {
        form.addEventListener('submit', (event: Event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            event.preventDefault();
            
            // Show success toast
            toast({
              title: "Message Sent!",
              description: "Thank you for contacting us. We'll get back to you soon.",
            });
            
            // Reset form
            form.reset();
          }
          
          form.classList.add('was-validated');
        }, false);
      });
    };
    
    validateForm();
  }, [toast]);

  return (
    <div className="card shadow-lg border-0">
      <div className="card-body p-4">
        <h3 className="fw-bold mb-4">Send Us a Message</h3>
        
        <form id="contactForm" className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="John Doe" required />
            <div className="invalid-feedback">Please provide your name.</div>
          </div>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="john@example.com" required />
            <div className="invalid-feedback">Please provide a valid email.</div>
          </div>
          
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="How can we help you?" required />
            <div className="invalid-feedback">Please provide a subject.</div>
          </div>
          
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows={5} placeholder="Your message here..." required></textarea>
            <div className="invalid-feedback">Please provide a message.</div>
          </div>
          
          <button type="submit" className="btn btn-primary w-100 py-2">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

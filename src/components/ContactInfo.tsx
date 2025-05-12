
import React from 'react';

const ContactInfo = () => {
  return (
    <>
      <h2 className="fw-bold mb-4">Get In Touch</h2>
      <p className="text-muted mb-4">
        Whether you're interested in our programs, want to volunteer, or explore partnership opportunities, our team is ready to assist you.
      </p>
      
      <div className="mb-4">
        <div className="card shadow-sm border-0 mb-3">
          <div className="card-body">
            <div className="d-flex">
              <div className="bg-light rounded-circle p-3 me-3">
                <i className="bi bi-geo-alt text-primary"></i>
              </div>
              <div>
                <h5 className="fw-bold">Address</h5>
                <p className="text-muted mb-0">123 Tech Avenue, Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card shadow-sm border-0 mb-3">
          <div className="card-body">
            <div className="d-flex">
              <div className="bg-light rounded-circle p-3 me-3">
                <i className="bi bi-envelope text-primary"></i>
              </div>
              <div>
                <h5 className="fw-bold">Email</h5>
                <p className="text-muted mb-0">info@techacesolutions.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <div className="d-flex">
              <div className="bg-light rounded-circle p-3 me-3">
                <i className="bi bi-telephone text-primary"></i>
              </div>
              <div>
                <h5 className="fw-bold">Phone</h5>
                <p className="text-muted mb-0">+254 700 000000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 rounded overflow-hidden">
        <div className="bg-light text-center p-5">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127642.48810143651!2d36.82189870112754!3d-1.2524962774411216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1620305063855!5m2!1sen!2sus" 
            width="100%" 
            height="300" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            title="Tech Ace Solutions Location"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;

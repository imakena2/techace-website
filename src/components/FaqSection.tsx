
import React, { useEffect } from 'react';

const FaqSection = () => {
  useEffect(() => {
    // Initialize Bootstrap collapse functionality if needed
    // This is handled automatically by Bootstrap's JavaScript
  }, []);

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Find answers to common questions about our programs and initiatives.
          </p>
        </div>
        
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="col">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">How can I join your programs?</h5>
                <p className="text-muted mb-0">
                  Our programs have different application processes. Visit our Services page for specific program details and application instructions, or contact us directly.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">Do I need prior tech experience?</h5>
                <p className="text-muted mb-0">
                  No prior experience is required for most of our programs. We offer courses for all skill levels, from complete beginners to advanced learners.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">How can I volunteer or mentor?</h5>
                <p className="text-muted mb-0">
                  We welcome volunteers and mentors! Please contact us with your skills and availability, and we'll connect you with appropriate opportunities.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">Are your programs free?</h5>
                <p className="text-muted mb-0">
                  Many of our basic programs are free for participants from marginalized communities. Some specialized courses have nominal fees, with scholarships available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;

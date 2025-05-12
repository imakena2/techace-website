
import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  avatar?: string;
}

const TestimonialCard = ({ name, role, testimonial, avatar }: TestimonialCardProps) => {
  return (
    <div className="card h-100 shadow-lg border-0">
      <div className="card-body p-4">
        <div className="d-flex align-items-center mb-3">
          <div className="rounded-circle overflow-hidden me-3" style={{ width: "48px", height: "48px" }}>
            {avatar ? (
              <img src={avatar} alt={name} className="img-fluid" />
            ) : (
              <div className="bg-primary text-white d-flex align-items-center justify-content-center h-100">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h5 className="fw-bold mb-0">{name}</h5>
            <p className="text-muted small mb-0">{role}</p>
          </div>
        </div>
        <p className="card-text text-muted fst-italic">{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

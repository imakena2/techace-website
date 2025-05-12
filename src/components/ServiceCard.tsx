
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="card h-100 shadow-lg border-0 transition-shadow">
      <div className="card-body p-4">
        <div className="bg-light rounded-3 d-inline-flex p-3 mb-3">
          <Icon className="text-primary" />
        </div>
        <h5 className="card-title fw-bold mb-3">{title}</h5>
        <p className="card-text text-muted">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

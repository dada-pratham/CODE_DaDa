import React from 'react';
import { FaUserTie, FaRoad, FaHandsHelping, FaBriefcase } from 'react-icons/fa';

const whyChooseUsData = {
  title: "Why Choose Our Program",
  subtitle: "Experience the difference with our comprehensive learning approach",
  features: [
    {
      icon: <FaUserTie className="feature-icon" />,
      title: "Industry Experts",
      description: "Learn directly from senior engineers with 5+ years of real-world experience at top tech companies"
    },
    {
      icon: <FaRoad className="feature-icon" />,
      title: "Proven Roadmaps",
      description: "Structured learning paths that have helped 1000+ students land tech jobs"
    },
    {
      icon: <FaHandsHelping className="feature-icon" />,
      title: "1:1 Mentorship",
      description: "Personalized guidance tailored to your specific goals and learning pace"
    },
    {
      icon: <FaBriefcase className="feature-icon" />,
      title: "Career Focused",
      description: "Resume reviews, mock interviews, and portfolio building included"
    }
  ],
};

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-choose-us-section">
      <div className="why-choose-us-container">
        <div className="section-header">
          <h2 className="section-title">{whyChooseUsData.title}</h2>
          <p className="section-subtitle">{whyChooseUsData.subtitle}</p>
          <div className="divider"></div>
        </div>
        
        <div className="features-grid">
          {whyChooseUsData.features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Data Object
const aboutData = {
 
    image: '/AboutUs.png', // Replace with your actual image path
    description1:
      "We are a team of experienced software engineers with a deep passion for helping students navigate their tech careers confidently and successfully.",
    description2:
      "Our mission is to simplify the learning process by providing real-world roadmaps, hands-on guidance, and motivation. We’re not just instructors — we’re your support system on this journey.",
    description3:
      "Whether you're exploring programming for the first time or switching into the tech field, our structured approach and live sessions are here to accelerate your growth.",
    highlight: '🎉 Your first session is 100% FREE — no risk, just learning!',
    ctaText: 'Join the First Free Session',
    ctaLink: '#courses',
};

const AboutUs = () => {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: '#0000' }}>
      <div className="container text-light">
      <h2 className="text-center section-title mb-4">About Us</h2>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img
              src={aboutData.image}
              alt="Learn Coding Online"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '320px', objectFit: 'cover', width: '100%' }}
            />
          </div>
          <div className="col-md-6">
            
            <p className="lead">{aboutData.description1}</p>
            <p>{aboutData.description2}</p>
            <div className="alert alert-success mt-4" role="alert">
              <strong>{aboutData.highlight}</strong>
            </div>
            <a href={aboutData.ctaLink} className="btn btn-outline-light mt-3">
              {aboutData.ctaText}
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AboutUs;

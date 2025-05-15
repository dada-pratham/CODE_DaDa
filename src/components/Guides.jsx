import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import guidedata from '../assets/Guides.jpg';

// General guide section data
const guideData = {
  image: guidedata,
  description1: (
    <>
      Our <span className="highlight-primary">guides</span> are <strong className="highlight-success">seasoned software professionals</strong> who bring years of <strong>industry experience</strong> and a passion for <strong>teaching</strong>.
    </>
  ),
  description2: (
    <>
      They specialize in delivering <span className="highlight-keyword">practical</span>, <strong>real-world knowledge</strong> to help you build a strong foundation in <strong>programming</strong> and <strong>software development</strong>.
    </>
  ),
  description3: (
    <>
      With <strong className="highlight-keyword">live sessions</strong>, <span className="highlight-success">personalized attention</span>, and <strong>proven roadmaps</strong>, our guides ensure you stay <strong className="highlight-primary">on track</strong> and <span className="highlight-success">confident</span> throughout your learning journey.
    </>
  ),
};

const Guides = () => {
  return (
    <section id="guides" className="py-5" style={{ backgroundColor: '#111' }}>
      <div className="container text-light">
        <h2 className="text-center guides-section-title mb-4">Our Guides</h2>
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2 mb-4">
            <img
              src={guideData.image}
              alt="Our Guides"
              className="img-fluid guide-image"
            />
          </div>
          <div className="col-md-6 order-md-1">
            <p className="guides-text">{guideData.description1}</p>
            <p className="guides-text">{guideData.description2}</p>
            <p className="guides-text">{guideData.description3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guides;

import React from 'react';

const Supporter = () => {
  return (
    <div className="support-section-dark container">
      <div className="support-content-dark">
        <div className="header-with-logo">
          <div className="header-text-dark">
            <h4 className="section-subtitle-dark">Knowledge Partner</h4>
            <h2 className="section-title-dark">Our Supporter</h2>
            <div className="divider-dark"></div>
          </div>
          <div className="small-logo-container">
            <img
              src="/Supporter logo.png"
              alt="AGE OF ROBOTICS Logo"
              className="small-logo-dark"
            />
          </div>
        </div>

        <div className="content-wrapper-dark">
          <div className="text-content-dark">
            <p className="support-description-dark">
              We're proudly supported by <strong className="channel-name-dark">AGE OF ROBOTICS</strong>, 
              who shares in-depth knowledge on Robotics, Embedded Systems, CAD Modelling, 
              PCB Designing, Robot Operating Systems, Programming, and much more. 
              This content helps you to build high-quality components. On this channel, 
              you'll find valuable resources to enhance your skills.
            </p>
            <div className="cta-container-dark">
              <a
                href="http://www.youtube.com/@Age.of.Robotics"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-dark"
              >
                <i className="fab fa-youtube"></i> Visit YouTube Channel
              </a>
              <span className="stats-dark">
                <i className="fas fa-users"></i> 1.7K+ Subscribers
              </span>
            </div>
          </div>
          
          <div className="large-image-container-dark">
            <img
              src="/work-team-digital-art.png"
              alt="AGE OF ROBOTICS Channel Preview"
              className="large-image-dark"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supporter;
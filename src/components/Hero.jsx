import React from 'react';
import hero from '../assets/Hero.jpg';

function Hero() {
  const phone = '918698001230';
  const text = `Hi, I want to book a learning session.\nName:\nCourse Code:\nInterested Field/Domain:`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  return (
    <>
      <section id="hero">
        <div className="container hero-container">
          <div className="hero-text">
            <h1>
              Unlock Your <span>Potential</span>
            </h1>
            <p>
              Interactive learning, expert mentors, and real-world projects to level up your skills.
            </p>
            <a href="#about" className="btn">
              About Us
            </a>
          </div>

          <div className="hero-img-wrapper" data-aos="fade-left">
            <img src={hero} alt="Learning Illustration" />
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href={url}
        className="contact_icon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}

export default Hero;

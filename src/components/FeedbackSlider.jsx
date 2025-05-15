import React, { useState, useEffect } from "react";


const FeedbackSlider = () => {
  const feedbacks = [
    {
      id: 1,
      text: "The C# course transformed me from complete beginner to job-ready developer in just 3 months. The projects were exactly what employers look for!",
      author: "Rahul Sharma",
      position: "Junior Developer at TechSolutions",
      rating: 5,
      course: "Software Development (C#)"
    },
    {
      id: 2,
      text: "Never thought I could learn Japanese, but the structured lessons and cultural insights made it so engaging. Can now hold basic conversations confidently!",
      author: "Priya Patel",
      position: "Japan Exchange Student",
      rating: 4,
      course: "Japanese Language & Culture"
    },
    {
      id: 3,
      text: "The electronics course gave me hands-on skills I use daily in my engineering job. The PCB design module was particularly valuable.",
      author: "Amit Singh",
      position: "Electronics Engineer",
      rating: 5,
      course: "Basic Electronics & PCB Design"
    },
    {
      id: 4,
      text: "Power BI training helped me automate reports that used to take days. My manager was so impressed I got promoted within 6 months!",
      author: "Neha Gupta",
      position: "Data Analyst at FinCorp",
      rating: 5,
      course: "Data Analysis (Power BI, SQL, Excel)"
    },
    {
      id: 5,
      text: "The React course had the most up-to-date content I've found. Built my portfolio site during the course and got multiple job offers!",
      author: "Vikram Joshi",
      position: "Frontend Developer",
      rating: 4,
      course: "Web Development (React JS)"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
      }
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [isPaused, feedbacks.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  const currentFeedback = feedbacks[currentIndex];

  return (
    <section 
      className="feedback-slider-container container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
    <h2 className="section-title">Student Success Stories</h2>
    <p className="section-subtitle">Hear from our learners</p>

      <div className="feedback-slider">
        <button className="nav-button prev" onClick={goToPrev} aria-label="Previous feedback">
          &lt;
        </button>

        <div className="feedback-card">
          <div className="course-badge">{currentFeedback.course}</div>
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`star ${i < currentFeedback.rating ? 'filled' : ''}`}>
                ★
              </span>
            ))}
          </div>
          <blockquote className="feedback-text">"{currentFeedback.text}"</blockquote>
          <div className="author-info">
            <div className="author-details">
              <p className="author-name">{currentFeedback.author}</p>
              <p className="author-position">{currentFeedback.position}</p>
            </div>
          </div>
        </div>

        <button className="nav-button next" onClick={goToNext} aria-label="Next feedback">
          &gt;
        </button>
      </div>

      <div className="slider-dots">
        {feedbacks.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to feedback ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeedbackSlider;
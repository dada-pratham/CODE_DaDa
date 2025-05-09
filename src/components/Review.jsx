import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Review() {
  const [totalStudents, setTotalStudents] = useState(0);
  const targetStudents = 350;
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const increment = targetStudents / (duration / 16);
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetStudents) {
        current = targetStudents;
        clearInterval(timer);
      }
      setTotalStudents(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [targetStudents]);

  return (
    <section id="student-count" className="student-count-section">
      <div className="container">
        <motion.div 
          className="content-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-container">
            <motion.img
              src="/Review.png"
              alt="Community Illustration"
              className="student-count-image"
              animate={isHovered ? { scale: 1.03 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
          
          <div className="text-content">
            <h2 className="student-count-title">
              Join Our <span className="highlight">Growing</span> Community
            </h2>
            
            <motion.p 
              className="student-count-number"
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            >
              {totalStudents.toLocaleString()}
            </motion.p>
            
            <p className="student-count-subtext">
              Happy Students and Professionals Already Learning With Us
            </p>
            
            <div className="stars">
  {[...Array(5)].map((_, i) => {
    const isWholeStar = i < 4; // First 4 stars are full
    const isHalfStar = i === 4; // Last star is half

    return (
      <motion.span 
        key={i}
        className="star-wrapper"
        initial={{ opacity: 0.7 }}
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 1 : 0.9
        }}
        transition={{ 
          delay: isHovered ? i * 0.1 : 0,
          type: 'spring',
          stiffness: 300
        }}
      >
        <span className="star-container">
          {/* Empty star background */}
          <span className="star-empty">☆</span>
          {/* Filled portion */}
          {isHalfStar ? (
            <span 
              className="star-filled" 
              style={{ width: '50%' }} // 50% for 4.5 rating
            >
              ★
            </span>
          ) : isWholeStar ? (
            <span className="star-filled">★</span>
          ) : null}
        </span>
      </motion.span>
    );
  })}
</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Review;
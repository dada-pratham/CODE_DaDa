import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Brand from '../assets/Brand.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'courses', 'guides', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    // Set initial active section based on hash
    if (window.location.hash) {
      setActiveSection(window.location.hash);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', () => {
      setActiveSection(window.location.hash);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', () => {
        setActiveSection(window.location.hash);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Guides", href: "#guides" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#hero">
          <img src={Brand} alt="CODE_DaDa" className="navbar-logo" />
        </a>

        <motion.button 
          className="navbar-toggler custom-toggler" 
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          whileTap={{ scale: 0.9 }}
        >
          <motion.span 
            className="toggler-bar"
            animate={isOpen ? 
              { rotate: 45, y: 7, backgroundColor: "#20bd5f" } : 
              { rotate: 0, y: 0, backgroundColor: "#fff" }
            }
          />
          <motion.span 
            className="toggler-bar"
            animate={isOpen ? 
              { opacity: 0 } : 
              { opacity: 1 }
            }
          />
          <motion.span 
            className="toggler-bar"
            animate={isOpen ? 
              { rotate: -45, y: -7, backgroundColor: "#20bd5f" } : 
              { rotate: 0, y: 0, backgroundColor: "#fff" }
            }
          />
        </motion.button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                className="nav-item"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  className={`nav-link nav-link-custom ${activeSection === link.href ? 'active' : ''}`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.span 
                      className="active-indicator"
                      layoutId="activeIndicator"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
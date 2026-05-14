import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import RotationButton from './RotationButton';
import harishProfile from '../assets/harish-hero.png';



const HeroSection: React.FC = () => {
  return (
    <section className="hero-container" id="home">
      {/* Yellow Circle — positioned absolutely on the viewport */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 2.4 }}
        className="hero-circle"
      ></motion.div>

      {/* Header Area */}
      <header className="hero-header">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="hero-logo"
        >
          HN.
        </motion.div>
        {/* 
                  The center navigation is removed here to rely on the global App <Header />.
                  This ensures no duplication while keeping the layout minimalist.
                */}
      </header>

      {/* Main Content Area */}
      <div className="hero-grid">

        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.2 }}
          className="hero-left"
        >
          <p>
            AI/ML Student <br />
            Building the future of the web with intelligent, data-driven applications.
          </p>
          <div className="mt-8">
            <RotationButton
              text="Download Resume"
              href="https://drive.google.com/uc?export=download&id=1qxqE8DW9ClzGVRWhH1DbfFwM6UKIRTcA"
            />
          </div>
        </motion.div>

        {/* Center: Image only */}
        <div className="hero-center">
          <motion.img
            src={harishProfile}
            alt="Harish Narayan"
            className="hero-image"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 2.6 }}
          />
        </div>

        {/* Right Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.4 }}
          className="hero-right"
        >
          <h1>
            Harish<br />Narayan.
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';
import harishAbout from '../assets/harish-about.png';
const AboutSection: React.FC = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me.</h2>
                </motion.div>

                <div className="about-content">
                    <div className="about-left">
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p>
                                Hello! I'm Harish Narayan, a passionate student with a strong interest in the intersection of Artificial Intelligence and Web Development. My journey in tech started with a fascination for how things work, which led me to explore everything from building dynamic websites to training machine learning models.
                            </p>
                            <p>
                                I thrive on challenges and am constantly learning new technologies. My goal is to leverage my skills in both frontend and backend development, along with my growing expertise in AI/ML, to create impactful and intelligent applications.
                            </p>
                            <p>
                                Currently pursuing my B.Tech in AIML at Kalasalingam University and actively involved in various tech communities.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        className="about-right"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="circular-image">
                            <img src={harishAbout} alt="Harish Narayan Profile" style={{ objectFit: 'cover' }} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

import React from 'react';
import { motion } from 'framer-motion';
import './ProjectsSection.css';

const projects = [
    {
        id: 5,
        title: 'SafeHire AI - Job Fraud Detection Platform',
        category: 'React.js, Gemini AI, OCR, Node.js',
        description: [],
        link: 'https://github.com/harishnarayan-coder/SafeHire-AI'
    },
    {
        id: 1,
        title: 'PingIt - Student Complaint & Facility Ticketing System',
        category: 'Web Development, Supabase',
        description: [],
        link: 'https://github.com/harishnarayan-coder/Campus---Problem-Solver-PingIt-'
    },
    {
        id: 2,
        title: 'Pizza Ordering Web Application',
        category: 'React.js, Node.js, Express.js, MongoDB',
        description: [],
        link: 'https://github.com/harishnarayan-coder/OIBSIP'
    },
    {
        id: 3,
        title: 'Signature Verification System',
        category: 'Machine Learning, Web Development, Firebase',
        description: [],
        link: 'https://github.com/harishnarayan-coder'
    },
    {
        id: 4,
        title: 'Fitness Tracking Mobile Application',
        category: 'Mobile App Development, GPS Tracking, Data Analytics',
        description: [],
        link: 'https://github.com/harishnarayan-coder/fitness-helper--StrideX'
    }
];

const ProjectsSection: React.FC = () => {
    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Selected Work.</h2>
                    <p className="section-subtitle">A collection of projects showcasing my expertise in Full-Stack Development, Mobile Apps, and AI/ML integrations.</p>
                </motion.div>

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-item"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <span className="project-category">{project.category}</span>
                                <ul className="project-descriptions">
                                    {project.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="project-meta">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-arrow" aria-label={`View ${project.title} on GitHub`}>↗</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;

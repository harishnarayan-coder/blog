import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './GlowCard';
import './ExperienceSection.css';

const experiences = [
    {
        id: 1,
        date: 'Present',
        title: 'Web Development and Designing Intern',
        subtitle: 'Oasis Infobyte (Remote)',
        description: [],
        icon: '💻'
    },
    {
        id: 2,
        date: 'Sept 2023 - May 2027',
        title: 'B.Tech Computer Science And Engineering',
        subtitle: 'Kalasalingam Academy of Research and Education',
        description: [
            'Specialization: AIML',
            'CGPA: 9.02'
        ],
        icon: '🎓'
    },
    {
        id: 3,
        date: 'June 2021 - June 2023',
        title: 'Higher Secondary School',
        subtitle: 'Narayana Junior College',
        description: [
            'Percentage: 97.2%'
        ],
        icon: '🎓'
    },
    {
        id: 4,
        date: 'June 2020 - June 2021',
        title: 'Secondary School Education',
        subtitle: 'Sri Chaitanya Techno School',
        description: [
            'CGPA: 9.96'
        ],
        icon: '🎓'
    }
];

const ExperienceSection: React.FC = () => {
    return (
        <section className="experience-section" id="experience">
            <div className="container" style={{ maxWidth: '1000px' }}>
                <motion.div
                    className="experience-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">My Experience & Education</h2>
                </motion.div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <GlowCard className="timeline-content" glowColor="blue">
                                <span className="timeline-date">{exp.date}</span>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <h4 className="timeline-subtitle">{exp.subtitle}</h4>
                                <ul className="timeline-details">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </GlowCard>
                            <div className="timeline-icon">
                                {exp.icon}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;

import React from 'react';
import { motion } from 'framer-motion';
import { TiltCard } from './TiltCard';
import './CertificationsSection.css';

const certifications = [
    {
        id: 1,
        title: 'Google AI Essentials Specialization',
        issuer: 'Google via Coursera',
        date: 'Mar 2026'
    },
    {
        id: 2,
        title: 'Developing Front-End Apps with React',
        issuer: 'IBM via Coursera',
        date: 'Mar 2026'
    },
    {
        id: 3,
        title: 'Node.js & MongoDB: Developing Back-end Database Applications',
        issuer: 'IBM via Coursera',
        date: 'Mar 2026'
    },
    {
        id: 4,
        title: 'UX Design Introduction Job Simulation',
        issuer: 'Forage (Lloyds Banking Group)',
        date: 'Mar 2026'
    },
    {
        id: 7,
        title: 'Campus Ambassador Certificate',
        issuer: 'SmartED',
        date: 'Jan 2026'
    }
];

const CertificationsSection: React.FC = () => {
    return (
        <section className="certifications-section" id="certifications">
            <div className="container">
                <motion.div
                    className="cert-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">Certifications</h2>
                </motion.div>

                <div className="cert-grid">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            className="cert-card-wrapper"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <TiltCard className="cert-card" effect="gravitate" scale={1.02} tiltLimit={8}>
                                <div className="cert-icon">📜</div>
                                <div className="cert-content">
                                    <h3>{cert.title}</h3>
                                    <p className="cert-issuer">{cert.issuer}</p>
                                    <div className="cert-footer">
                                        <span className="cert-date">{cert.date}</span>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;

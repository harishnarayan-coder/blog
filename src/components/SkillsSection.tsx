import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './SkillsSection.css';
import ElectricBorder from './ElectricBorder';

const skillCategories = [
    {
        title: 'Programming Languages',
        icon: '◆',
        items: [
            { name: 'Java', icon: '</>' },
            { name: 'Python', icon: '</>' },
            { name: 'JavaScript', icon: '</>' },
            { name: 'SQL', icon: '🗃️' },
            { name: 'HTML', icon: '</>' },
            { name: 'CSS', icon: '</>' }
        ]
    },
    {
        title: 'Frameworks & Libraries',
        icon: '◆',
        items: [
            { name: 'Node.js', icon: '🗄️' },
            { name: 'Express.js', icon: '🗄️' },
            { name: 'React.js', icon: '💻' }
        ]
    },
    {
        title: 'Databases',
        icon: '◆',
        items: [
            { name: 'MongoDB', icon: '🗃️' },
            { name: 'Firebase', icon: '☁️' },
            { name: 'Supabase (PostgreSQL)', icon: '🐘' }
        ]
    },
    {
        title: 'Tools & Platforms',
        icon: '◆',
        items: [
            { name: 'GitHub', icon: '🔗' },
            { name: 'VS Code', icon: '⌨️' },
            { name: 'Android Studio', icon: '📱' }
        ]
    },
    {
        title: 'Core Concepts',
        icon: '◆',
        items: [
            { name: 'Full-Stack Web Dev', icon: '🛠️' },
            { name: 'Machine Learning', icon: '🧠' },
            { name: 'Artificial Intelligence', icon: '🧠' },
            { name: 'Authentication', icon: '🔑' },
            { name: 'REST APIs', icon: '🌐' },
            { name: 'GPS Tracking', icon: '📍' }
        ]
    }
];

type SkillCategory = {
    title: string;
    icon: string;
    items: { name: string; icon: string }[];
};

const SkillCard: React.FC<{ category: SkillCategory; index: number }> = ({ category, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            className={`skill-category-card ${isFlipped ? 'flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={!isFlipped ? { scale: 1.05 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <ElectricBorder borderRadius={12} borderColor="#9b72ff" showGlow={true} glowIntensity={0.5} borderThickness={2}>
                <div className="flip-card-inner">
                    {/* Front Side */}
                    <div className="flip-card-front">
                        <div className="skill-category-header">
                            <span className="category-icon">{category.icon}</span>
                            <h3>{category.title}</h3>
                        </div>
                        <p className="flip-prompt">Tap to reveal</p>
                    </div>

                    {/* Back Side */}
                    <div className="flip-card-back">
                        <ul className="skill-list">
                            {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    <span className="item-icon">{item.icon}</span>
                                    <span className="item-name">{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </ElectricBorder>
        </motion.div>
    );
};

const SkillsSection: React.FC = () => {
    return (
        <section className="skills-section" id="skills">
            <div className="container">
                <motion.div
                    className="skills-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">My Skills</h2>
                    <div className="header-underline"></div>
                </motion.div>

                <div className="skills-grid-container">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;

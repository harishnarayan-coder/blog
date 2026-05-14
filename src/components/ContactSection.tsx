import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';

const ContactSection: React.FC = () => {
    const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('SUBMITTING');

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mreryvzq', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('SUCCESS');
                form.reset();
            } else {
                setStatus('ERROR');
            }
        } catch {
            setStatus('ERROR');
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">Contact Me</h2>
                </motion.div>

                <div className="contact-layout">
                    {/* Left Column: Info Card */}
                    <div className="left-card">
                        <div className="info-block">
                            <div className="info-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div className="info-label">LOCATION:</div>
                            <div className="info-value">Vijayawada, Andhra Pradesh</div>
                        </div>

                        <div className="info-block">
                            <div className="info-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                            </div>
                            <div className="info-label">PHONE NO:</div>
                            <div className="info-value">8885419276</div>
                        </div>

                        <div className="info-block">
                            <div className="info-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div className="info-label">EMAIL ME:</div>
                            <div className="info-value email-value">harishtigala198@gmail.com</div>
                        </div>

                        <div className="socials-block">
                            <div className="socials-label">SOCIALS</div>
                            <div className="socials-icons">
                                <a href="https://www.linkedin.com/in/harish-narayan-tigala-7223b8315" target="_blank" rel="noopener noreferrer" className="social-square">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                                <a href="https://github.com/harishnarayan-coder" target="_blank" rel="noopener noreferrer" className="social-square">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </a>
                                <a href="https://www.instagram.com/hariishhh____?igsh=MTMyZXhvZDE0bDV2MA%3D%3D" target="_blank" rel="noopener noreferrer" className="social-square">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="right-card">
                        {status === 'SUCCESS' ? (
                            <div className="success-message">
                                <span className="success-icon">🎉</span>
                                <h3>Thanks for the message!</h3>
                                <p>I'll get back to you as soon as possible.</p>
                                <button onClick={() => setStatus('IDLE')} className="submit-form-btn">Send another</button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="input-group">
                                        <label htmlFor="name">FULL NAME</label>
                                        <div className="input-with-icon">
                                            <input type="text" id="name" name="name" placeholder="Harish" required />
                                            <div className="icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="email">EMAIL ADDRESS</label>
                                        <div className="input-with-icon">
                                            <input type="email" id="email" name="email" placeholder="harishtigala198@gmail.com" required />
                                            <div className="icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="subject">SUBJECT</label>
                                    <div className="input-with-icon">
                                        <input type="text" id="subject" name="subject" placeholder="Your Subject" required />
                                        <div className="icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="message">YOUR MESSAGE</label>
                                    <textarea id="message" name="message" placeholder="Write Your message" rows={5} required></textarea>
                                </div>
                                
                                {status === 'ERROR' && <p className="error-text">Something went wrong. Please try again.</p>}
                                
                                <button type="submit" className="submit-form-btn" disabled={status === 'SUBMITTING'}>
                                    {status === 'SUBMITTING' ? 'Sending...' : 'Send Me Message'}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" className="btn-icon">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Hire Me Block */}
                <motion.div 
                    className="hire-me-block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="hire-subtitle">Wanna work together?</p>
                    <h2 className="hire-title">HIRE ME!</h2>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;

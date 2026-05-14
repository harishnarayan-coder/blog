import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-info">
                    <p>&copy; {new Date().getFullYear()} Harish Narayan.</p>
                    <p>Designed & Built in India.</p>
                </div>
                
                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/harish-narayan-tigala-7223b8315" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/harishnarayan-coder" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.instagram.com/hariishhh____?igsh=MTMyZXhvZDE0bDV2MA%3D%3D" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>

                <div className="footer-back-top">
                    <button onClick={scrollToTop} className="back-top-btn">
                        Back to top
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                    </button>
                </div>
            </div>

            <div className="footer-bottom-huge">
                <h1 className="huge-text">HARISH</h1>
            </div>
        </footer>
    );
};

export default Footer;

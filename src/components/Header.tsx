import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Always show at the top
        if (currentScrollY <= 50) {
            setIsVisible(true);
            setIsAtTop(true);
        } else {
            setIsAtTop(false);
            if (currentScrollY > lastScrollY && !isMobileMenuOpen) {
                setIsVisible(false); // scrolling down
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);  // scrolling up
            }
        }
        setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY, isMobileMenuOpen]);

const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
};

const closeMenu = () => {
    setIsMobileMenuOpen(false);
};

return (
    <header className={`smart-header ${isVisible ? '' : 'header-hidden'} ${!isAtTop ? 'header-scrolled' : ''}`}>
        {/* Logo removed as requested */}

        <button className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
        </button>

        <nav className={isMobileMenuOpen ? 'nav-open' : ''}>
            <ul className="nav-links">
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                <li><a href="#certifications" onClick={closeMenu}>Certifications</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
        </nav>
    </header>
);
};

export default Header;

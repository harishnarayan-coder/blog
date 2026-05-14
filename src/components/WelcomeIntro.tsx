import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeIntro: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Prevent scrolling while intro is active
        document.body.style.overflow = 'hidden';

        // Automatically hide the intro after the animation finishes
        const timer = setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = ''; // Restore scrolling
        }, 2200);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = '';
        };
    }, []);

    const letterVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const text = "WELCOME";

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="welcome-intro"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: '#000000',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 99999, // Ensure it covers everything including sticky headers
                        color: '#ffffff',
                    }}
                >
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.12, delayChildren: 0.3 }}
                        style={{
                            display: 'flex',
                            gap: '12px',
                            fontFamily: '"Inter", "Outfit", "Roboto", sans-serif',
                            fontWeight: 300,
                            letterSpacing: '8px', // wide tracking like the target site
                            fontSize: '2rem',
                            textTransform: 'uppercase'
                        }}
                    >
                        {text.split('').map((char, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                transition={{ duration: 0.4 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeIntro;

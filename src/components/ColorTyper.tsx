import React from 'react';
import { motion } from 'framer-motion';

interface ColorTyperProps {
    text: string;
    appearColor?: string;
    finalColor?: string;
    delay?: number;
    colorDelay?: number;
    stagger?: number;
    className?: string;
}

const ColorTyper: React.FC<ColorTyperProps> = ({
    text,
    appearColor = "#9b72ff", // Purple highlight
    finalColor = "#050505", // Dark text
    delay = 0.2,
    colorDelay = 0.3,
    stagger = 0.1,
    className = ""
}) => {
    // Split text into characters, preserving spaces
    const characters = text.split('').map((char, index) => ({
        char,
        id: `${char}-${index}`
    }));

    return (
        <div className={`color-typer ${className}`} style={{ display: 'flex', flexWrap: 'wrap' }}>
            {characters.map((item, index) => {
                const isSpace = item.char === ' ';
                return (
                    <motion.span
                        key={item.id}
                        initial={{ opacity: 0, color: finalColor }}
                        animate={{
                            opacity: [0, 1, 1],
                            color: [finalColor, appearColor, finalColor]
                        }}
                        transition={{
                            duration: colorDelay * 2,
                            times: [0, 0.1, 1], // Appear quickly, then transition color
                            delay: delay + (index * stagger),
                            ease: "easeOut"
                        }}
                        style={{
                            display: 'inline-block',
                            whiteSpace: isSpace ? 'pre' : 'normal',
                            opacity: 0 // Set initial opacity for SSR/initial render
                        }}
                    >
                        {item.char}
                    </motion.span>
                );
            })}
        </div>
    );
};

export default ColorTyper;

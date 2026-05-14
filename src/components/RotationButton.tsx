import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './RotationButton.css';

interface RotationButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    download?: boolean | string;
}

const RotationButton: React.FC<RotationButtonProps> = ({ text, href, onClick, download }) => {
    const [isHovered, setIsHovered] = useState(false);

    const transition1 = { type: "spring" as const, bounce: 0.4, duration: 0.6 };
    const transition2 = { type: "spring" as const, bounce: 0.25, duration: 0.5 };

    const content = (
        <motion.div
            className="rotation-button-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
        >
            {/* Invisible spacer to give the container the proper width based on text length */}
            <span className="rotation-button-spacer">{text}</span>

            <div className="rotation-button-3d-space">

                {/* Arm 1: Main Text (Rotates down on hover) */}
                <motion.div
                    className="rotation-arm arm-text-main"
                    animate={{ rotateZ: isHovered ? 25 : 0 }}
                    transition={transition1}
                >
                    {text}
                </motion.div>

                {/* Arm 2: Blurred Pill Background (Rotates up on hover) */}
                <motion.div
                    className="rotation-arm arm-background"
                    animate={{
                        rotateZ: isHovered ? 0 : -18,
                        filter: isHovered ? "blur(0px)" : "blur(2px)",
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={transition1}
                >
                    <div className="rotation-pill-fill" />
                </motion.div>

                {/* Arm 3: Secondary Text (Rotates up and scales in on hover) */}
                <motion.div
                    className="rotation-arm arm-text-secondary"
                    animate={{
                        rotateZ: isHovered ? 0 : -35,
                        scale: isHovered ? 1 : 0.6,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={transition2}
                >
                    {text}
                </motion.div>

            </div>
        </motion.div>
    );

    if (href) {
        return <a href={href} className="rotation-button-link" onClick={onClick} download={download}>{content}</a>;
    }

    return <button className="rotation-button-btn" onClick={onClick}>{content}</button>;
};

export default RotationButton;

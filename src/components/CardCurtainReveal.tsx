import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';

const curtainVriants: Variants = {
  visible: {
    clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
    transition: {
      duration: 0.4,
      ease: [0.25, 1.5, 0.5, 1],
    },
  },
  hidden: {
    clipPath: "polygon(50% 0,50% 0,50% 100%,50% 100%)",
    transition: {
      duration: 0.3,
      ease: [0.25, 1.5, 0.5, 1],
    },
  },
};

interface CardCurtainRevealContextValue {
  isMouseIn: boolean;
}
const CardCurtainRevealContext = createContext<CardCurtainRevealContextValue | undefined>(undefined);

function useCardCurtainRevealContext() {
  const context = useContext(CardCurtainRevealContext);
  if (!context) {
    throw new Error("useCardCurtainRevealContext must be used within a CardCurtainReveal Component");
  }
  return context;
}

export const CardCurtainReveal = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className = "", style, ...props }, ref) => {
    const [isMouseIn, setIsMouseIn] = useState(false);
    const handleMouseEnter = useCallback(() => setIsMouseIn(true), []);
    const handleMouseLeave = useCallback(() => setIsMouseIn(false), []);

    return (
      <CardCurtainRevealContext.Provider value={{ isMouseIn }}>
        <div
          ref={ref}
          className={className}
          style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', ...style }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        >
          {children}
        </div>
      </CardCurtainRevealContext.Provider>
    );
  }
);
CardCurtainReveal.displayName = "CardCurtainReveal";

export const CardCurtainRevealFooter = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className = "", style, ...props }, ref) => {
    const { isMouseIn } = useCardCurtainRevealContext();
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ ...style }}
        variants={curtainVriants}
        animate={isMouseIn ? "visible" : "hidden"}
        {...props}
      />
    );
  }
);
CardCurtainRevealFooter.displayName = "CardCurtainRevealFooter";

export const CardCurtainRevealBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", style, ...props }, ref) => {
    return <div ref={ref} className={className} style={{ position: 'relative', zIndex: 2, ...style }} {...props} />;
  }
);
CardCurtainRevealBody.displayName = "CardCurtainRevealBody";

export const CardCurtain = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className = "", style, ...props }, ref) => {
    const { isMouseIn } = useCardCurtainRevealContext();
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          mixBlendMode: 'difference',
          ...style
        }}
        variants={curtainVriants}
        animate={isMouseIn ? "visible" : "hidden"}
        {...props}
      />
    );
  }
);
CardCurtain.displayName = "CardCurtain";

export const CardCurtainRevealDescription = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className = "", style, ...props }, ref) => {
    const { isMouseIn } = useCardCurtainRevealContext();
    return (
      <motion.div
        ref={ref}
        className={className}
        style={style}
        variants={curtainVriants}
        animate={isMouseIn ? "visible" : "hidden"}
        {...props}
      />
    );
  }
);
CardCurtainRevealDescription.displayName = "CardCurtainRevealDescription";

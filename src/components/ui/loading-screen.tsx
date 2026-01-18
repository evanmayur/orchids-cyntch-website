"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";

// Rolling number digit component - creates the "reel" effect
function RollingDigit({ digit, delay = 0 }: { digit: number; delay?: number }) {
  return (
    <div className="relative h-[1em] overflow-hidden">
      <motion.div
        className="flex flex-col"
        initial={{ y: 0 }}
        animate={{ y: `-${digit * 10}%` }}
        transition={{
          duration: 0.5,
          delay,
          ease: [0.23, 1, 0.32, 1],
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <span
            key={num}
            className="block h-[1em] leading-none"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {num}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Percentage counter with rolling animation
function PercentageCounter({ progress }: { progress: number }) {
  const displayValue = Math.min(Math.floor(progress), 100);
  const hundreds = Math.floor(displayValue / 100);
  const tens = Math.floor((displayValue % 100) / 10);
  const ones = displayValue % 10;

  return (
    <div
      className="flex items-baseline justify-center text-white/90"
      style={{
        fontFamily: '"Cormorant Garamond", "Times New Roman", Georgia, serif',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        fontWeight: 300,
        letterSpacing: '0.05em',
      }}
    >
      {displayValue === 100 ? (
        <RollingDigit digit={1} />
      ) : null}
      <RollingDigit digit={displayValue === 100 ? 0 : tens} delay={0.02} />
      <RollingDigit digit={displayValue === 100 ? 0 : ones} delay={0.04} />
      <span className="ml-0.5">%</span>
    </div>
  );
}

// 6-pointed star SVG component - similar to Estrela logo
function StarLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main 6-pointed star */}
      <path
        d="M50 0 L58 42 L100 50 L58 58 L50 100 L42 58 L0 50 L42 42 Z"
        fill="white"
        fillOpacity="0.95"
      />
      {/* Diagonal points */}
      <path
        d="M50 15 L55 45 L85 50 L55 55 L50 85 L45 55 L15 50 L45 45 Z"
        fill="black"
        fillOpacity="0.3"
      />
    </svg>
  );
}

// Alternative elegant star design
function ElegantStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 6-point star with elegant proportions */}
      <g fill="white">
        {/* Vertical diamond */}
        <path d="M60 0 L68 52 L60 120 L52 52 Z" fillOpacity="0.9" />
        {/* Top-left to bottom-right diamond */}
        <path d="M17.6 17.6 L56 52 L102.4 102.4 L64 68 Z" fillOpacity="0.9" />
        {/* Top-right to bottom-left diamond */}
        <path d="M102.4 17.6 L68 52 L17.6 102.4 L56 68 Z" fillOpacity="0.9" />
        {/* Horizontal diamond */}
        <path d="M0 60 L52 52 L120 60 L68 68 Z" fillOpacity="0.9" />
      </g>
    </svg>
  );
}

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const progressRef = useRef(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  // Smooth spring-based progress
  const springProgress = useSpring(0, {
    stiffness: 30,
    damping: 20,
  });

  useEffect(() => {
    const duration = 6000; // 6 seconds
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min((elapsed / duration) * 100, 100);

      // Non-linear easing for more interesting feel
      // Starts slow, speeds up in middle, slows at end
      const eased = rawProgress < 50
        ? 2 * Math.pow(rawProgress / 100, 2) * 100
        : 1 - Math.pow(-2 * rawProgress / 100 + 2, 2) / 2;

      const progress = Math.min(rawProgress * 0.4 + eased * 0.6, 100);

      progressRef.current = progress;
      setDisplayProgress(progress);
      springProgress.set(progress);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setDisplayProgress(100);
        springProgress.set(100);
        // Start exit animation
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => setIsLoading(false), 800);
        }, 300);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [springProgress]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: isExiting ? 0 : 1,
            scale: isExiting ? 1.1 : 1,
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Top percentage counter */}
          <motion.div
            className="absolute"
            style={{ top: '28%' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isExiting ? 0 : 1,
              y: isExiting ? -20 : 0
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <PercentageCounter progress={displayProgress} />
          </motion.div>

          {/* Central rotating star */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{
              opacity: isExiting ? 0 : 1,
              scale: isExiting ? 1.5 : 1,
              rotate: 0,
            }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              rotate: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <ElegantStar className="w-16 h-16 md:w-20 md:h-20" />
            </motion.div>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)',
                transform: 'scale(3)',
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [2.5, 3, 2.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Bottom percentage counter (mirror of top) */}
          <motion.div
            className="absolute"
            style={{ bottom: '28%' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: isExiting ? 0 : 1,
              y: isExiting ? 20 : 0
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <PercentageCounter progress={displayProgress} />
          </motion.div>

          {/* Subtle decorative lines */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-px"
            style={{
              top: 'calc(28% + 3rem)',
              height: 'calc(50% - 28% - 6rem)',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.1) 100%)',
            }}
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: isExiting ? 0 : 1,
              opacity: isExiting ? 0 : 1,
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-px"
            style={{
              bottom: 'calc(28% + 3rem)',
              height: 'calc(50% - 28% - 6rem)',
              background: 'linear-gradient(0deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.1) 100%)',
            }}
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: isExiting ? 0 : 1,
              opacity: isExiting ? 0 : 1,
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Corner accents */}
          <motion.div
            className="absolute top-6 left-6 w-8 h-px bg-white/20"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: isExiting ? 0 : 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.div
            className="absolute top-6 left-6 w-px h-8 bg-white/20"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: isExiting ? 0 : 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ transformOrigin: 'top' }}
          />

          <motion.div
            className="absolute top-6 right-6 w-8 h-px bg-white/20"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: isExiting ? 0 : 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ transformOrigin: 'right' }}
          />
          <motion.div
            className="absolute top-6 right-6 w-px h-8 bg-white/20"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: isExiting ? 0 : 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ transformOrigin: 'top' }}
          />

          <motion.div
            className="absolute bottom-6 left-6 w-8 h-px bg-white/20"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: isExiting ? 0 : 0.3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.div
            className="absolute bottom-6 left-6 w-px h-8 bg-white/20"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: isExiting ? 0 : 0.3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ transformOrigin: 'bottom' }}
          />

          <motion.div
            className="absolute bottom-6 right-6 w-8 h-px bg-white/20"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: isExiting ? 0 : 0.3 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{ transformOrigin: 'right' }}
          />
          <motion.div
            className="absolute bottom-6 right-6 w-px h-8 bg-white/20"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: isExiting ? 0 : 0.3 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{ transformOrigin: 'bottom' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

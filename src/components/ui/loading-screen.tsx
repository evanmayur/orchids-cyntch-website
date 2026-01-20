"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000;
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min((elapsed / duration) * 100, 100);

      // Smooth easing
      const eased = rawProgress < 50
        ? 2 * Math.pow(rawProgress / 100, 2) * 100
        : 100 - Math.pow(-2 * rawProgress / 100 + 2, 2) * 50;

      const smoothProgress = Math.min(rawProgress * 0.4 + eased * 0.6, 100);
      setProgress(Math.floor(smoothProgress));

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => setIsLoading(false), 800);
        }, 300);
      }
    };

    requestAnimationFrame(updateProgress);
  }, []);

  const displayProgress = progress.toString().padStart(3, '0');

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isExiting ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Central orbital design matching hero SVG style */}
          <div className="relative flex items-center justify-center">
            {/* Outermost ring - dashed rotating */}
            <motion.div
              className="absolute"
              style={{ width: "clamp(300px, 50vw, 480px)", height: "clamp(300px, 50vw, 480px)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="0.3"
                  strokeDasharray="4 8"
                />
              </svg>
            </motion.div>

            {/* Second ring - opposite rotation */}
            <motion.div
              className="absolute"
              style={{ width: "clamp(240px, 40vw, 380px)", height: "clamp(240px, 40vw, 380px)" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="0.5"
                  strokeDasharray="1 10"
                />
              </svg>
            </motion.div>

            {/* Progress ring */}
            <motion.div
              className="absolute"
              style={{ width: "clamp(180px, 30vw, 280px)", height: "clamp(180px, 30vw, 280px)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: isExiting ? 0 : 1,
                scale: isExiting ? 1.1 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Background track */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                />
                {/* Progress arc */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray={`${progress * 5.65} 565`}
                  transform="rotate(-90 100 100)"
                  initial={{ strokeDasharray: "0 565" }}
                />
              </svg>
            </motion.div>

            {/* Center spinning star - rotates based on progress */}
            <motion.div
              className="absolute z-10"
              style={{ width: "clamp(80px, 14vw, 120px)", height: "clamp(80px, 14vw, 120px)" }}
              initial={{ scale: 0, opacity: 0, rotate: 0 }}
              animate={{
                scale: isExiting ? 1.5 : 1,
                opacity: isExiting ? 0 : 1,
                rotate: progress * 7.2, // 720 degrees at 100% (2 full rotations)
              }}
              transition={{
                scale: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                rotate: { duration: 0.1, ease: "linear" }
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* 8-pointed star */}
                <motion.path
                  d="M50,5 L56,38 L88,25 L62,44 L95,50 L62,56 L88,75 L56,62 L50,95 L44,62 L12,75 L38,56 L5,50 L38,44 L12,25 L44,38 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                  animate={{
                    stroke: [
                      "rgba(255,255,255,0.4)",
                      "rgba(255,255,255,0.8)",
                      "rgba(255,255,255,0.4)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Inner star glow effect */}
                <motion.path
                  d="M50,20 L54,42 L75,33 L58,46 L80,50 L58,54 L75,67 L54,58 L50,80 L46,58 L25,67 L42,54 L20,50 L42,46 L25,33 L46,42 Z"
                  fill="rgba(255,255,255,0.1)"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.5"
                  animate={{
                    fillOpacity: [0.05, 0.15, 0.05],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Center circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="4"
                  fill="white"
                  animate={{
                    r: [3, 5, 3],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          </div>

          {/* Top label */}
          <motion.div
            className="absolute top-[15%] left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? -20 : 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="text-white/40 tracking-[0.3em] uppercase"
              style={{
                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                fontSize: "clamp(0.6rem, 1vw, 0.75rem)"
              }}
            >
              Codex Infotech
            </span>
          </motion.div>

          {/* Bottom progress section */}
          <motion.div
            className="absolute bottom-[15%] left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? 20 : 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col items-center gap-6">
              {/* Progress bar */}
              <div className="relative w-48 md:w-64">
                <div className="h-px bg-white/10 w-full" />
                <motion.div
                  className="absolute top-0 left-0 h-px bg-white/50"
                  style={{ width: `${progress}%` }}
                />
                {/* Moving indicator */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white"
                  style={{ left: `${progress}%`, marginLeft: -3 }}
                  animate={{
                    boxShadow: [
                      "0 0 8px rgba(255,255,255,0.4)",
                      "0 0 16px rgba(255,255,255,0.6)",
                      "0 0 8px rgba(255,255,255,0.4)",
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>

              {/* Progress text */}
              <div
                className="flex items-center gap-4 text-white/40 tracking-[0.2em] uppercase"
                style={{
                  fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)"
                }}
              >
                <span>Loading</span>
                <span className="text-white/20">—</span>
                <span className="text-white tabular-nums">{displayProgress}%</span>
              </div>
            </div>
          </motion.div>

          {/* Minimal corner accents */}
          {[
            { position: "top-8 left-8" },
            { position: "top-8 right-8" },
            { position: "bottom-8 left-8" },
            { position: "bottom-8 right-8" },
          ].map((corner, i) => (
            <motion.div
              key={i}
              className={`absolute ${corner.position} w-8 h-8`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isExiting ? 0 : 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
            >
              <svg viewBox="0 0 32 32" className="w-full h-full">
                <path
                  d={
                    i === 0 ? "M0,12 L0,0 L12,0" :
                      i === 1 ? "M20,0 L32,0 L32,12" :
                        i === 2 ? "M0,20 L0,32 L12,32" :
                          "M20,32 L32,32 L32,20"
                  }
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

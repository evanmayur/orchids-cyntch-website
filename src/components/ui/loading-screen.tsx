"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function OrbitingRing({ radius, duration, clockwise, opacity, strokeWidth }: {
  radius: number;
  duration: number;
  clockwise: boolean;
  opacity: number;
  strokeWidth: number;
}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
      style={{
        width: radius * 2,
        height: radius * 2,
        borderColor: `rgba(255, 255, 255, ${opacity})`,
        borderWidth: strokeWidth,
      }}
      animate={{ rotate: clockwise ? 360 : -360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-white"
        style={{
          top: -4,
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: opacity * 2,
        }}
      />
    </motion.div>
  );
}

function GlowingLine({ angle, length, delay }: { angle: number; length: number; delay: number }) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 origin-left"
      style={{
        width: length,
        height: 1,
        background: 'linear-gradient(90deg, rgba(255,255,255,0.4), transparent)',
        transform: `rotate(${angle}deg)`,
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{
        scaleX: [0, 1, 1, 0],
        opacity: [0, 0.6, 0.6, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function CentralGeometry() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.polygon
            points="50,5 95,50 50,95 5,50"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute inset-4"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.5"
            strokeDasharray="10 5"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute inset-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.polygon
            points="50,10 90,50 50,90 10,50"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="0.5"
          />
          <motion.line x1="50" y1="10" x2="50" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <motion.line x1="10" y1="50" x2="90" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="relative w-48 md:w-64">
      <div className="h-[1px] bg-white/10 w-full rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-white/40 via-white to-white/40"
          style={{ width: `${progress}%` }}
        />
      </div>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"
        style={{ left: `${progress}%`, marginLeft: -4 }}
        animate={{
          boxShadow: [
            '0 0 10px rgba(255,255,255,0.5)',
            '0 0 20px rgba(255,255,255,0.8)',
            '0 0 10px rgba(255,255,255,0.5)',
          ],
        }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </div>
  );
}

const staticParticles = [
  { x: 10, y: 20 }, { x: 25, y: 15 }, { x: 40, y: 30 }, { x: 55, y: 10 },
  { x: 70, y: 25 }, { x: 85, y: 18 }, { x: 15, y: 75 }, { x: 30, y: 85 },
  { x: 45, y: 70 }, { x: 60, y: 80 }, { x: 75, y: 90 }, { x: 90, y: 75 },
];

const staticGlowingLines = [
  { angle: 0, length: 100 },
  { angle: 45, length: 90 },
  { angle: 90, length: 110 },
  { angle: 135, length: 95 },
  { angle: 180, length: 105 },
  { angle: 225, length: 85 },
  { angle: 270, length: 100 },
  { angle: 315, length: 90 },
];

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(0);
  const progressRef = useRef(0);

  useEffect(() => {
    const duration = 6000;
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min((elapsed / duration) * 100, 100);

      const eased = rawProgress < 50
        ? 2 * Math.pow(rawProgress / 100, 2) * 100
        : 100 - Math.pow(-2 * rawProgress / 100 + 2, 2) * 50;

      const progress = Math.min(rawProgress * 0.3 + eased * 0.7, 100);

      progressRef.current = progress;
      setDisplayProgress(progress);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setDisplayProgress(100);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => setIsLoading(false), 800);
        }, 300);
      }
    };

    requestAnimationFrame(updateProgress);
  }, []);

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
          {staticParticles.map((p, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              animate={{
                opacity: [0.1, 0.8, 0.1],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <OrbitingRing radius={120} duration={12} clockwise={true} opacity={0.1} strokeWidth={1} />
          <OrbitingRing radius={160} duration={18} clockwise={false} opacity={0.08} strokeWidth={1} />
          <OrbitingRing radius={200} duration={25} clockwise={true} opacity={0.05} strokeWidth={1} />

          {staticGlowingLines.map((l, i) => (
            <GlowingLine key={`line-${i}`} angle={l.angle} length={l.length} delay={i * 0.3} />
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: isExiting ? 0 : 1,
              scale: isExiting ? 1.5 : 1,
            }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <CentralGeometry />
          </motion.div>

          <motion.div
            className="absolute bottom-20 flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? 20 : 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ProgressBar progress={displayProgress} />
            
            <div className="flex items-center gap-3">
              <motion.span
                className="text-xs uppercase tracking-[0.3em] text-white/40"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Loading
              </motion.span>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 rounded-full bg-white/60"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-8 left-8 w-12 h-px bg-gradient-to-r from-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.div
            className="absolute top-8 left-8 w-px h-12 bg-gradient-to-b from-white/20 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformOrigin: 'top' }}
          />

          <motion.div
            className="absolute top-8 right-8 w-12 h-px bg-gradient-to-l from-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: 'right' }}
          />
          <motion.div
            className="absolute top-8 right-8 w-px h-12 bg-gradient-to-b from-white/20 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: 'top' }}
          />

          <motion.div
            className="absolute bottom-8 left-8 w-12 h-px bg-gradient-to-r from-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-px h-12 bg-gradient-to-t from-white/20 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ transformOrigin: 'bottom' }}
          />

          <motion.div
            className="absolute bottom-8 right-8 w-12 h-px bg-gradient-to-l from-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ transformOrigin: 'right' }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-px h-12 bg-gradient-to-t from-white/20 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ transformOrigin: 'bottom' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
  onComplete: () => void;
  duration?: number;
}

export function SplashScreen({ onComplete, duration = 3800 }: SplashScreenProps) {
  const [phase, setPhase] = useState<'logo' | 'slogan' | 'crt'>('logo');

  useEffect(() => {
    // Phase 1: Show big logo (0-1200ms)
    const sloganTimer = setTimeout(() => {
      setPhase('slogan');
    }, 1200);

    // Phase 2: Show slogan (1200-2800ms)
    const crtTimer = setTimeout(() => {
      setPhase('crt');
    }, 2800);

    // Phase 3: CRT close effect and complete (2800-3800ms)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => {
      clearTimeout(sloganTimer);
      clearTimeout(crtTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Phase 1: Big Logo N */}
      <AnimatePresence>
        {phase === 'logo' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.svg
              width={200}
              height={200}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ filter: 'drop-shadow(0 0 0px rgba(59, 130, 246, 0))' }}
              animate={{ filter: 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.4))' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <motion.path
                d="M8 40V8H14L34 30.5V8H40V40H34L14 17.5V40H8Z"
                fill="white"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
              <path
                d="M14 8L34 30.5"
                stroke="#475569"
                strokeWidth="0.5"
                strokeDasharray="2 2"
              />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phase 2: Slogan */}
      <AnimatePresence>
        {phase === 'slogan' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center space-y-4 px-8">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-200 text-2xl font-light tracking-wide"
              >
                核心客户动态 · 每日速览
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-400 text-lg font-light tracking-wide"
              >
                主要顧客の最新動向を、毎日コンパクトに
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phase 3: CRT TV Close Effect */}
      <AnimatePresence>
        {phase === 'crt' && (
          <>
            {/* Main CRT closing effect */}
            <motion.div
              initial={{ clipPath: 'inset(0 0 0 0)' }}
              animate={{ clipPath: 'inset(50% 0 50% 0)' }}
              transition={{ duration: 0.8, ease: 'easeIn' }}
              className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            >
              {/* White flash line in the middle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.8, 0] }}
                transition={{ duration: 0.8, times: [0, 0.3, 0.7, 1] }}
                className="absolute inset-x-0 top-1/2 h-[3px] bg-white blur-[1px]"
              />
            </motion.div>

            {/* Final fade to black */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="absolute inset-0 bg-black"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
  duration?: number;
}

export function SplashScreen({ onComplete, duration = 2000 }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        background: 'linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Logo N */}
      <svg
        width={200}
        height={200}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.4))'
        }}
      >
        <path
          d="M8 40V8H14L34 30.5V8H40V40H34L14 17.5V40H8Z"
          fill="white"
        />
        <path
          d="M14 8L34 30.5"
          stroke="#475569"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
      </svg>
    </div>
  );
}
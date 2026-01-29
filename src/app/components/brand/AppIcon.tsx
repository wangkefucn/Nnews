import React from 'react';

interface AppIconProps {
  size?: number;
}

export function AppIcon({ size = 120 }: AppIconProps) {
  return (
    <div
      className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-[20%] shadow-2xl flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Main N Logo */}
      <svg
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
      
      {/* Subtle accent dot - representing "front line" */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-80"></div>
    </div>
  );
}

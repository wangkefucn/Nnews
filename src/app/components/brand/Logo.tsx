import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'square' | 'icon-only';
  size?: 'small' | 'medium' | 'large';
  theme?: 'dark' | 'light';
}

export function Logo({ variant = 'horizontal', size = 'medium', theme = 'light' }: LogoProps) {
  const textColor = theme === 'dark' ? 'text-white' : 'text-slate-800';
  const logoFill = theme === 'dark' ? '#ffffff' : '#1e293b';
  
  const sizes = {
    small: { logo: 24, text: 'text-base' },
    medium: { logo: 32, text: 'text-xl' },
    large: { logo: 48, text: 'text-3xl' },
  };

  const { logo: logoSize, text: textSize } = sizes[size];

  // Geometric N Logo with subtle split design
  const NLogo = (
    <svg
      width={logoSize}
      height={logoSize}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 40V8H14L34 30.5V8H40V40H34L14 17.5V40H8Z"
        fill={logoFill}
      />
      <path
        d="M14 8L34 30.5"
        stroke={theme === 'dark' ? '#334155' : '#cbd5e1'}
        strokeWidth="0.5"
        strokeDasharray="2 2"
      />
    </svg>
  );

  if (variant === 'icon-only') {
    return <div className="flex items-center justify-center">{NLogo}</div>;
  }

  if (variant === 'square') {
    return (
      <div className="flex flex-col items-center gap-2">
        {NLogo}
        <span className={`font-semibold tracking-tight ${textSize} ${textColor}`}>
          N前线
        </span>
      </div>
    );
  }

  // Horizontal variant
  return (
    <div className="flex items-center gap-3">
      {NLogo}
      <span className={`font-semibold tracking-tight ${textSize} ${textColor}`}>
        N前线
      </span>
    </div>
  );
}

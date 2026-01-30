import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Logo({ variant = 'dark', size = 'md', className = '' }: LogoProps) {
  const sizeMap = {
    sm: 32,   // 32px
    md: 48,   // 48px
    lg: 64,   // 64px
    xl: 96,   // 96px
  };

  const logoSize = sizeMap[size];
  
  if (variant === 'light') {
    // 浅色版Logo（用于深色背景）
    return (
      <svg width={logoSize} height={logoSize} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id="inkGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#f8fafc',stopOpacity:1}} />
            <stop offset="50%" style={{stopColor:'#f1f5f9',stopOpacity:0.98}} />
            <stop offset="100%" style={{stopColor:'#e2e8f0',stopOpacity:0.95}} />
          </linearGradient>
          
          <linearGradient id="brushStrokeLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#60a5fa',stopOpacity:1}} />
            <stop offset="30%" style={{stopColor:'#3b82f6',stopOpacity:0.95}} />
            <stop offset="70%" style={{stopColor:'#2563eb',stopOpacity:0.9}} />
            <stop offset="100%" style={{stopColor:'#1d4ed8',stopOpacity:0.85}} />
          </linearGradient>
          
          <radialGradient id="sealRedLight">
            <stop offset="0%" style={{stopColor:'#f87171',stopOpacity:0.95}} />
            <stop offset="100%" style={{stopColor:'#dc2626',stopOpacity:0.8}} />
          </radialGradient>
        </defs>
        
        <circle cx="60" cy="58" r="48" fill="#ffffff" opacity="0.05"/>
        
        <path d="M 26 30 Q 28 30 30 32 L 32 82 Q 32 86 30 88 L 26 88 Q 24 86 24 82 L 24 32 Q 24 30 26 30 Z" 
              fill="url(#inkGradientLight)"/>
        
        <path d="M 26 30 L 30 32 L 28 34" fill="#f8fafc" opacity="0.7"/>
        <ellipse cx="28" cy="88" rx="3" ry="2" fill="#f8fafc" opacity="0.4"/>
        
        <path d="M 30 28 Q 32 26 36 28 L 88 84 Q 92 88 90 92 Q 88 94 84 92 L 32 36 Q 28 32 30 28 Z" 
              fill="url(#brushStrokeLight)"/>
        
        <ellipse cx="33" cy="28" rx="4" ry="3" fill="#60a5fa" opacity="0.7" transform="rotate(-45 33 28)"/>
        
        <path d="M 86 88 Q 90 90 92 86 Q 90 88 86 88 Z" fill="#3b82f6" opacity="0.8"/>
        
        <path d="M 88 32 Q 88 30 90 30 L 94 30 Q 96 30 96 32 L 96 86 Q 96 88 94 88 L 90 88 Q 88 88 88 86 L 88 32 Z" 
              fill="url(#inkGradientLight)"/>
        
        <path d="M 90 30 L 94 32 L 92 34" fill="#f8fafc" opacity="0.7"/>
        <ellipse cx="92" cy="88" rx="3" ry="2" fill="#f8fafc" opacity="0.4"/>
        
        <path d="M 45 48 Q 48 46 52 48 Q 50 50 46 49 Z" fill="#0f172a" opacity="0.25"/>
        <path d="M 62 64 Q 65 62 68 64 Q 66 66 63 65 Z" fill="#0f172a" opacity="0.2"/>
        <ellipse cx="72" cy="73" rx="2" ry="1.5" fill="#1e293b" opacity="0.2" transform="rotate(-45 72 73)"/>
        
        <circle cx="36" cy="26" r="1.5" fill="#e2e8f0" opacity="0.5"/>
        <circle cx="92" cy="30" r="1" fill="#e2e8f0" opacity="0.4"/>
        <ellipse cx="26" cy="86" rx="1.5" ry="1" fill="#e2e8f0" opacity="0.35"/>
        
        <circle cx="98" cy="94" r="4" fill="url(#sealRedLight)" opacity="0.9"/>
        <circle cx="98" cy="94" r="2.5" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.7"/>
      </svg>
    );
  }
  
  // 深色版Logo（用于浅色背景）
  return (
    <svg width={logoSize} height={logoSize} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="inkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#0f172a',stopOpacity:1}} />
          <stop offset="50%" style={{stopColor:'#1e293b',stopOpacity:0.95}} />
          <stop offset="100%" style={{stopColor:'#334155',stopOpacity:0.9}} />
        </linearGradient>
        
        <linearGradient id="brushStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#1e40af',stopOpacity:1}} />
          <stop offset="30%" style={{stopColor:'#2563eb',stopOpacity:0.95}} />
          <stop offset="70%" style={{stopColor:'#3b82f6',stopOpacity:0.9}} />
          <stop offset="100%" style={{stopColor:'#60a5fa',stopOpacity:0.85}} />
        </linearGradient>
        
        <radialGradient id="sealRed">
          <stop offset="0%" style={{stopColor:'#dc2626',stopOpacity:0.9}} />
          <stop offset="100%" style={{stopColor:'#b91c1c',stopOpacity:0.7}} />
        </radialGradient>
      </defs>
      
      <circle cx="60" cy="58" r="48" fill="#1e293b" opacity="0.03"/>
      
      <path d="M 26 30 Q 28 30 30 32 L 32 82 Q 32 86 30 88 L 26 88 Q 24 86 24 82 L 24 32 Q 24 30 26 30 Z" 
            fill="url(#inkGradient)"/>
      
      <path d="M 26 30 L 30 32 L 28 34" fill="#0f172a" opacity="0.6"/>
      <ellipse cx="28" cy="88" rx="3" ry="2" fill="#0f172a" opacity="0.3"/>
      
      <path d="M 30 28 Q 32 26 36 28 L 88 84 Q 92 88 90 92 Q 88 94 84 92 L 32 36 Q 28 32 30 28 Z" 
            fill="url(#brushStroke)"/>
      
      <ellipse cx="33" cy="28" rx="4" ry="3" fill="#1e40af" opacity="0.6" transform="rotate(-45 33 28)"/>
      
      <path d="M 86 88 Q 90 90 92 86 Q 90 88 86 88 Z" fill="#2563eb" opacity="0.7"/>
      
      <path d="M 88 32 Q 88 30 90 30 L 94 30 Q 96 30 96 32 L 96 86 Q 96 88 94 88 L 90 88 Q 88 88 88 86 L 88 32 Z" 
            fill="url(#inkGradient)"/>
      
      <path d="M 90 30 L 94 32 L 92 34" fill="#0f172a" opacity="0.6"/>
      <ellipse cx="92" cy="88" rx="3" ry="2" fill="#0f172a" opacity="0.3"/>
      
      <path d="M 45 48 Q 48 46 52 48 Q 50 50 46 49 Z" fill="#f8fafc" opacity="0.4"/>
      <path d="M 62 64 Q 65 62 68 64 Q 66 66 63 65 Z" fill="#f8fafc" opacity="0.35"/>
      <ellipse cx="72" cy="73" rx="2" ry="1.5" fill="#ffffff" opacity="0.3" transform="rotate(-45 72 73)"/>
      
      <circle cx="36" cy="26" r="1.5" fill="#1e293b" opacity="0.4"/>
      <circle cx="92" cy="30" r="1" fill="#1e293b" opacity="0.35"/>
      <ellipse cx="26" cy="86" rx="1.5" ry="1" fill="#1e293b" opacity="0.3"/>
      
      <circle cx="98" cy="94" r="4" fill="url(#sealRed)" opacity="0.8"/>
      <circle cx="98" cy="94" r="2.5" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.6"/>
    </svg>
  );
}

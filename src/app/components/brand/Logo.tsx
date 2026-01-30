import React from 'react';
import logoDark from '@/../../exports/logo-dark.svg';
import logoLight from '@/../../exports/logo-light.svg';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Logo({ variant = 'dark', size = 'md', className = '' }: LogoProps) {
  const sizeMap = {
    sm: 'w-8 h-8',   // 32px - 适用于TabBar
    md: 'w-12 h-12', // 48px - 适用于标准展示
    lg: 'w-16 h-16', // 64px - 适用于页面头部
    xl: 'w-24 h-24', // 96px - 适用于启动页
  };

  const logo = variant === 'light' ? logoLight : logoDark;
  
  return (
    <div className={`${sizeMap[size]} ${className}`}>
      <img 
        src={logo} 
        alt="N前线 Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
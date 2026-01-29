import React from 'react';

interface CategoryTagProps {
  label: string;
  variant?: 'IR' | 'AI' | 'finance' | 'hr' | 'governance' | 'default';
}

export function CategoryTag({ label, variant = 'default' }: CategoryTagProps) {
  const variantStyles = {
    IR: 'bg-blue-50 text-blue-700 border-blue-200',
    AI: 'bg-purple-50 text-purple-700 border-purple-200',
    finance: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    hr: 'bg-amber-50 text-amber-700 border-amber-200',
    governance: 'bg-slate-50 text-slate-700 border-slate-200',
    default: 'bg-gray-50 text-gray-700 border-gray-200'
  };

  return (
    <span className={`inline-block px-2.5 py-0.5 text-xs font-medium border rounded ${variantStyles[variant]}`}>
      {label}
    </span>
  );
}

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-dark-800 p-6 rounded-xl shadow-3d transform hover:scale-105 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}
import React, { ReactNode } from 'react';

interface LabeledContainerProps {
  label: string;
  children?: ReactNode;
  className?: string;
}

export const LabeledContainer: React.FC<LabeledContainerProps> = ({ label, children, className = '' }) => {
  return (
    <div className={`relative border border-gray-300 rounded-md p-3 pt-5 ${className}`}>
      <span className="absolute -top-2.5 left-2 px-1 bg-white text-sm font-medium">
        {label}
      </span>
      {children}
    </div>
  );
};

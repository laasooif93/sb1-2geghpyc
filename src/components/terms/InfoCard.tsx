import React from 'react';

interface InfoCardProps {
  title: string;
  titleColor: string;
  children: React.ReactNode;
}

export default function InfoCard({ title, titleColor, children }: InfoCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h4 className={`font-semibold ${titleColor} mb-2`}>{title}</h4>
      {children}
    </div>
  );
}
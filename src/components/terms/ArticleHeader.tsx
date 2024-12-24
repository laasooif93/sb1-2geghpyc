import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ArticleHeaderProps {
  icon: LucideIcon;
  title: string;
  iconColor: string;
}

export default function ArticleHeader({ icon: Icon, title, iconColor }: ArticleHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <Icon className={`w-6 h-6 ${iconColor}`} />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
  );
}
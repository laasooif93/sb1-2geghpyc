import React from 'react';
import { LucideIcon } from 'lucide-react';
import ArticleHeader from './ArticleHeader';

interface ArticleCardProps {
  icon: LucideIcon;
  title: string;
  iconColor: string;
  gradient: string;
  children: React.ReactNode;
}

export default function ArticleCard({ icon, title, iconColor, gradient, children }: ArticleCardProps) {
  return (
    <article className={`${gradient} rounded-xl p-6 shadow-sm`}>
      <ArticleHeader icon={icon} title={title} iconColor={iconColor} />
      {children}
    </article>
  );
}
import type { Mail } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  type: 'web' | 'mobile';
  description: string;
  stack: string[];
  link?: string;
}

export interface Social {
  label: string;
  href: string;
  icon: typeof Mail;
}

export interface NavLink {
  href: string;
  label: string;
  hoverColor: string;
}

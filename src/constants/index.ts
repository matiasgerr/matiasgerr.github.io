import { Github, Linkedin, Mail } from 'lucide-react';
import type { Project, Social, NavLink } from '../types';

export const CURRENT_YEAR = new Date().getFullYear();

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Landing Page Ecomerce',
    type: 'web',
    description:
      'Landing page de ecommerce moderna con diseño responsivo, catálogo de productos y flujo de compra integrado.',
    stack: ['NextJS', 'Tailwind', 'Vercel', "MUI"],
    link: 'https://gestion-globals-nexjs-seven.vercel.app/',
  },
  {
    id: '02',
    title: 'YIPI WEB',
    type: 'web',
    description: 'Visualización de métricas empresariales conectadas a BD relacional.',
    stack: ['React', 'SQL', 'Tailwind'],
  },
  {
    id: '03',
    title: 'Yipi Web',
    type: 'web',
    description:
      'Versión web de YIPI con las mismas funcionalidades de gestión de locales, consumo, costos y productos, sumando capacidades adicionales propias de la plataforma web.',
    stack: ['React', 'Tailwind', 'REST'],
  },
  {
    id: '04',
    title: 'YIPI Aplication',
    type: 'mobile',
    description:
      'Aplicación basada en React Native que tiene como objetivo hacer una gestion total de locales a tu cargo mas consumo, costos, productos, servicios aparte de una integracion de plan de pago, etc.',
    stack: ['React Native', 'Tailwind', 'REST'],
  },

];

export const SOCIALS: Social[] = [
  { label: 'EMAIL', href: 'mailto:matiasdelgadodjr@gmail.com', icon: Mail },
  { label: 'GITHUB', href: 'https://github.com/MatiasDelgadoD', icon: Github },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/matiasdamiandelgado/', icon: Linkedin },
];

export const NAV_LINKS: NavLink[] = [
  { href: '#sobre-mi', label: 'Sobre mí', hoverColor: 'hover:text-blue-400' },
  { href: '#proyectos', label: 'Proyectos', hoverColor: 'hover:text-teal-400' },
  { href: '#contacto', label: 'Contacto', hoverColor: 'hover:text-blue-400' },
];

export const SKILLS = [
  { label: '/ FRONTEND', items: ['React.js', 'Next.js', 'Tailwind CSS'] },
  { label: '/ MOBILE', items: ['React Native', 'SQLite App'] },
  { label: '/ BACKEND', items: ['API REST', 'SQL Database', 'Node.js'] },
];

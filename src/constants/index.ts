import { Github, Linkedin, Mail } from 'lucide-react';
import type { Project, Social, NavLink } from '../types';

export const CURRENT_YEAR = new Date().getFullYear();

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'E-commerce Platform',
    type: 'web',
    description: 'Panel de administración y tienda en línea con carrito en tiempo real.',
    stack: ['NextJS', 'Tailwind', 'API REST'],
  },
  {
    id: '02',
    title: 'Data Dashboard',
    type: 'web',
    description: 'Visualización de métricas empresariales conectadas a BD relacional.',
    stack: ['React', 'SQL', 'Tailwind'],
  },
  {
    id: '03',
    title: 'Task Manager',
    type: 'web',
    description: 'App para equipos con asignación de tareas mediante WebSockets.',
    stack: ['React', 'Node.js', 'SQL'],
  },
  {
    id: '04',
    title: 'Ejeschool Application',
    type: 'mobile',
    description:
      'Aplicación basada en React Native que ayuda a controlar y gestionar gastos de viajes de tus estudiantes y monitorear el viaje mediante un sistema de Trackeo, además de ofrecer funcionalidades de Notification Push con Expo.',
    stack: ['React Native', 'Expo', 'Push Notifications'],
  },
  {
    id: '05',
    title: 'YIPI Aplication',
    type: 'mobile',
    description:
      'Aplicación basada en React Native que tiene como objetivo hacer una gestion total de locales a tu cargo mas consumo, costos, productos, servicios aparte de una integracion de plan de pago, etc.',
    stack: ['React Native', 'Tailwind', 'REST'],
  },
];

export const SOCIALS: Social[] = [
  { label: 'EMAIL', href: 'mailto:mail@ejemplo.com', icon: Mail },
  { label: 'GITHUB', href: 'https://github.com', icon: Github },
  { label: 'LINKEDIN', href: 'https://linkedin.com', icon: Linkedin },
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

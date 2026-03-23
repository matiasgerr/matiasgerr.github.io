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
    description: 'Visualizacion de Geocercas, historial, planes, gestion de vehiculos y gestion de servicios hechos o faltantes para mantener y regularizar servicios pagos o inpagos del vehiculo asi como traking en vivo si es que hay actividad sospechosa del vehiculo',
    stack: ['React', 'Traccar', 'Tailwind', 'REST'],
  },
  {
    id: '03',
    title: 'Ejeschool Aplication',
    type: 'web',
    description:
      'Aplicacion Family view que es para gestionar, tracking y historial en viajes hechos o en vivo mediante suscripciones.',
    stack: ['React Native', 'Tailwind', 'REST', 'Traccar'],
  },
  {
    id: '04',
    title: 'Plania Aplication ',
    type: 'mobile',
    description:
      'Aplicación basada en React Native que tiene como objetivo hacer una gestion total de locales a tu cargo mas consumo, costos, productos, servicios aparte de una integracion de plan de pago, etc.',
    stack: ['React Native', 'Tailwind', 'REST'],
  },
  {
    id: '05',
    title: 'YIPI Aplication ',
    type: 'mobile',
    description:
      'Aplicación basada en React Native que tiene como objetivo hacer una gestion total de locales, costos, productos, servicios aparte de una integracion de plan de pago, Teacking de tu vehiculo y estado del mismo, gestion e mantenimientos o servicios y creacion e Geocercas para saber locales e mantenimiento cerca',
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
  { label: '/ WEB', items: ['React.js', 'Next.js', 'Tailwind CSS'] },
  { label: '/ MOBILE', items: ['React Native', 'Tailwind CSS'] },
  { label: '/ BACKEND', items: ['API REST', 'SQL Database', 'Node.js', 'PHP'] },
];

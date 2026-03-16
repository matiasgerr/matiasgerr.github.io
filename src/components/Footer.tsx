import { CURRENT_YEAR } from '../constants';

const Footer = () => (
  <footer className="border-t border-slate-900 bg-black py-8 px-4 md:px-12 font-mono text-xs text-slate-600 flex justify-between items-center">
    <p>© {CURRENT_YEAR} / CODIFICADO DESDE CERO.</p>
    <p>REACT // TAILWIND</p>
  </footer>
);

export default Footer;

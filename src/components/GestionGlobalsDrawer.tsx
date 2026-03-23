import { ArrowUpRight } from 'lucide-react';
import gestionGlobalsImg from '../assets/gestion-globals.png';

interface GestionGlobalsDrawerProps {
  open: boolean;
}

const GestionGlobalsDrawer = ({ open }: GestionGlobalsDrawerProps) => (
  <div
    className={`grid transition-all duration-500 ease-in-out ${
      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
    }`}
  >
    <div className="overflow-hidden">
      <div className="bg-slate-900/60 border-b border-slate-700 px-4 md:px-12 py-8 md:py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <span className="font-mono text-xs tracking-widest text-teal-400 uppercase mb-4">
              / Web App
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
              Landing Page Ecomerce
            </h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
              Landing page de ecommerce moderna con diseño responsivo, catálogo de productos y flujo
              de compra integrado.
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-xs mb-8">
              {['NextJS', 'Tailwind', 'Vercel'].map((tech) => (
                <span key={tech} className="px-3 py-1 border border-slate-700 text-slate-400 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="https://gestion-globals-nexjs-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-sm font-mono text-teal-400 border border-teal-400/40 hover:border-teal-400 hover:bg-teal-400/10 px-4 py-2 rounded transition-all w-fit"
            >
              Ver proyecto <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src={gestionGlobalsImg}
              alt="Landing Page Ecomerce"
              className="w-full rounded-xl border border-slate-700 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GestionGlobalsDrawer;

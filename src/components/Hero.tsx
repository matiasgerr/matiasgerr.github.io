import { Terminal } from 'lucide-react';
import { CURRENT_YEAR } from '../constants';

const Hero = () => (
  <header className="min-h-screen flex flex-col justify-center px-4 md:px-12 relative pt-20">
    <div className="absolute top-10 left-4 md:left-12 font-mono text-sm text-slate-600">
      Portfolio // {CURRENT_YEAR}
    </div>

    <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-2">
      <h1 className="text-[15vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter text-transparent [-webkit-text-stroke:1px_theme(colors.slate.700)] hover:[-webkit-text-stroke:2px_theme(colors.slate.400)] transition-all duration-500 cursor-default">
        SOFTWARE
      </h1>
      <h1 className="text-[15vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-slate-200">
        ENGINEER.
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 border-t border-slate-800 pt-8">
        <p className="font-mono text-slate-500 max-w-md text-sm md:text-base mb-6 md:mb-0">
          Especializado en arquitecturas escalables. Transformando lógicas complejas en interfaces
          minimalistas usando React, NextJS y React Native.
        </p>
        <div className="flex gap-4">
          <Terminal className="w-8 h-8 text-slate-700" />
        </div>
      </div>
    </div>
  </header>
);

export default Hero;

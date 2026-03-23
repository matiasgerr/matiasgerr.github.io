import yipiWebImg from '../assets/yipi_web.png';

interface YipiWebDrawerProps {
  open: boolean;
}

const YipiWebDrawer = ({ open }: YipiWebDrawerProps) => (
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
              Yipi Web
            </h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
              Versión web de YIPI con las mismas funcionalidades de gestión de locales, consumo,
              costos y productos, sumando capacidades adicionales propias de la plataforma web.
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {['React', 'Tailwind', 'REST'].map((tech) => (
                <span key={tech} className="px-3 py-1 border border-slate-700 text-slate-400 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={yipiWebImg}
              alt="Yipi Web"
              className="w-full rounded-xl border border-slate-700 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default YipiWebDrawer;

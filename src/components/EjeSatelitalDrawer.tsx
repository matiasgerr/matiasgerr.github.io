interface EjeSatelitalDrawerProps {
  open: boolean;
}

const EjeSatelitalDrawer = ({ open }: EjeSatelitalDrawerProps) => (
  <div
    className={`grid transition-all duration-500 ease-in-out ${
      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
    }`}
  >
    <div className="overflow-hidden">
      <div className="bg-slate-900/60 border-b border-slate-700 px-4 md:px-12 py-8 md:py-10">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs tracking-widest text-teal-400 uppercase mb-4 block">
            / Backend Project
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
            Eje Satelital
          </h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-4xl">
            Solución backend en Java para centralizar operaciones de base de datos y exponer
            servicios REST para consumo interno. Incluye diseño de capas (controller, service,
            repository), validación de datos y trazabilidad de eventos para facilitar auditoría y
            mantenimiento.
          </p>
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {['Java', 'Spring Boot', 'SQL Database', 'API REST', 'Auditoría de datos'].map((tech) => (
              <span key={tech} className="px-3 py-1 border border-slate-700 text-slate-400 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EjeSatelitalDrawer;

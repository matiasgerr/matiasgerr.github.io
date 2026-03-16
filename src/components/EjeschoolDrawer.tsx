import ejeschoolImg from '../assets/ejeschool.png';

interface EjeschoolDrawerProps {
  open: boolean;
}

const EjeschoolDrawer = ({ open }: EjeschoolDrawerProps) => (
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
              / Mobile App
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
              Ejeschool Application
            </h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
              Aplicación basada en React Native que ayuda a controlar y gestionar gastos de viajes
              de tus estudiantes y monitorear el viaje mediante un sistema de Trackeo, además de
              ofrecer funcionalidades de Notification Push con Expo.
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {['React Native', 'Expo', 'Push Notifications'].map((tech) => (
                <span key={tech} className="px-3 py-1 border border-slate-700 text-slate-400 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={ejeschoolImg}
              alt="Ejeschool Application"
              className="w-full rounded-xl border border-slate-700 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EjeschoolDrawer;

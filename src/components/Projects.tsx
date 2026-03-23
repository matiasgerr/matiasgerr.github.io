import { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import EjeschoolDrawer from './EjeschoolDrawer';
import YipiDrawer from './YipiDrawer';
import GestionGlobalsDrawer from './GestionGlobalsDrawer';
import YipiWebDrawer from './YipiWebDrawer';

const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    if (id === '01' || id === '03' || id === '04' || id === '02') setOpenProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="proyectos" className="py-32 border-t border-slate-800">
      <div className="px-4 md:px-12 mb-20 max-w-7xl mx-auto">
        <h2 className="text-sm font-mono tracking-widest text-teal-400 uppercase mb-4">
          ( 02. Trabajo )
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold text-slate-100">Colección de Proyectos.</h3>
      </div>

      <div className="border-t border-slate-800">
        {PROJECTS.map((project) => (
          <div key={project.id}>
            <ProjectCard
              project={project}
              isOpen={openProjectId === project.id}
              onSelect={handleSelect}
            />
            {project.id === '01' && <GestionGlobalsDrawer open={openProjectId === '01'} />}
            {project.id === '02' && <YipiWebDrawer open={openProjectId === '02'} />}
            {project.id === '03' && <EjeschoolDrawer open={openProjectId === '03'} />}
            {project.id === '04' && <YipiDrawer open={openProjectId === '04'} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import EjeschoolDrawer from './EjeschoolDrawer';
import YipiDrawer from './YipiDrawer';

const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    if (id === '04' || id === '05') setOpenProjectId((prev) => (prev === id ? null : id));
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
            {project.id === '04' && <EjeschoolDrawer open={openProjectId === '04'} />}
            {project.id === '05' && <YipiDrawer open={openProjectId === '05'} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

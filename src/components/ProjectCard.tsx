import { Globe, Smartphone, ArrowUpRight, ChevronDown } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isOpen?: boolean;
  onSelect: (id: string) => void;
}

const ProjectCard = ({ project, isOpen = false, onSelect }: ProjectCardProps) => {
  const Icon = project.type === 'web' ? Globe : Smartphone;
  const iconHover = project.type === 'web' ? 'group-hover:text-blue-400' : 'group-hover:text-teal-400';
  const isExpandable = project.id === '04' || project.id === '05';

  return (
    <button
      type="button"
      onClick={() => onSelect(project.id)}
      className="group block border-b border-slate-800 hover:bg-slate-900 transition-colors w-full text-left"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <div className="flex items-start md:items-center gap-6 md:gap-12 w-full md:w-auto z-10">
          <span className="font-mono text-2xl md:text-4xl text-slate-700 group-hover:text-blue-500 transition-colors">
            {project.id}
          </span>
          <div>
            <h4 className="text-2xl md:text-4xl font-bold text-slate-200 mb-2">{project.title}</h4>
            <p className="text-slate-500 text-sm md:text-base max-w-md">{project.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto justify-between md:justify-end mt-4 md:mt-0 z-10">
          <div className="hidden md:flex flex-col gap-1 font-mono text-xs text-slate-500 text-right">
            {project.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <Icon className={`w-8 h-8 md:w-12 md:h-12 text-slate-500 ${iconHover} transition-colors`} />
            <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-teal-400 group-hover:bg-teal-400/10 transition-all">
              {isExpandable ? (
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 group-hover:text-teal-400 transition-all duration-300 ${isOpen ? 'rotate-180 text-teal-400' : ''}`}
                />
              ) : (
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-teal-400 transition-colors" />
              )}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;

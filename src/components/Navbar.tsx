import { NAV_LINKS } from '../constants';

const Navbar = () => (
  <nav className="fixed top-6 right-6 md:top-10 md:right-10 z-50">
    <div className="flex flex-col gap-4 font-mono text-xs tracking-widest uppercase text-slate-500">
      {NAV_LINKS.map(({ href, label, hoverColor }) => (
        <a key={href} href={href} className={`${hoverColor} transition-colors text-right group`}>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">-</span>
          {label}
        </a>
      ))}
    </div>
  </nav>
);

export default Navbar;

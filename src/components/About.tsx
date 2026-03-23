import { SKILLS } from '../constants';

const About = () => (
  <section id="sobre-mi" className="py-32 px-4 md:px-12 border-t border-slate-800 bg-slate-900/20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4">
      <div className="md:col-span-4">
        <h2 className="text-sm font-mono tracking-widest text-blue-400 uppercase mb-4">
          ( 01. Contexto )
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-100">Sobre el desarrollador.</h3>
      </div>

      <div className="md:col-span-8 md:col-start-6 space-y-8 text-lg md:text-xl text-slate-400 font-light leading-relaxed">
        <p>
          Busco brindar soluciones a problemas de empresas, profesionales, clientes, empresarios mediante la programación con un codigo escalable y funcional 
          <strong className="text-slate-200 font-normal">(FRONT)</strong>Busco fluidez de las
          interfaces modernas{' '}
          <strong className="text-slate-200 font-normal">(React & React Native)</strong>.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 pt-12 border-t border-slate-800 font-mono text-sm">
          {SKILLS.map(({ label, items }) => (
            <div key={label}>
              <span className="block text-slate-600 mb-2">{label}</span>
              <ul className="text-slate-300 space-y-1">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;

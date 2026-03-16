import { SOCIALS } from '../constants';
import ContactForm from './ContactForm';

const Contact = () => (
  <section id="contacto" className="py-32 px-4 md:px-12 bg-slate-950">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
      <div>
        <h2 className="text-[12vw] md:text-[8vw] font-black leading-none text-slate-100 tracking-tighter mb-8">
          HABLE
          <br />
          MOS.
        </h2>
        <div className="flex gap-6 text-slate-500 font-mono text-sm">
          {SOCIALS.map(({ label, href, icon: SocialIcon }) => (
            <a
              key={label}
              href={href}
              className="hover:text-blue-400 flex items-center gap-2 transition-colors"
            >
              <SocialIcon className="w-4 h-4" /> {label}
            </a>
          ))}
        </div>
      </div>

      <ContactForm />
    </div>
  </section>
);

export default Contact;

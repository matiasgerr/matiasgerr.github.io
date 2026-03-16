import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'sending' | 'success' | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const response = await fetch(import.meta.env.VITE_FORM_URL, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12 justify-center">
      {[
        { type: 'text', name: 'name', placeholder: 'Nombre completo' },
        { type: 'email', name: 'email', placeholder: 'Correo electrónico' },
      ].map((field) => (
        <div key={field.name}>
          <input
            type={field.type}
            name={field.name}
            required
            value={formData[field.name as 'name' | 'email']}
            onChange={handleInputChange}
            placeholder={field.placeholder}
            className="w-full bg-transparent border-b border-slate-700 px-0 py-4 text-2xl md:text-3xl text-slate-200 placeholder-slate-700 focus:outline-none focus:border-blue-400 transition-colors"
          />
        </div>
      ))}

      <div>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Háblame de tu idea..."
          className="w-full bg-transparent border-b border-slate-700 px-0 py-4 text-2xl md:text-3xl text-slate-200 placeholder-slate-700 focus:outline-none focus:border-blue-400 transition-colors resize-none"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={formStatus === 'sending'}
          className="group flex items-center gap-4 text-2xl font-bold text-slate-300 hover:text-teal-400 transition-colors disabled:opacity-50"
        >
          {formStatus === 'sending' ? 'PROCESANDO...' : 'ENVIAR MENSAJE'}
          {formStatus === null && (
            <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          )}
        </button>

        {formStatus === 'success' && (
          <p className="mt-6 font-mono text-teal-400 text-sm">
            {'>'} Sistema: Mensaje recibido con éxito.
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;

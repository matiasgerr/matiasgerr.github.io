export const languagesList = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'es';    

export const Labels = {
    en: {
       name:{
        title: "Matías Delgado", 
       },
       topbar: {
        title: "My Portafolio",
        home: "Home",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
        about: "About"
      },

        presentation:{
          country: "I'm from Argentina, Buenos Aires.",
          text:"I'm a web developer❗, I'm passionate about technology💻 and I'm always looking for new challenges.",
          study: "I'm currently studying ",
          degree: "systems engineering.",
        },
        experience:{
          title: "Experience..",
        },
        badge:{
          text: 'Available to work'
        }
      },
      es: {
          name:{
        title: "Hola, me llamo Matías Delgado", 
       },
        topbar: {
          title: 'Mi Portafolio',
          home: 'inicio',
          experience: 'Experiencia',
          projects: 'Proyectos',
          contact: 'Contacto',
          about: 'Acerca de',
        },
        presentation: {
          text: "hola soy un desarrollador web❗, me apasiona la tecnologia💻 y siempre estoy buscando nuevos retos.",
          country: "Soy de Argentina, Buenos Aires.",
          study: "Actualmente estoy estudiando",
          degree: "ingeniería de sistemas.",
        },
        experience: {
          title: "Experiencia Laboral",
        },
        badge: {
          text: 'Disponible para trabajar.',
        }
      }
    } as const;
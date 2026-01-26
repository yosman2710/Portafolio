'use client'
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface Translations {
    nav: {
        home: string;
        projects: string;
        about: string;
        contact: string;
    };
    hero: {
        badge: string;
        projects: string;
        contact: string;
    };
    about: {
        sectionLabel: string;
        title: string;
        years: string;
        projectsLabel: string;
        clients: string;
        description1: string;
        description2: string;
    };
    projects: {
        sectionLabel: string;
        title: string;
    };
    contact: {
        sectionLabel: string;
        title: string;
        sendMessage: string;
        name: string;
        email: string;
        message: string;
        subject: string;
    };
}

const translations: Record<Language, Translations> = {
    es: {
        nav: {
            home: "Inicio",
            projects: "Proyectos",
            about: "Acerca",
            contact: "Contacto",
        },
        hero: {
            badge: "Desarrollador Full Stack",
            projects: "Proyectos",
            contact: "Contacto",
        },
        about: {
            sectionLabel: "Sobre Mí",
            title: "Acerca",
            years: "Años",
            projectsLabel: "Proyectos",
            clients: "Clientes",
            description1: "Desarrollador Full Stack especializado en el ecosistema JavaScript/TypeScript.",
            description2: "Transformo ideas en productos digitales funcionales con código limpio y escalable.",
        },
        projects: {
            sectionLabel: "Portfolio",
            title: "Proyectos",
        },
        contact: {
            sectionLabel: "Conecta",
            title: "Contacto",
            sendMessage: "Enviar Mensaje",
            name: "Nombre",
            email: "Correo Electrónico",
            message: "Mensaje",
            subject: "Asunto",
        },
    },
    en: {
        nav: {
            home: "Home",
            projects: "Projects",
            about: "About",
            contact: "Contact",
        },
        hero: {
            badge: "Full Stack Developer",
            projects: "Projects",
            contact: "Contact",
        },
        about: {
            sectionLabel: "About Me",
            title: "About",
            years: "Years",
            projectsLabel: "Projects",
            clients: "Clients",
            description1: "Full Stack Developer specialized in the JavaScript/TypeScript ecosystem.",
            description2: "I transform ideas into functional digital products with clean and scalable code.",
        },
        projects: {
            sectionLabel: "Portfolio",
            title: "Projects",
        },
        contact: {
            sectionLabel: "Connect",
            title: "Contact",
            sendMessage: "Send Message",
            name: "Name",
            email: "Email",
            message: "Message",
            subject: "Subject",
        },
    },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>("es");

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
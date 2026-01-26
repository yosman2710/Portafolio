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
        studentBadge: string;
        description1: string;
        languages: string;
        frameworks: string;
        tools: string;
        libraries: string;
        database: string;
        learningTitle: string;
        learningDescription: string;
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
            badge: "Desarrollador Backend",
            projects: "Proyectos",
            contact: "Contacto",
        },
        about: {
            sectionLabel: "Sobre Mí",
            title: "Acerca",
            studentBadge: "Estudiante de Ingeniería Informática",
            description1: "Soy un estudiante apasionado por el desarrollo de software, enfocado en crear soluciones web y móviles modernas. Me encanta aprender nuevas tecnologías y aplicarlas en proyectos reales.",
            languages: "Lenguajes",
            frameworks: "Frameworks",
            tools: "Herramientas",
            libraries: "Librerías",
            database: "Base de Datos",
            learningTitle: "Siempre Aprendiendo",
            learningDescription: "Como estudiante, estoy constantemente explorando nuevas tecnologías y mejorando mis habilidades. Cada proyecto es una oportunidad para crecer y desarrollar soluciones innovadoras.",
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
            badge: "Backend Developer",
            projects: "Projects",
            contact: "Contact",
        },
        about: {
            sectionLabel: "About Me",
            title: "About",
            studentBadge: "Computer Engineering Student",
            description1: "I'm a passionate student focused on software development, creating modern web and mobile solutions. I love learning new technologies and applying them in real projects.",
            languages: "Languages",
            frameworks: "Frameworks",
            tools: "Tools",
            libraries: "Libraries",
            database: "Databases",
            learningTitle: "Always Learning",
            learningDescription: "As a student, I'm constantly exploring new technologies and improving my skills. Every project is an opportunity to grow and develop innovative solutions.",
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
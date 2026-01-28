'use client'
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import '../Styles/Header.css';

const Header = () => {
    const [mounted, setMounted] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // ✅ Mounted check: evita throws y hydration mismatch
    if (!mounted) {
        return (
            <header className="header">
                <div className="logoContainer">
                    {/* Skeleton logo SVG igual */}
                    <svg className="neonSvg" viewBox="0 0 140 140">
                        <path className="neonPath" d="M 40,30 Q 20,30 20,55 Q 20,70 10,70 Q 20,70 20,85 Q 20,110 40,110" />
                        <path className="neonPath" d="M 100,30 Q 120,30 120,55 Q 120,70 130,70 Q 120,70 120,85 Q 120,110 100,110" />
                        <g className="central-symbol">
                            <path className="neonPath" d="M 70,70 L 45,45 M 70,70 L 95,45 M 70,70 L 70,105" />
                            <circle className="neonDot" cx="70" cy="70" r="6" />
                            <circle className="neonDot" cx="45" cy="45" r="6" />
                            <circle className="neonDot" cx="95" cy="45" r="6" />
                            <circle className="neonDot" cx="70" cy="105" r="6" />
                        </g>
                    </svg>
                </div>
                <nav className="nav">
                    <a href="#proyectos" className="navLink">Proyectos</a> {/* Fallback ES */}
                    <a href="#acerca" className="navLink">Acerca</a>
                    <a href="#contacto" className="navLink">Contacto</a>
                </nav>
                <div className="controls">
                    <button className="themeToggle" aria-label="Toggle theme">
                        {/* Icono neutro */}
                        <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor" /></svg>
                    </button>
                    <div className="languageSwitcher">
                        <button className="langBtn">ES</button>
                        <button className="langBtn">EN</button>
                    </div>
                </div>
            </header>
        );
    }

    return (
        <header className="header">
            <Link href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} aria-label="Inicio">
                <div className="logoContainer">
                    <svg
                        className="neonSvg"
                        viewBox="0 0 140 140"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="neonPath"
                            d="M 40,30 Q 20,30 20,55 Q 20,70 10,70 Q 20,70 20,85 Q 20,110 40,110"
                        />
                        <path
                            className="neonPath"
                            d="M 100,30 Q 120,30 120,55 Q 120,70 130,70 Q 120,70 120,85 Q 120,110 100,110"
                        />
                        <g className="central-symbol">
                            <path
                                className="neonPath"
                                d="M 70,70 L 45,45 M 70,70 L 95,45 M 70,70 L 70,105"
                            />
                            <circle className="neonDot" cx="70" cy="70" r="6" />
                            <circle className="neonDot" cx="45" cy="45" r="6" />
                            <circle className="neonDot" cx="95" cy="45" r="6" />
                            <circle className="neonDot" cx="70" cy="105" r="6" />
                        </g>
                    </svg>
                </div>
            </Link>
            <nav className="nav">
                <a href="#proyectos" onClick={(e) => scrollToSection(e, 'proyectos')} className="navLink">
                    {t.nav.projects}
                </a>
                <a href="#acerca" onClick={(e) => scrollToSection(e, 'acerca')} className="navLink">
                    {t.nav.about}
                </a>
                <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')} className="navLink">
                    {t.nav.contact}
                </a>
            </nav>
            <div className="controls">
                <button
                    className="themeToggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <div className="languageSwitcher">
                    <button
                        className={`langBtn ${language === 'es' ? 'active' : ''}`}
                        onClick={() => setLanguage('es')}
                    >
                        ES
                    </button>
                    <button
                        className={`langBtn ${language === 'en' ? 'active' : ''}`}
                        onClick={() => setLanguage('en')}
                    >
                        EN
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

'use client'
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import '../Styles/Header.css';

const Header = () => {
    const { language, setLanguage, t } = useLanguage();

    return (
        <header className="header">
            <Link href="/" aria-label="Inicio">
                <div className="logoContainer">
                    {/* Inicio del SVG en línea */}
                    {/* viewBox="0 0 140 140" define el lienzo de dibujo virtual */}
                    <svg
                        className="neonSvg"
                        viewBox="0 0 140 140"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Llave izquierda "{" */}
                        <path
                            className="neonPath"
                            d="M 40,30 Q 20,30 20,55 Q 20,70 10,70 Q 20,70 20,85 Q 20,110 40,110"
                        />

                        {/* Llave derecha "}" (espejo de la izquierda) */}
                        <path
                            className="neonPath"
                            d="M 100,30 Q 120,30 120,55 Q 120,70 130,70 Q 120,70 120,85 Q 120,110 100,110"
                        />

                        {/* El símbolo central "Y" geométrico */}
                        <g className="central-symbol">
                            {/* Líneas conectoras */}
                            <path
                                className="neonPath"
                                // Dibuja desde el centro (70,70) hacia los 3 extremos
                                d="M 70,70 L 45,45 M 70,70 L 95,45 M 70,70 L 70,105"
                            />
                            {/* Puntos (círculos) en los extremos y el centro */}
                            {/* Centro */}
                            <circle className="neonDot" cx="70" cy="70" r="6" />
                            {/* Arriba Izquierda */}
                            <circle className="neonDot" cx="45" cy="45" r="6" />
                            {/* Arriba Derecha */}
                            <circle className="neonDot" cx="95" cy="45" r="6" />
                            {/* Abajo */}
                            <circle className="neonDot" cx="70" cy="105" r="6" />
                        </g>
                    </svg>
                    {/* Fin del SVG */}
                </div>
            </Link>

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

            {/* Navegación placeholder */}
            <nav style={{ color: '#8b949e', fontSize: '0.9rem', marginLeft: '1rem' }}>
                <span>[{t.nav.projects}]</span>
            </nav>
        </header>
    );
};

export default Header;
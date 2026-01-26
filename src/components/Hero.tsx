'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { Code, Smartphone, Server, Database, Palette, Globe, Zap, Terminal, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import "../Styles/Hero.css";

interface MousePosition {
    x: number;
    y: number;
}

const skills = [
    { name: "React", icon: Code, color: "cyan" },
    { name: "React Native", icon: Smartphone, color: "purple" },
    { name: "Node.js", icon: Server, color: "green" },
    { name: "Database", icon: Database, color: "orange" },
    { name: "UI/UX", icon: Palette, color: "pink" },
    { name: "Web", icon: Globe, color: "blue" },
    { name: "API", icon: Zap, color: "yellow" },
    { name: "CLI", icon: Terminal, color: "gray" },
];

const Hero: React.FC = () => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const { t } = useLanguage();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="heroSection">
            {/* Animated background blobs */}
            <div
                className="backgroundBlob1"
                style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
            />
            <div
                className="backgroundBlob2"
                style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
            />
            <div className="backgroundPulse" />

            {/* Floating particles */}
            <div className="particles">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${3 + i * 0.5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Grid pattern */}
            <div className="gridPattern" />

            {/* Main Content */}
            <div className="mainContent">
                {/* Left Side */}
                <div className="leftSide">
                    <div className="photoWrapper">
                        <div className="photoContainer">
                            <div className="photoRing1" />
                            <div className="photoRing2" />
                            <div className="photoPlaceholder">
                                <Image src="/hero.jpeg" alt="Yosman Mavarez" width={150} height={150} />
                            </div>
                            <div className="statusIndicator" />
                            <Sparkles className="sparkle1" size={24} />
                            <Sparkles className="sparkle2" size={20} />
                        </div>
                    </div>

                    <div className="badge">
                        <span className="badgeDot" />
                        <span>{t?.hero?.badge || "Available"}</span>
                    </div>

                    <div className="nameContainer">
                        <h1 className="namePrimary">Yosman</h1>
                        <h1 className="nameSecondary">Mavarez</h1>
                    </div>

                    <div className="subtitleContainer">
                        <p>Full Stack Developer & Mobile App Specialist</p>
                        <div className="techTags">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>TypeScript</span>
                        </div>
                    </div>

                    <div className="actionButtons">
                        <a href="#proyectos" className="btnPrimary">
                            <span>{t?.hero?.projects || "Proyectos"} <ArrowRight size={20} /></span>
                        </a>
                        <a href="#contacto" className="btnSecondary">
                            {t?.hero?.contact || "Contacto"}
                        </a>
                    </div>
                </div>

                {/* Right Side - Phone */}
                <div className="rightSide">
                    <div className="phoneFrame">
                        <div className="phoneGlow" />
                        <div className="phoneNotchMobile" />
                        <div className="phoneNotchDesktop" />
                        <div className="screen">
                            <div className="screenReflection" />
                            <div className="statusBar">
                                <span>9:41</span>
                                <div>
                                    <span>📶</span>
                                    <span>🔋</span>
                                </div>
                            </div>
                            <div className="appGrid">
                                <div className="skillsGrid">
                                    {skills.map((skill, index) => (
                                        <div key={skill.name} className="skillItem" style={{ animationDelay: `${index * 100}ms` }}>
                                            <div className={`skillIcon ${skill.color}`}>
                                                <skill.icon size={28} />
                                            </div>
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="homeIndicatorMobile" />
                            <div className="homeIndicatorDesktop" />
                        </div>
                        <div className="deviceButtonsMobile" />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scrollIndicator">
                <span>Scroll</span>
                <div>
                    <div />
                </div>
            </div>
        </section>
    );
};

export default Hero;

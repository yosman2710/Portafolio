'use client'

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import fastfood1 from "../assets/fastfood1.jpeg";
import fastfood2 from "../assets/fastfood2.jpeg";

import "../Styles/projects.css";

const Projects = () => {
    const { t, language } = useLanguage();
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [activeSlides, setActiveSlides] = useState<number[]>([]);
    const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    const projects = [
        {
            title: "Fastfood La Negra",
            description: language === "es"
                ? "Aplicacion Movil para el registro de pedidos, sistema para llevar el control de los pagos y abonos, control de los platillos y precios en las monedas bolivar y dolar."
                : "Mobile application for order registration, payment and collection control system, menu control and prices in bolivars and dollars.",
            tech: ["React Native", "Supabase", "PostgreSQL"],
            type: "fullstack",
            screenshots: [fastfood1, fastfood2]
        },
        {
            title: "Fastfood La Negra 2",
            description: language === "es"
                ? "Aplicacion Movil para el registro de pedidos, sistema para llevar el control de los pagos y abonos, control de los platillos y precios en las monedas bolivar y dolar."
                : "Mobile application for order registration, payment and collection control system, menu control and prices in bolivars and dollars.",
            tech: ["React Native", "Supabase"],
            type: "mobile",
            screenshots: [fastfood1, fastfood2]
        },
        {
            title: "Fastfood La Negra 3",
            description: language === "es"
                ? "Aplicacion Movil para el registro de pedidos, sistema para llevar el control de los pagos y abonos, control de los platillos y precios en las monedas bolivar y dolar."
                : "Mobile application for order registration, payment and collection control system, menu control and prices in bolivars and dollars.",
            tech: ["React Native"],
            type: "frontend",
            screenshots: [fastfood1, fastfood2]
        },
    ];

    // Initialize active slides state
    useEffect(() => {
        setActiveSlides(new Array(projects.length).fill(0));
    }, [projects.length]);

    const handleScroll = (index: number) => {
        const container = scrollRefs.current[index];
        if (container) {
            const slideWidth = container.clientWidth;
            const newActiveSlide = Math.round(container.scrollLeft / slideWidth);
            if (activeSlides[index] !== newActiveSlide) {
                const newActiveSlides = [...activeSlides];
                newActiveSlides[index] = newActiveSlide;
                setActiveSlides(newActiveSlides);
            }
        }
    };

    const scrollToSlide = (projectIndex: number, slideIndex: number) => {
        const container = scrollRefs.current[projectIndex];
        if (container) {
            const slideWidth = container.clientWidth;
            container.scrollTo({
                left: slideIndex * slideWidth,
                behavior: 'smooth'
            });
        }
    };

    const scrollPrev = (projectIndex: number) => {
        const currentSlide = activeSlides[projectIndex];
        if (currentSlide > 0) {
            scrollToSlide(projectIndex, currentSlide - 1);
        }
    };

    const scrollNext = (projectIndex: number, totalSlides: number) => {
        const currentSlide = activeSlides[projectIndex];
        if (currentSlide < totalSlides - 1) {
            scrollToSlide(projectIndex, currentSlide + 1);
        }
    };

    return (
        <section id="proyectos" className="projectsSection">
            {/* Background effects */}
            <div
                className="backgroundBlob1"
                style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
            />
            <div
                className="backgroundBlob2"
                style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
            />
            <div className="gridPattern" />
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

            <div className="container">
                <div className="sectionHeader">
                    <span>{t.projects?.sectionLabel || "Portfolio"}</span>
                    <h2>{t.projects?.title || "Proyectos"}</h2>
                    <div className="divider" />
                </div>

                <div className="projectsGrid">
                    {projects.map((project, index) => (
                        <div key={index} className={`projectCard type${project.type.charAt(0).toUpperCase() + project.type.slice(1)}`}>
                            {/* Device Frame */}
                            <div className="deviceFrame">
                                <div className="notch" />
                                <div className="screen">
                                    {/* Carousel */}
                                    <div
                                        className="screenshotCarousel"
                                        ref={el => { scrollRefs.current[index] = el; }}
                                        onScroll={() => handleScroll(index)}
                                    >
                                        {project.screenshots.map((screenshot, screenshotIndex) => (
                                            <div
                                                key={screenshotIndex}
                                                className={`carouselSlide`}
                                            >
                                                <img
                                                    src={screenshot.src as string}
                                                    alt={`${project.title} screenshot ${screenshotIndex + 1}`}
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Navigation Arrows */}
                                    <button
                                        className="carouselPrev carouselNav"
                                        aria-label="Previous screenshot"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            scrollPrev(index);
                                        }}
                                        style={{ display: activeSlides[index] === 0 ? 'none' : 'flex' }}
                                    />
                                    <button
                                        className="carouselNext carouselNav"
                                        aria-label="Next screenshot"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            scrollNext(index, project.screenshots.length);
                                        }}
                                        style={{ display: activeSlides[index] === project.screenshots.length - 1 ? 'none' : 'flex' }}
                                    />

                                    {/* Dots Indicator */}
                                    <div className="carouselDots">
                                        {project.screenshots.map((_, dotIndex) => (
                                            <button
                                                key={dotIndex}
                                                className={`dot ${activeSlides[index] === dotIndex ? 'activeDot' : ''}`}
                                                aria-label={`Go to slide ${dotIndex + 1}`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    scrollToSlide(index, dotIndex);
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Device Buttons */}
                                <div className="powerButton" />
                                <div className="volumeButtons" />
                            </div>

                            {/* Project Info */}
                            <div className="projectInfo">
                                <div className="projectHeader">
                                    <h3>{project.title}</h3>
                                    <span className="typeBadge">{project.type}</span>
                                </div>
                                <p>{project.description}</p>
                                <div className="techStack">
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

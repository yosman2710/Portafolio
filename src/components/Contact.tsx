'use client'

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import "../Styles/Contact.css";

const Contact = () => {
    const { t } = useLanguage();

    const contactMethods = [
        {
            icon: (
                <svg className="contactIcon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            ),
            title: "Email",
            value: "yosmanprecavil123@gmail.com",
            link: "mailto:yosmanprecavil123@gmail.com"
        },
        {
            icon: (
                <svg className="contactIcon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            title: "LinkedIn",
            value: "yosmanmavarez",
            link: "https://www.linkedin.com/in/yosman-mavarez-b3a496313/"
        },
        {
            icon: (
                <svg className="contactIcon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            title: "GitHub",
            value: "yosman2710",
            link: "https://github.com/yosman2710"
        }
    ];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `${t.contact?.subject || "Portfolio Contact"}: ${formData.name}`;
        const body = `${t.contact?.name}: ${formData.name}\n${t.contact?.email}: ${formData.email}\n\n${t.contact?.message}:\n${formData.message}`;
        window.location.href = `mailto:yosmanprecavil123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contacto" className="contactSection">
            <div className="gradientTop" />
            <div className="backgroundBlob1" />
            <div className="backgroundBlob2" />
            <div className="backgroundPulse" />
            <div className="hexagonPattern" />
            <div className="sparkles" />

            <div className="container">
                <div className="sectionHeader">
                    <span>{t.contact?.sectionLabel || "Conecta"}</span>
                    <h2>{t.contact?.title || "Contacto"}</h2>
                    <div className="divider" />
                </div>

                <div className="contactContent">
                    <div className="cardsGrid">
                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`contactCard cardAnim${index}`}
                            >
                                <div className="iconContainer">
                                    {method.icon}
                                </div>
                                <h3>{method.title}</h3>
                                <p>{method.value}</p>
                            </a>
                        ))}
                    </div>

                    <form className="contactForm" onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <label htmlFor="name">{t.contact?.name || "Nombre"}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="formInput"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="email">{t.contact?.email || "Correo"}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="formInput"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="message">{t.contact?.message || "Mensaje"}</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="formTextarea"
                                rows={5}
                                placeholder="..."
                            />
                        </div>
                        <button type="submit" className="ctaButton submitButton">
                            <span>{t.contact?.sendMessage || "Enviar Mensaje"}</span>
                            <svg className="arrowIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

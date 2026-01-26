'use client'
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" style={{ padding: '4rem 2rem', color: '#fff' }}>
            <h2>{t.about.title}</h2>
            <p>{t.about.description1}</p>
            <p>{t.about.description2}</p>
        </section>
    );
}

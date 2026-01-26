'use client'

import { useLanguage } from "@/contexts/LanguageContext";
import "../Styles/About.css";
import { Code, Layers, Wrench, BookOpen, Database } from "lucide-react";

const About = () => {
    const { t } = useLanguage();

    const skillCategories = [
        {
            icon: Code,
            title: t.about.languages,
            skills: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"]
        },
        {
            icon: Layers,
            title: t.about.frameworks,
            skills: ["React", "React Native", "Node.js", "Express", "Next.js"]
        },
        {
            icon: Database,
            title: t.about.database,
            skills: ["MySQL", "SQLite", "PostgreSQL", "MongoDB"]
        },
        {
            icon: Wrench,
            title: t.about.tools,
            skills: ["Git", "API REST", "Redux"]
        },
        {
            icon: BookOpen,
            title: t.about.libraries,
            skills: ["Pandas", "NumPy"]
        }
    ];

    return (
        <section id="acerca" className="aboutSection">
            <div className="aboutGradientTop" />
            <div className="aboutGradientBottom" />

            <div className="aboutBlob1" />
            <div className="aboutBlob2" />

            <div className="aboutDiagonalPattern" />
            <div className="aboutFloatingDots" />

            <div className="containerAbout">
                {/* Header */}
                <div className="headerAbout">
                    <div className="sectionLabelAbout">{t.about.sectionLabel}</div>
                    <h2>{t.about.title}</h2>
                    <div className="dividerAbout" />
                </div>

                {/* Student Badge & Description */}
                <div className="studentSectionAbout">
                    <div className="studentBadgeAbout">
                        <div className="badgeDotAbout" />
                        <span>{t.about.studentBadge}</span>
                    </div>
                    <p>{t.about.description1}</p>
                </div>

                {/* Skills Grid */}
                <div className="skillsGridAbout">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className={`skillCardWrapperAbout aboutAnim${categoryIndex}`}>
                            <div className="skillCardAbout">
                                <div className="cardGlowAbout" />
                                <div className="cardContentAbout">
                                    <div className="categoryHeaderAbout">
                                        <div className="categoryIconAbout">
                                            <category.icon className="categoryIconSvg" />
                                        </div>
                                        <h3>{category.title}</h3>
                                    </div>
                                    <div className="skillsListAbout">
                                        {category.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="skillTagAbout">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Learning Journey */}
                <div className="aboutLearningSection aboutAnim4">
                    <div className="aboutLearningCard">
                        <h3>{t.about.learningTitle}</h3>
                        <p>{t.about.learningDescription}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

// src/components/About.jsx

import React from 'react';
import './About.css';
import ExperienceTimeline from './ExperienceTimeline'; // <-- 1. Impor komponen timeline

const techStack = ['React', 'Node.js', 'Next.js', 'JavaScript', 'TypeScript', 'Figma', 'Vite', 'MongoDB'];

const About = () => {
    return (
        <section id="about">
            <div className="container about-container">
                <div className="about-content">
                    <h2><span className="section-number">01.</span> About Me</h2>
                    <p>Hello! I'm a passionate full-stack developer and UI/UX designer with a deep love for crafting beautiful, functional, and user-focused digital experiences across web and mobile platforms. My journey into development began with a fascination for how ideas evolve into interactive, impactful products that people enjoy using.</p>
                    <p>Over the years, I’ve honed my skills not only in writing clean, maintainable code but also in designing intuitive interfaces that prioritize user needs. From building responsive websites to developing cross-platform mobile apps, I thrive in dynamic environments that push me to grow, learn, and adapt. Whether I'm architecting a robust backend system or perfecting the smallest UI details, I’m deeply committed to quality, usability, and creativity in every project I take on.</p>
                    <p>My strength lies at the intersection of development and design. I believe the most successful products are created when technical implementation is guided by a deep understanding of the user, and design decisions are informed by what is technically feasible. This dual perspective allows me to bridge the gap between idea and execution, ensuring that the final product is not only robust and scalable but also truly intuitive and enjoyable for the end-user.</p>
                </div>

                {/* Kolom sebelah kanan */}
                <div className="about-right-column">
                    <div className="about-stack">
                        <h3>My Tech Stack</h3>
                        <div className="stack-pills">
                            {techStack.map(tech => <div key={tech} className="pill glass-card">{tech}</div>)}
                        </div>
                    </div>

                    {/* --- 2. Tambahkan Komponen Timeline di sini --- */}
                    <ExperienceTimeline />

                </div>
            </div>
        </section>
    );
};

export default About;
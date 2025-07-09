// src/components/Hero.jsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import avatar from '../assets/avatar.gif'; // Pastikan path benar
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <div className="hero-text">
                    <h1>
                        Hello, I'm <span className="highlight">Anugrah Okta</span> {/* Ganti nama Anda */}
                    </h1>
                    <h2>
                        <TypeAnimation
                            sequence={['Full-Stack Developer', 1500, 'UI/UX Enthusiast', 1500, 'Tech Innovator', 1500]}
                            wrapper="span" speed={50} repeat={Infinity}
                        />
                    </h2>
                    <p>I build immersive and visually compelling web and mobile applications, combining clean, efficient code with thoughtful UI/UX design. With a strong focus on user experience and modern technologies, I create digital products that are not only functional but also delightful to use across platforms.</p>
                    <a href="#projects" className="cta-button glass-card">View My Work</a>
                </div>
                <div className="hero-avatar">
                    <div className="hexagon-container">
                        <img src={avatar} alt="Your Name Avatar" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
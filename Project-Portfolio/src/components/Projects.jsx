// src/components/Projects.jsx
import React, { useState } from 'react';
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import './Projects.css';
import ProjectModal from './ProjectModal'; // <-- Impor Modal

// --- Data Proyek yang Diperbarui ---
const projectsData = [
    {
        id: 1,
        title: 'Web Service Promotion Page',
        description: 'A digital advertisement offering website creation services. The main offer is a website starting from 1 million rupiah with a fast process, making it ready for business use immediately.',
        technologies: ['Canva', 'Marketing'],
        image: project1Img,
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        id: 2,
        title: 'Promotional Video for 1JT Web Service',
        description: 'A promotional video showcasing a website creation service for Rp 1,000,000 with various benefits. The storyboard focuses on three key messages: "1JT for a website", "All-inclusive package", and "90% discount from the normal price".',
        technologies: ['Capcut', 'Figma', 'Video Editing'],
        image: project1Img, // Menggunakan gambar sebagai thumbnail
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        id: 3,
        title: 'Appkey Company Website Service',
        description: 'An advertisement for website creation services from a company called Appkey. Similar to the previous ad, it offers fast, ready-to-use websites starting from 1 million rupiah, including a free domain name and one year of hosting.',
        technologies: ['Canva', 'Figma'],
        image: project2Img,
        liveUrl: '#',
        repoUrl: '#',
    },
];

const Projects = () => {
    // --- State untuk Modal ---
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <section id="projects">
                <div className="container">
                    <h2><span className="section-number">02.</span> Projects</h2>
                    <div className="projects-grid">
                        {projectsData.map((project) => (
                            // --- Membuat Kartu Proyek Dapat Diklik ---
                            <div className="project-card glass-card" key={project.id} onClick={() => openModal(project)}>
                                <div className="project-image">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading='lazy'
                                        decoding='async'
                                    />
                                    <div className="image-overlay">
                                        <h3>{project.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Render Modal Secara Kondisional --- */}
            <ProjectModal project={selectedProject} onClose={closeModal} />
        </>
    );
};

export default Projects;

// src/components/Certificates.jsx

import React from 'react';
import { FiFileText } from 'react-icons/fi'; // Import ikon
import './Certificates.css';

// --- DATA SERTIFIKAT ---
// Ganti dengan data sertifikat Anda.
// Pastikan nama file di "fileUrl" sama persis dengan nama file di folder public/certificates/
const certificatesData = [
    {
        title: 'ADA Mobile Programming',
        issuer: 'Android Development Associate',
        date: 'Februari 2025',
        fileUrl: '/certificates/Mobile_Programming.pdf', // Path ke file di folder public
    },
    {
        title: 'UI/UX Design Masterclass',
        issuer: 'BuildWith Angga',
        date: 'April 2024',
        fileUrl: '/certificates/sertifikat-ui-ux.pdf', // Path ke file di folder public
    },
    {
        title: 'Node.js & Express',
        issuer: 'FreeCodeCamp',
        date: 'Januari 2024',
        fileUrl: '#', // Ganti dengan path file Anda, atau biarkan '#' jika belum ada
    },
    {
        title: 'Dasar-Dasar React',
        issuer: 'Dicoding Indonesia',
        date: 'Juni 2024',
        fileUrl: '/certificates/sertifikat-react-dasar.pdf', // Path ke file di folder public
    },
];

const Certificates = () => {
    return (
        <section id="certificates">
            <div className="container">
                <h2><span className="section-number">04.</span> Certificates</h2>
                <div className="certificates-list">
                    {certificatesData.map((cert, index) => (
                        <a
                            href={cert.fileUrl}
                            target="_blank" // Membuka di tab baru
                            rel="noopener noreferrer"
                            className="certificate-item glass-card"
                            key={index}
                        >
                            <div className="cert-icon">
                                <FiFileText />
                            </div>
                            <div className="cert-details">
                                <h3>{cert.title}</h3>
                                <p className="cert-issuer">{cert.issuer} - {cert.date}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
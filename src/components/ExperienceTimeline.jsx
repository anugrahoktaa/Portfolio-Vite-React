// src/components/ExperienceTimeline.jsx

import React from 'react';
import './ExperienceTimeline.css';

// --- GANTI DENGAN DATA PENGALAMAN ANDA ---
const timelineData = [
    {
        year: '2025',
        title: 'Internship UI/UX Designer',
        company: 'PT. Appkey',
        description: 'Membantu tim dalam membangun desain user interface dan user experience untuk aplikasi web & mobile.'
    },
    {
        year: '2022 - Sekarang',
        title: 'Studi S1 Teknologi Informasi',
        company: 'ITB STIKOM Bali',
        description: 'Ingin lulus dengan bekal berbagai ilmu dalam bidang IT seperti Website & Mobile Development.'
    },
    {
        year: '2019 - 2022',
        title: 'Pendidikan SMA',
        company: 'SMA Negeri 1 Semarapura',
        description: 'Berhasil lulus menjadi NPC pada tahun 2022.'
    }
];

const ExperienceTimeline = () => {
    return (
        <div className="timeline-container">
            {timelineData.map((item, index) => (
                <div className="timeline-item" key={index}>
                    <div className="timeline-node"></div>
                    <div className="timeline-content">
                        <p className="timeline-year">{item.year}</p>
                        <h4 className="timeline-title">{item.title}</h4>
                        <p className="timeline-company">{item.company}</p>
                        {/* Optional: Tambahkan deskripsi jika perlu
            <p className="timeline-description">{item.description}</p> 
            */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperienceTimeline;
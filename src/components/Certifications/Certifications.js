import React from 'react';
import { FaAward, FaCertificate } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            title: 'Introduction to Web Development',
            issuer: 'University of California, Davis',
            platform: 'Coursera',
            icon: <FaCertificate />
        }
    ];

    const achievements = [
        'Completed Bachelor of Science in Software Engineering',
        '1+ Years of Professional MERN Stack Development',
        'Successfully delivered 8+ production-ready projects',
        'Expertise in real-time applications and payment integrations'
    ];

    return (
        <section id="certifications" className="section certifications">
            <div className="container">
                <div className="section-title">
                    <h2>Certifications & Achievements</h2>
                </div>

                <div className="cert-content">
                    <div className="certifications-grid">
                        {certifications.map((cert) => (
                            <div key={cert.id} className="cert-card glass-card">
                                <div className="cert-icon">{cert.icon}</div>
                                <h3>{cert.title}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                                <p className="cert-platform">via {cert.platform}</p>
                            </div>
                        ))}
                    </div>

                    <div className="achievements-section glass-card">
                        <div className="achievements-header">
                            <FaAward className="achievement-icon" />
                            <h3>Key Achievements</h3>
                        </div>
                        <ul className="achievements-list">
                            {achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;

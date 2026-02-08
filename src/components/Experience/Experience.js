import React from 'react';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            company: 'Infini8Ai',
            location: 'Estridge Rawalpindi',
            position: 'MERN Stack Developer',
            duration: 'Jul 2025 - Present',
            current: true,
            description: 'Leading development of cutting-edge AI-powered web applications using the MERN stack.',
            responsibilities: [
                'Developing and maintaining scalable web applications',
                'Implementing AI integration features',
                'Collaborating with cross-functional teams',
                'Code review and mentoring junior developers'
            ]
        },
        {
            id: 2,
            company: 'InventioSoft',
            location: 'Huzaifa Plaza',
            position: 'MERN Stack Developer',
            duration: 'Jun 2024 - Jun 2025',
            current: false,
            description: 'Developed multiple full-stack applications including research platforms, business management systems, and data analytics tools.',
            responsibilities: [
                'Built Researchpal.co with real-time collaboration features',
                'Developed ManageKaro.org business management platform',
                'Implemented payment integrations with Stripe',
                'Created data visualization dashboards',
                'Optimized application performance and SEO'
            ]
        }
    ];

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <div className="section-title">
                    <h2>Work Experience</h2>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-content glass-card">
                                {exp.current && <span className="current-badge">Current</span>}
                                <div className="timeline-header">
                                    <div>
                                        <h3>{exp.position}</h3>
                                        <h4 className="company-name">
                                            <FaBriefcase /> {exp.company}
                                        </h4>
                                        <p className="location">{exp.location}</p>
                                    </div>
                                    <div className="duration">
                                        <FaCalendar /> {exp.duration}
                                    </div>
                                </div>
                                <p className="description">{exp.description}</p>
                                <ul className="responsibilities">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

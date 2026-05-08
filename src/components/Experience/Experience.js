import React from 'react';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            company: 'Infini8Ai',
            location: 'Rawalpindi, Pakistan',
            position: 'MERN Stack Developer',
            duration: 'Jul 2025 - Present',
            current: true,
            description: 'Leading development of cutting-edge AI-powered web applications using the MERN stack with a focus on performance and security.',
            responsibilities: [
                'Implemented React.js (Hooks, Functional Components) with Redux and Context API',
                'Integrated AI APIs (OpenAI ChatGPT, Gemini) and real-time features using WebSockets',
                'Developed and Integrated secure payment systems using Stripe',
                'Optimized performance with Memoization, Code Splitting, and Lazy Loading',
                'Designed scalable MongoDB schemas with Aggregations and Query Optimization',
                'Implemented JWT Authentication, Redis Caching, and Role-based Access Control',
                'Managed deployment and environment using Docker, Vercel, and Firebase'
            ]
        },
        {
            id: 2,
            company: 'InventioSoft',
            location: 'Huzaifa Plaza',
            position: 'MERN Stack Developer',
            duration: 'Jul 2024 - Jul 2025',
            current: false,
            description: 'Contributed to multiple full-stack applications building responsive and scalable MERN stack solutions.',
            responsibilities: [
                'Built responsive UIs using Tailwind CSS, Bootstrap, and Material UI',
                'Developed and integrated RESTful APIs using Node.js and Express.js',
                'Implemented state management using Redux and Context API',
                'Developed and Integrated third-party APIs including Twitter API, Stripe, and MetaMask Wallet',
                'Optimized frontend performance and implemented reusable component architecture',
                'Managed version control using Git/GitHub for collaborative development'
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

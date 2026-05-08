import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'ResearchPal.co',
            category: 'MERN Stack',
            description: 'AI-powered research and document collaboration platform enabling real-time sharing and intelligent analysis.',
            features: [
                'Real-time document sharing using WebSockets',
                'AI text generation, Chatbots, and Translation',
                'Interactive PDF chat and citation management',
                'Developed and Integrated Stripe for subscription billing',
                'SEO optimization (React Helmet) and GA4 integration',
                'Automated error notifications via email',
                'Responsive UI design with Material UI (MUI)'
            ],
            tags: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'WebSocket', 'Stripe', 'AI', 'SEO', 'MUI'],
            link: 'https://researchpal.co'
        },
        {
            id: 2,
            title: 'ManageKaro.org',
            category: 'MERN Stack',
            description: 'Business Management & POS Platform optimized for 25% performance improvement in operational efficiency.',
            features: [
                'Invoicing, billing, and sales tracking',
                'Inventory management system',
                'Financial analytics dashboards',
                'Performance optimized by 25%',
                'Cloud-based scalable architecture',
                'Role-based access control',
                'Responsive UI design with Material UI (MUI)'
            ],
            tags: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'POS', 'Optimization', 'MUI'],
            link: 'https://managekaro.org'
        },
        {
            id: 3,
            title: 'DataLumio.co',
            category: 'MERN Stack',
            description: 'Data analysis and cleaning platform connecting multiple sources including Excel and Google Drive.',
            features: [
                'Connects Excel, Google Drive, and Meta data',
                'Interactive data conversion and cleaning tools',
                'Real-time data processing pipelines',
                'Automated email notifications for error monitoring',
                'SEO optimization and stability management',
                'Secure database integration',
                'Responsive UI design with Material UI (MUI)'
            ],
            tags: ['React', 'Redux', 'Node.js', 'SEO', 'MUI', 'Express', 'MongoDB'],
            link: 'https://datalumio.co'
        },
        {
            id: 4,
            title: 'A47.news',
            category: 'React.js',
            description: 'AI-powered news and video generation platform with automated scripts and talking avatars.',
            features: [
                'AI-based news content and video creation',
                'Automated scripts and image generation',
                'Talking avatar features integration',
                'Real-time news from BBC and CNN',
                'Redux for complex state management',
                'Material UI for responsive design'
            ],
            tags: ['React', 'Redux', 'MUI', 'Tailwind'],
            link: 'https://a47.news'
        },
        {
            id: 5,
            title: 'RoyCat.lol',
            category: 'React.js',
            description: 'Crypto staking platform offering real-time reward and fee calculations with secure transactions.',
            features: [
                'Real-time reward and fee calculations',
                'Secure wallet-friendly user interface',
                'Efficient transaction handling',
                'Responsive crypto dashboard',
                'Daily token value growth tracking'
            ],
            tags: ['React', 'Redux', 'MUI', 'Tailwind', 'Staking'],
            link: 'https://roycat.lol'
        },
        {
            id: 6,
            title: 'Tamatomos',
            category: 'MERN Stack',
            description: 'Referral and reward system with inventory management, leaderboard, and blockchain authentication.',
            features: [
                'Referral and reward mechanics',
                'MetaMask and Twitter authentication',
                'Inventory management and leaderboard',
                'Admin dashboard functionality',
                'Enhanced user engagement tracking'
            ],
            tags: ['React', 'Node.js', 'Express', 'Web3', 'MetaMask', 'Twitter API'],
        },

        {
            id: 8,
            title: 'Rooftop Cricket',
            category: 'MERN Stack',
            description: 'Booking and payment platform with role-based access for users, admins, and super admins.',
            features: [
                'Role-based access (User, Admin, Super Admin)',
                'Developed and Integrated Stripe payment systems',
                'Revenue tracking and booking management',
                'Real-time booking notifications',
                'Responsive venue booking system'
            ],
            tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'RBAC'],
        }
    ];

    const categories = ['all', 'MERN Stack', 'React.js'];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <div className="section-title">
                    <h2>Featured Projects</h2>
                    <p className="section-subtitle">A showcase of my recent work and contributions</p>
                </div>

                <div className="filter-buttons">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category === 'all' ? 'All Projects' : category}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card glass-card">
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <span className="project-category">{project.category}</span>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-features">
                                <h4>Key Features:</h4>
                                <ul>
                                    {project.features.slice(0, 4).map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-tags">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="tag">{tag}</span>
                                ))}
                            </div>

                            <div className="project-footer">
                                <button
                                    className="btn btn-outline btn-sm"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    View Details
                                </button>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <FaExternalLinkAlt /> Visit Site
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Projects;

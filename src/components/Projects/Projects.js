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
            title: 'Researchpal.co',
            category: 'MERN Stack',
            description: 'Comprehensive research platform with real-time collaboration, AI-powered features, and document management.',
            features: [
                'Real-time project sharing via WebSockets',
                'Literature review generator',
                'Stripe payment integration',
                'Interactive PDF querying',
                'Citation management (APA, MLA)',
                'AI text generation & paraphrasing'
            ],
            tags: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'Stripe', 'AI'],
            link: 'https://researchpal.co'
        },
        {
            id: 2,
            title: 'ManageKaro.org',
            category: 'MERN Stack',
            description: 'Complete business management platform for SMEs with invoicing, inventory, and POS features.',
            features: [
                'Invoicing and billing solutions',
                'Inventory and stock management',
                'POS and sales tracking',
                'Financial reporting',
                'Cloud-based architecture',
                'User-friendly dashboard'
            ],
            tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Dashboard'],
            link: 'https://managekaro.org'
        },
        {
            id: 3,
            title: 'DataLumio.co',
            category: 'MERN Stack',
            description: 'Data analytics platform with advanced data cleaning, analysis, and visualization capabilities.',
            features: [
                'Data analysis tools',
                'Data cleaning & transformation',
                'Interactive dashboards',
                'Data conversation features',
                'SEO optimization',
                'Google Analytics integration'
            ],
            tags: ['React', 'Node.js', 'Data Analytics', 'Charts', 'SEO'],
            link: 'https://datalumio.co'
        },
        {
            id: 4,
            title: 'A47.news',
            category: 'React.js',
            description: 'AI-powered news platform with automated video generation and talking avatars.',
            features: [
                'AI script generation',
                'AI image generation',
                'Talking avatar integration',
                'Video generation from news',
                'News API integration (BBC, CNN, Gulf)',
                'Automated content creation'
            ],
            tags: ['React', 'AI', 'Video Generation', 'News API'],
            link: 'https://a47.news'
        },
        {
            id: 5,
            title: 'RoyCat.lol',
            category: 'MERN Stack',
            description: 'Cryptocurrency liquid staking platform with real-time rewards and token management.',
            features: [
                'Token staking functionality',
                'Real-time rewards tracking',
                'Fee transparency',
                'Daily token value growth',
                'User-friendly interface',
                'Secure transactions'
            ],
            tags: ['React', 'Node.js', 'Blockchain', 'Web3', 'Crypto'],
            link: 'https://roycat.lol'
        },
        {
            id: 6,
            title: 'Tamatomos',
            category: 'React.js',
            description: 'Gamified platform with referral system, inventory management, and blockchain integration.',
            features: [
                'Referral system',
                'Hatchery system',
                'Inventory management',
                'Leaderboard',
                'Airdrop and missions',
                'MetaMask integration'
            ],
            tags: ['React', 'Web3', 'MetaMask', 'Gaming', 'Twitter API'],
        },
        {
            id: 7,
            title: 'BC.Game',
            category: 'React.js',
            description: 'Casino gaming application with API integration and responsive UI.',
            features: [
                'Casino game mechanics',
                'API integration',
                'Responsive design',
                'Real-time gameplay',
                'User authentication'
            ],
            tags: ['React', 'Gaming', 'API', 'Responsive'],
        },
        {
            id: 8,
            title: 'Rooftop Cricket',
            category: 'MERN Stack',
            description: 'Booking platform for rooftop cricket venues with payment integration and admin dashboard.',
            features: [
                'Rooftop booking system',
                'Payment processing',
                'User management',
                'Admin dashboard',
                'Revenue tracking',
                'Booking management'
            ],
            tags: ['React', 'Node.js', 'MongoDB', 'Payment', 'Booking'],
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

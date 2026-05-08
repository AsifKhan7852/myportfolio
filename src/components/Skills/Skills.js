import React from 'react';
import {
    FaReact, FaNode, FaCss3Alt, FaBootstrap, FaGithub,
    FaUsers, FaLightbulb, FaComments, FaBolt, FaUserTie,
    FaSearch, FaNetworkWired
} from 'react-icons/fa';
import {
    SiJavascript, SiMongodb, SiExpress, SiRedux, SiMui,
    SiTailwindcss, SiPostman, SiDocker, SiRedis, SiGoogleanalytics,
    SiVercel, SiFirebase
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend & UI',
            skills: [
                { name: 'React.js', icon: <FaReact />, level: 95 },
                { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
                { name: 'Redux', icon: <SiRedux />, level: 85 },
                { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90 },
                { name: 'Bootstrap', icon: <FaBootstrap />, level: 85 },
                { name: 'Material-UI', icon: <SiMui />, level: 85 },
                { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
            ]
        },
        {
            title: 'Backend & Database',
            skills: [
                { name: 'Node.js', icon: <FaNode />, level: 90 },
                { name: 'Express', icon: <SiExpress />, level: 90 },
                { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
                { name: 'REST API', icon: <FaBolt />, level: 95 },
                { name: 'WebSockets', icon: <FaNetworkWired />, level: 85 },
                { name: 'Redis', icon: <SiRedis />, level: 80 },
                { name: 'Docker', icon: <SiDocker />, level: 75 },
            ]
        },
        {
            title: 'Tools & Others',
            skills: [
                { name: 'Vercel', icon: <SiVercel />, level: 90 },
                { name: 'Firebase', icon: <SiFirebase />, level: 85 },
                { name: 'SEO (Helmet)', icon: <FaSearch />, level: 85 },
                { name: 'Google Analytics', icon: <SiGoogleanalytics />, level: 80 },
                { name: 'GitHub', icon: <FaGithub />, level: 90 },
                { name: 'Postman', icon: <SiPostman />, level: 90 },
            ]
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <div className="section-title">
                    <h2>Skills & Expertise</h2>
                    <p className="section-subtitle">Technologies and tools I work with</p>
                </div>

                <div className="skills-container">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="skill-category glass-card">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIdx) => (
                                    <div key={skillIdx} className="skill-item">
                                        <div className="skill-header">
                                            <div className="skill-name">
                                                {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                                                <span>{skill.name}</span>
                                            </div>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

import React from 'react';
import {
    FaReact, FaNode, FaCss3Alt, FaBootstrap, FaGithub,
    FaUsers, FaLightbulb, FaComments
} from 'react-icons/fa';
import {
    SiJavascript, SiMongodb, SiExpress, SiRedux, SiMui,
    SiTailwindcss, SiPostman
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages & Frameworks',
            skills: [
                { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
                { name: 'React.js', icon: <FaReact />, level: 95 },
                { name: 'Node.js', icon: <FaNode />, level: 90 },
                { name: 'Express', icon: <SiExpress />, level: 85 },
                { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
                { name: 'Redux', icon: <SiRedux />, level: 80 },
                { name: 'CSS', icon: <FaCss3Alt />, level: 90 },
                { name: 'Bootstrap', icon: <FaBootstrap />, level: 85 },
                { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
                { name: 'Material-UI', icon: <SiMui />, level: 80 },
            ]
        },
        {
            title: 'Tools & Technologies',
            skills: [
                { name: 'GitHub', icon: <FaGithub />, level: 90 },
                { name: 'VS Code', icon: null, level: 95 },
                { name: 'Postman', icon: <SiPostman />, level: 85 },
                { name: 'Thunder Client', icon: null, level: 80 },
            ]
        },
        {
            title: 'Soft Skills',
            skills: [
                { name: 'Teamwork', icon: <FaUsers />, level: 95 },
                { name: 'Creativity', icon: <FaLightbulb />, level: 90 },
                { name: 'Leadership', icon: null, level: 85 },
                { name: 'Communication', icon: <FaComments />, level: 90 },
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

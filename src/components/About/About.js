import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            I'm a passionate <span className="gradient-text">MERN Stack Developer</span> with over 1 years of experience
                            building modern, scalable web applications. I specialize in creating exceptional digital experiences
                            that combine beautiful design with powerful functionality.
                        </p>

                        <p className="about-description">
                            Currently working at <strong>Infini8Ai</strong> in Rawalpindi, I've had the privilege of working on
                            diverse projects ranging from research platforms to business management systems. My journey in web
                            development has equipped me with a deep understanding of both frontend and backend technologies,
                            allowing me to deliver complete, production-ready solutions.
                        </p>

                        <p className="about-description">
                            I'm driven by the challenge of solving complex problems and the satisfaction of seeing ideas come to
                            life through code. Whether it's implementing real-time features with WebSockets, integrating payment
                            systems, or optimizing application performance, I approach every project with dedication and attention
                            to detail.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item glass-card">
                                <FaCode className="highlight-icon" />
                                <h3>Clean Code</h3>
                                <p>Writing maintainable, scalable, and well-documented code</p>
                            </div>
                            <div className="highlight-item glass-card">
                                <FaUsers className="highlight-icon" />
                                <h3>Team Player</h3>
                                <p>Excellent collaboration and communication skills</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-info">
                        <div className="info-card glass-card">
                            <h3>Education</h3>
                            <div className="education-item">
                                <FaGraduationCap className="edu-icon" />
                                <div>
                                    <h4>Bachelor of Science in Software Engineering</h4>
                                    <p className="institution">National University of Modern Languages (NUML)</p>
                                    <p className="duration">2021 - 2025</p>
                                    <p className="location"><FaMapMarkerAlt /> Islamabad</p>
                                </div>
                            </div>
                            <div className="education-item">
                                <FaGraduationCap className="edu-icon" />
                                <div>
                                    <h4>FSc - Pre-Engineering</h4>
                                    <p className="institution">BISE Sargodha</p>
                                </div>
                            </div>
                            <div className="education-item">
                                <FaGraduationCap className="edu-icon" />
                                <div>
                                    <h4>Matric - Science</h4>
                                    <p className="institution">BISE Sargodha</p>
                                </div>
                            </div>
                        </div>

                        <div className="info-card glass-card">
                            <h3>Quick Facts</h3>
                            <ul className="facts-list">
                                <li><strong>Location:</strong> Rawalpindi, Pakistan</li>
                                <li><strong>Languages:</strong> English, Urdu</li>
                                <li><strong>Focus:</strong> Full-Stack Development</li>
                                <li><strong>Availability:</strong> Open to opportunities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

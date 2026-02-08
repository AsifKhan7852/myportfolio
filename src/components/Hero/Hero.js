import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';
import Resume from '../../assests/cv/Asifkhancv2.pdf';
import './Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [visibleCount, setVisibleCount] = useState(0);

    const fullName = "Muhammad Asif Khan";
    const stats = [
        { value: "2+", label: "Years Experience" },
        { value: "8+", label: "Projects Completed" },
        { value: "100%", label: "Client Satisfaction" }
    ];

    // Typewriter effect for Name
    useEffect(() => {
        const handleType = () => {
            const i = loopNum; // Infinite loop, so we just use current state
            const fullText = fullName;

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 80 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    // Sequential Stats Animation
    useEffect(() => {
        let timer;
        if (visibleCount < 3) {
            timer = setTimeout(() => {
                setVisibleCount(prev => prev + 1);
            }, 500);
        } else {
            timer = setTimeout(() => {
                setVisibleCount(0);
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [visibleCount]);

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-text fade-in-up">
                        <p className="hero-greeting">Hi, I'm</p>
                        <h1 className="hero-name">
                            <span className="gradient-text">{text}</span>
                            <span className="cursor">|</span>
                        </h1>
                        <h2 className="hero-title">
                            <span className="gradient-text">MERN Stack Developer</span>
                        </h2>
                        <p className="hero-description">
                            Crafting exceptional web experiences with React.js, Node.js, Express, and MongoDB.
                            Passionate about building scalable, user-friendly applications that make a difference.
                        </p>

                        <div className="hero-stats-container">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`stat-item ${index < visibleCount ? 'visible' : ''}`}
                                >
                                    <h3 className="gradient-text">{stat.value}</h3>
                                    <p>{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="hero-buttons">
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="btn btn-primary"
                            >
                                Get In Touch
                            </Link>
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                className="btn btn-outline"
                            >
                                View Projects
                            </Link>
                            <a
                                href={Resume}
                                download="Muhammad_Asif_Khan_Resume.pdf"
                                className="btn btn-outline"
                            >
                                <FaDownload style={{ marginRight: '0.5rem' }} />
                                Download Resume
                            </a>
                        </div>

                        <div className="hero-social">
                            <a
                                href="https://github.com/AsifKhan7852"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/asif-khan-4a256b266"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadasifkhan7852@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </a>
                            <a
                                href="tel:+923015317852"
                                className="social-icon"
                                aria-label="Phone"
                            >
                                <FaPhone />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>Scroll Down</p>
            </div>
        </section>
    );
};

export default Hero;

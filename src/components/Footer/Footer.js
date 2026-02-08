import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {

    const quickLinks = [
        { to: 'home', label: 'Home' },
        { to: 'about', label: 'About' },
        { to: 'experience', label: 'Experience' },
        { to: 'projects', label: 'Projects' },
        { to: 'skills', label: 'Skills' },
        { to: 'contact', label: 'Contact' },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="gradient-text">Asif Khan</h3>
                        <p>MERN Stack Developer passionate about creating exceptional web experiences.</p>
                        <div className="footer-social">
                            <a
                                href="https://github.com/AsifKhan7852"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/asif-khan-4a256b266"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadasifkhan7852@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <ul className="footer-contact">
                            <li>Rawalpindi, Pakistan</li>
                            <li>
                                <a href="mailto:muhammadasifkhan7852@gmail.com">
                                    muhammadasifkhan7852@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+923015317852">+92-301-5317852</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        Made with <FaHeart className="heart-icon" /> by Muhammad Asif Khan © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

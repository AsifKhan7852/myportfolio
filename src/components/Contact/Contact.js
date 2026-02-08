import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'muhammadasifkhan7852@gmail.com',
            link: 'https://mail.google.com/mail/?view=cm&fs=1&to=muhammadasifkhan7852@gmail.com'
        },
        {
            icon: <FaPhone />,
            label: 'Phone',
            value: '+92-301-5317852',
            link: 'tel:+923015317852'
        },
        {
            icon: <FaMapMarkerAlt />,
            label: 'Location',
            value: 'Rawalpindi, Pakistan',
            link: null
        }
    ];

    const socialLinks = [
        {
            icon: <FaGithub />,
            label: 'GitHub',
            link: 'https://github.com/AsifKhan7852'
        },
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/asif-khan-4a256b266'
        }
    ];

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section-title">
                    <h2>Get In Touch</h2>
                    <p className="section-subtitle">Let's work together on your next project</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info-section">
                        <div className="contact-intro glass-card">
                            <h3>Let's Connect!</h3>
                            <p>
                                I'm always open to discussing new projects, creative ideas, or opportunities
                                to be part of your vision. Feel free to reach out!
                            </p>
                        </div>

                        <div className="contact-details">
                            {contactInfo.map((info, idx) => (
                                <div key={idx} className="contact-item glass-card">
                                    <div className="contact-icon">{info.icon}</div>
                                    <div className="contact-text">
                                        <h4>{info.label}</h4>
                                        {info.link ? (
                                            <a href={info.link}>{info.value}</a>
                                        ) : (
                                            <p>{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="contact-form-section">
                        <form onSubmit={handleSubmit} className="contact-form glass-card">
                            <h3>Send a Message</h3>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">
                                <FaPaperPlane /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

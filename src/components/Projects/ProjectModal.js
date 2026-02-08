import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <FaTimes />
                </button>

                <div className="modal-header">
                    <h2>{project.title}</h2>
                    <span className="modal-category">{project.category}</span>
                </div>

                <p className="modal-description">{project.description}</p>

                <div className="modal-features">
                    <h3>Key Features</h3>
                    <ul>
                        {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="modal-tags">
                    <h3>Technologies Used</h3>
                    <div className="tags-container">
                        {project.tags.map((tag, idx) => (
                            <span key={idx} className="modal-tag">{tag}</span>
                        ))}
                    </div>
                </div>

                {project.link && (
                    <div className="modal-footer">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Visit Live Site
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;

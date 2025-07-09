import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} className="modal-image" />
        <p>{project.description}</p>
        <div className="technologies">
          <strong>Technologies:</strong> {project.technologies.join(', ')}
        </div>
        <div className="modal-links">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>}
          {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

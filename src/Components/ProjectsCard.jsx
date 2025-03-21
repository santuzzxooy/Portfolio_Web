import { useContext, useState } from "react";
import { RefsContext } from "../utils/RefsContext";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import projects from "../data/projects.js";
import "./Styles.css";

const ProjectsCard = () => {
  const { ProjectsRef } = useContext(RefsContext);

  // Estado para manejar el modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Función para abrir el modal
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="projects-container" ref={ProjectsRef}>
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <FaCode className="project-icon" />
              <h2>{project.title}</h2>
            </div>
            {/* Al hacer clic en la imagen, se abre el modal */}
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onClick={() => openModal(project.image)}
            />
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> Repo
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de imagen */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Project" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsCard;
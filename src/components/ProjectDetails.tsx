import type { ReactNode } from "react";
import { useState } from "react";
import type { ProjectData } from "../constants";
import ShowcaseModal from "./ShowcaseModal";

interface ExternalLinkProps {
  href?: string;
  children: ReactNode;
}

const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="project-link">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
};

interface ProjectDetailsProps {
  project: ProjectData;
  closeModal: () => void;
}

const ProjectDetails = ({ project, closeModal }: ProjectDetailsProps) => {
  const images = project.images?.length ? project.images : [project.image];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <ShowcaseModal closeModal={closeModal} label={`${project.title} project details`}>
      <div className="project-modal-grid">
        <div className="project-gallery">
          <div className="project-gallery-main">
            <img src={images[activeImage]} alt={`${project.title} view ${activeImage + 1}`} />
            <span>
              {String(activeImage + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          </div>
          {images.length > 1 && (
            <div className="project-thumbnails" aria-label="Project images">
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  className={index === activeImage ? "is-active" : ""}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show image ${index + 1}`}
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="project-modal-copy">
          <span className="showcase-kicker">
            {project.date ? `${project.date} · Project` : "Selected project"}
          </span>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.description}</p>

          {project.subDescription?.length > 0 && (
            <div className="project-notes">
              <span className="showcase-label">What I built</span>
              <ul>
                {project.subDescription.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="project-stack">
            <span className="showcase-label">Stack used</span>
            <div>
              {project.tags.map((tag) => (
                <span key={tag.name}>
                  {tag.path && <img src={tag.path} alt="" />}
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {(project.repository || project.liveDemo || project.href) && (
            <div className="project-actions">
              <ExternalLink href={project.liveDemo || project.href}>Live demo</ExternalLink>
              <ExternalLink href={project.repository}>GitHub repository</ExternalLink>
            </div>
          )}
        </div>
      </div>
    </ShowcaseModal>
  );
};

export default ProjectDetails;

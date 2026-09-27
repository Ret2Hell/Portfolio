import type { ReactNode } from "react";
import { useState } from "react";
import type { ProjectData } from "../constants";
import ShowcaseModal from "./ShowcaseModal";
import { responsiveImage } from "../utils/responsiveImage";

interface ExternalLinkProps {
  href?: string;
  children: ReactNode;
}

const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="project-link">
      {children}
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="M14 5h5v5M19 5l-8 8M19 14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
      </svg>
    </a>
  );
};

interface ProjectDetailsProps {
  project: ProjectData;
  closeModal: () => void;
}

const ProjectDetails = ({ project, closeModal }: ProjectDetailsProps) => {
  const images = project.images?.length ? project.images : [project.image];
  const media = [
    ...(project.video ? [{ type: "video" as const, src: project.video }] : []),
    ...images.map((src) => ({ type: "image" as const, src })),
  ];
  const [activeMedia, setActiveMedia] = useState(0);
  const currentMedia = media[activeMedia];

  return (
    <ShowcaseModal
      closeModal={closeModal}
      label={`${project.title} project details`}
      className="project-dialog"
    >
      <div className="project-modal-grid">
        <div className="project-gallery">
          <div className="project-gallery-main">
            {currentMedia.type === "video" ? (
              <video src={currentMedia.src} controls playsInline preload="metadata" />
            ) : (
              <img
                src={currentMedia.src}
                {...responsiveImage(currentMedia.src)}
                sizes="(min-width: 1024px) 60vw, 94vw"
                alt={`${project.title} view ${activeMedia + 1}`}
                decoding="async"
              />
            )}
            {media.length > 1 && (
              <>
                <button
                  className="project-gallery-nav is-previous"
                  onClick={() =>
                    setActiveMedia((current) => (current - 1 + media.length) % media.length)
                  }
                  aria-label="Show previous media"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  className="project-gallery-nav is-next"
                  onClick={() => setActiveMedia((current) => (current + 1) % media.length)}
                  aria-label="Show next media"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </>
            )}
            <span>
              {String(activeMedia + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}
            </span>
          </div>
          {media.length > 1 && (
            <div className="project-thumbnails" aria-label="Project media">
              {media.map((item, index) => (
                <button
                  key={`${item.src}-${index}`}
                  className={index === activeMedia ? "is-active" : ""}
                  onClick={() => setActiveMedia(index)}
                  aria-label={`Show ${item.type} ${index + 1}`}
                >
                  {item.type === "video" ? (
                    <video src={item.src} muted preload="metadata" />
                  ) : (
                    <img
                      src={item.src}
                      {...responsiveImage(item.src)}
                      sizes="96px"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="project-modal-copy">
          <h3>{project.title}</h3>
          <p className="project-summary">{project.description}</p>

          {project.subDescription?.length > 0 && (
            <div className="project-notes">
              <ul>
                {project.subDescription.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="project-stack">
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
              <ExternalLink href={project.liveDemo || project.href}>Visit website</ExternalLink>
              <ExternalLink href={project.repository}>View source</ExternalLink>
            </div>
          )}
        </div>
      </div>
    </ShowcaseModal>
  );
};

export default ProjectDetails;

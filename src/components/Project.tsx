import type { ProjectData } from "../constants";

interface ProjectProps {
  project: ProjectData;
  onOpen: () => void;
}

const ExpandIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M15 3h6v6M21 3l-7 7M9 21H3v-6M3 21l7-7" />
  </svg>
);

const ExternalIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M14 5h5v5M19 5l-8 8M19 14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
  </svg>
);

const Project = ({ project, onOpen }: ProjectProps) => {
  const { title, description, image, tags } = project;
  const website = project.liveDemo || project.href;
  const showRepository = project.cardLink === "repository" && project.repository;
  const externalLink = showRepository ? project.repository : website || project.repository;
  const externalLabel = showRepository || !website ? "View source" : "Visit website";
  const visibleTags = tags.slice(0, 6);
  const remainingTags = tags.length - visibleTags.length;

  return (
    <article className="project-card">
      <button className="project-card-open" onClick={onOpen} aria-label={`View ${title} details`}>
        <div className="project-cover">
          <img src={image} alt={`${title} preview`} loading="lazy" />
        </div>
      </button>

      <div className="project-card-copy">
        <button className="project-card-title" onClick={onOpen}>
          <h3>{title}</h3>
        </button>
        <p>{description}</p>

        <div className="project-tags" aria-label="Technology stack">
          {visibleTags.map((tag) => (
            <span key={tag.name}>
              {tag.path && <img src={tag.path} alt="" />}
              {tag.name}
            </span>
          ))}
          {remainingTags > 0 && <span className="project-tags-more">+{remainingTags}</span>}
        </div>

        <div className="project-card-actions">
          <button className="project-details-action" onClick={onOpen}>
            View details
            <ExpandIcon />
          </button>
          {externalLink && (
            <a href={externalLink} target="_blank" rel="noreferrer" className="project-website">
              {externalLabel}
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;

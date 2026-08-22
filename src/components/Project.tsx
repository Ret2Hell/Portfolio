import type { ProjectData } from "../constants";

interface ProjectProps {
  project: ProjectData;
  onOpen: () => void;
}

const Project = ({ project, onOpen }: ProjectProps) => {
  const { title, date, description, image, tags } = project;

  return (
    <button className="project-card" onClick={onOpen}>
      <div className="project-cover">
        <img src={image} alt={`${title} preview`} loading="lazy" />
        <span className="project-open">Open case study ↗</span>
      </div>
      <div className="project-card-copy">
        <div className="project-card-title">
          <h3>{title}</h3>
          <span aria-hidden="true">↗</span>
        </div>
        {date && <small className="project-date">{date}</small>}
        <p>{description}</p>
        <div className="project-tags" aria-label="Technology stack">
          {tags.slice(0, 4).map((tag) => (
            <span key={tag.name}>{tag.name}</span>
          ))}
        </div>
      </div>
    </button>
  );
};

export default Project;

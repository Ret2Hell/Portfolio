import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Certificate from "../components/Certificate";
import Project from "../components/Project";
import ProjectDetails from "../components/ProjectDetails";
import { myCertificates, myProjects } from "../constants";
import type { ProjectData } from "../constants";

const tabs = [
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  return (
    <section id="work" className="work-showcase c-space section-spacing">
      <div className="showcase-heading">
        <h2 className="text-heading">My Work</h2>
        <p className="subtext">
          A selection of projects I&apos;ve built and certifications I&apos;ve earned.
        </p>
      </div>

      <div className="showcase-tabs" role="tablist" aria-label="Portfolio content">
        {tabs.map((tab) => {
          const count = tab.id === "certificates" ? myCertificates.length : myProjects.length;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`${tab.id}-panel`}
              className={activeTab === tab.id ? "is-active" : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.label}</span>
              <small>{String(count).padStart(2, "0")}</small>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          id={`${activeTab}-panel`}
          role="tabpanel"
          className={activeTab === "projects" ? "project-grid" : "certificate-grid"}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "certificates" &&
            myCertificates.map((certificate) => (
              <Certificate key={certificate.id} certificate={certificate} />
            ))}
          {activeTab === "certificates" && myCertificates.length === 0 && (
            <div className="showcase-empty">
              <span aria-hidden="true">◇</span>
              <h3>Certificates coming soon</h3>
              <p>Credentials are being prepared for this archive.</p>
            </div>
          )}
          {activeTab === "projects" &&
            myProjects.map((project) => (
              <Project
                key={project.id}
                project={project}
                onOpen={() => setActiveProject(project)}
              />
            ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {activeProject && (
          <ProjectDetails project={activeProject} closeModal={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

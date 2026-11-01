export default function ProjectCard({ project, index }) {
  return (
    <article className="project">
      <a className="project-preview" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.name} live website (opens in a new tab)`}>
        <div className="preview-topline"><span>SELECTED PROJECT / {String(index + 1).padStart(2, '0')}</span><span>DESIGN & DEVELOPMENT</span></div>
        <div className="browser-frame">
          <div className="browser-bar" aria-hidden="true"><span className="browser-dots">● ● ●</span><span>{new URL(project.url).hostname}</span><span>↗</span></div>
          <img src={project.image} srcSet={`${project.smallImage} 720w, ${project.image} 1440w`} sizes="(max-width: 600px) 90vw, 82vw" width="1440" height="900" loading="lazy" decoding="async" alt={project.imageAlt} />
        </div>
        <span className="preview-caption">{project.caption}<span aria-hidden="true">↗</span></span>
      </a>
      <div className="project-info">
        <div><p className="eyebrow project-type">{project.type}</p><h3>{project.name}</h3></div>
        <div className="project-detail"><p>{project.description}</p>{project.disclaimer && <p className="project-disclaimer">{project.disclaimer}</p>}<ul className="tags" aria-label="Project disciplines">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><div className="project-links">{project.caseStudy && <a className="text-link" href={project.caseStudy}>View Project <span aria-hidden="true">↗</span></a>}<a className="text-link" href={project.url} target="_blank" rel="noreferrer">{project.liveLabel} <span aria-hidden="true">↗</span></a><a className="text-link subtle" href={project.source} target="_blank" rel="noreferrer">Source Code <span aria-hidden="true">↗</span></a></div></div>
      </div>
    </article>
  );
}

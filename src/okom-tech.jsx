import React from 'react';
import { createRoot } from 'react-dom/client';
import { projects } from './projects';
import './styles.css';
import './okom-tech.css';

const project = projects.find((item) => item.id === 'okom-tech');
const examples = [
  ['01', 'Assembly fixture plate', 'Tooling / fixture', 'CNC milling & drilling'],
  ['02', 'Stepped metal insert', 'Injection-mould component', 'Five-axis machining'],
  ['03', 'Custom machine anchor', 'Machine component', 'CNC milling & drilling'],
];

function Label({ number, children }) {
  return <p className="section-label"><span>{number}</span>{children}</p>;
}

function CaseStudy() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header wrap case-header">
      <a className="wordmark" href="/" aria-label="Maxim home">maxim<span>.</span></a>
      <span className="header-role">Independent<br />Web Developer</span>
      <nav aria-label="Case study navigation"><a href="/#work">All Work</a><a href="#overview">Overview</a><a href="#technology">Technology</a><a className="nav-contact" href="/#contact">Contact <span aria-hidden="true">↗</span></a></nav>
    </header>
    <main id="main">
      <section className="case-hero wrap" aria-labelledby="case-title">
        <div className="case-hero-top"><span>SELECTED WORK / 02</span><span>CZECH REPUBLIC / INDUSTRIAL B2B</span></div>
        <h1 id="case-title">OKOM-TECH<span className="accent">.</span></h1>
        <div className="case-hero-bottom"><p>Independent website redesign concept<br />Precision engineering / CNC manufacturing</p><a className="button" href={project.url} target="_blank" rel="noreferrer">View Live Website <span aria-hidden="true">↗</span></a></div>
        <div className="case-hero-visual"><img src="/images/okom-tech.webp" srcSet="/images/okom-tech-small.webp 720w, /images/okom-tech.webp 1440w" sizes="(max-width: 700px) 100vw, 90vw" width="1440" height="900" alt={project.imageAlt} fetchPriority="high" decoding="async" /></div>
        <p className="case-disclaimer">Independent portfolio concept. This redesign was not commissioned or approved by OKOM-TECH and is not the company’s official website.</p>
      </section>

      <section className="section wrap case-section" id="overview" aria-labelledby="overview-title"><Label number="01">PROJECT OVERVIEW</Label><div className="case-two-col"><h2 id="overview-title">A clearer digital presentation for precision engineering.</h2><div><p className="case-lead">This project explores how a precision engineering company can communicate its capabilities through a clear, modern digital experience.</p><p>The concept combines industrial-inspired visual design, interactive machinery presentations, conceptual manufacturing examples, and a streamlined enquiry interface.</p><dl className="case-facts"><div><dt>Category</dt><dd>Industrial B2B / Website Redesign Concept</dd></div><div><dt>Industry</dt><dd>Precision Engineering / CNC Manufacturing</dd></div><div><dt>Location</dt><dd>Czech Republic</dd></div><div><dt>Project type</dt><dd>Independent Portfolio Concept</dd></div></dl></div></div></section>

      <section className="section wrap case-section" aria-labelledby="challenge-title"><Label number="02">THE CHALLENGE</Label><div className="case-two-col"><h2 id="challenge-title">Make technical capabilities easy to explore.</h2><div><p className="case-lead">Industrial websites need to help a B2B visitor understand services, equipment, and the next step without losing technical context.</p><p>The design problem was to give detailed information a clear hierarchy, then make it usable across desktop and mobile screens. This is a design exploration, not a claim about the company’s business results.</p></div></div></section>

      <section className="section wrap case-section" aria-labelledby="direction-title"><Label number="03">DESIGN DIRECTION</Label><div className="case-two-col"><h2 id="direction-title">Industrial detail, structured for the web.</h2><div><p className="case-lead">A cool blue and steel palette, precise typography, ruled grids, and technical illustrations give the concept its industrial character.</p><p>Visual diagrams support the content while section labels, contrast, and spacing keep the experience readable.</p></div></div><figure className="case-figure"><img src="/images/okom-tech.webp" srcSet="/images/okom-tech-small.webp 720w, /images/okom-tech.webp 1440w" sizes="(max-width: 700px) 100vw, 90vw" width="1440" height="900" loading="lazy" decoding="async" alt="Desktop view of the OKOM-TECH redesign concept, showing industrial typography and a component illustration" /><figcaption>01 / Homepage visual system</figcaption></figure></section>

      <section className="section wrap case-section" aria-labelledby="machinery-title"><Label number="04">INTERACTIVE MACHINERY</Label><div className="case-two-col"><h2 id="machinery-title">Explore equipment in context.</h2><div><p className="case-lead">The live concept lets visitors switch between machines and inspect a schematic working envelope with key dimensions.</p><p>The SVG illustrations are explanatory diagrams, not machine drawings. Dimensions and suitability still depend on the specific part and setup.</p><a className="text-link" href={`${project.url}#machinery`} target="_blank" rel="noreferrer">Explore the live interaction <span aria-hidden="true">↗</span></a></div></div><figure className="case-figure"><img src="/images/okom-tech-machinery.webp" width="1440" height="1131" loading="lazy" decoding="async" alt="OKOM-TECH concept machinery section with machine selection tabs, an SVG working envelope, and axis dimensions" /><figcaption>02 / Interactive machinery presentation</figcaption></figure></section>

      <section className="section wrap case-section" aria-labelledby="examples-title"><Label number="05">MANUFACTURING EXAMPLES</Label><div className="case-two-col"><h2 id="examples-title">Three conceptual part examples.</h2><p className="case-lead">These examples illustrate how different manufacturing needs could be explained. They are conceptual illustrations, not documented OKOM-TECH products or commissioned work.</p></div><div className="example-grid">{examples.map(([number,name,type,process])=><article key={number}><span>{number} / CONCEPT EXAMPLE</span><h3>{name}</h3><p>{type}</p><p>{process}</p></article>)}</div></section>

      <section className="section wrap case-section" aria-labelledby="responsive-title"><Label number="06">RESPONSIVE EXPERIENCE</Label><div className="case-two-col"><h2 id="responsive-title">Designed for smaller screens, too.</h2><p className="case-lead">The same content hierarchy carries through on mobile, with stacked layouts, readable text, and touch-friendly navigation.</p></div><figure className="case-figure case-mobile-figure"><img src="/images/okom-tech-mobile.webp" width="375" height="812" loading="lazy" decoding="async" alt="Mobile screenshot of the OKOM-TECH concept homepage at 375 pixels wide" /><figcaption>03 / Mobile homepage</figcaption></figure></section>

      <section className="section wrap case-section" id="technology" aria-labelledby="technology-title"><Label number="07">TECHNOLOGY</Label><div className="case-two-col"><h2 id="technology-title">Built with a focused frontend stack.</h2><div><ul className="tags case-tech">{project.tags.map(tag=><li key={tag}>{tag}</li>)}</ul><p>React components, Vite tooling, CSS layouts, and SVG animations support the interface without a heavy UI framework.</p></div></div></section>

      <section className="contact case-end" aria-labelledby="live-title"><div className="wrap"><Label number="08">LIVE PROJECT</Label><div className="contact-heading"><h2 id="live-title">Explore the concept.</h2><a className="contact-arrow" href={project.url} target="_blank" rel="noreferrer" aria-label="Open OKOM-TECH live concept"><span aria-hidden="true">↗</span></a></div><div className="case-end-links"><a className="button" href={project.url} target="_blank" rel="noreferrer">View Live Website <span aria-hidden="true">↗</span></a><a className="text-link" href={project.source} target="_blank" rel="noreferrer">View Source Code <span aria-hidden="true">↗</span></a><a className="text-link" href="/#work">Back to Selected Work <span aria-hidden="true">↗</span></a></div><p className="case-disclaimer">Independent portfolio concept. Not commissioned, approved, or endorsed by OKOM-TECH. Not the official company website.</p></div></section>
    </main>
    <footer className="footer wrap"><a className="wordmark" href="/" aria-label="Maxim home">maxim<span>.</span></a><p>© {new Date().getFullYear()} Maxim. Independent web development.</p><a className="back-top" href="#">BACK TO TOP ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><CaseStudy /></React.StrictMode>);

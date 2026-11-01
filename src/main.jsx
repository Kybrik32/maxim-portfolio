import React from 'react';
import { createRoot } from 'react-dom/client';
import ProjectCard from './ProjectCard';
import { projects } from './projects';
import './styles.css';

const services = [
  ['Landing Pages', 'A focused introduction to your offer, with a clear path to getting in touch.'],
  ['Business Websites', 'A clear place to explain your business, present your services, and help customers contact you.'],
  ['Responsive Frontend Development', 'Designs built into accessible, responsive interfaces for desktop and mobile.'],
  ['UI Improvements', 'Targeted changes to layout, typography, and usability on your existing website.'],
];
const steps = [
  ['Discuss', 'We talk through your business, your audience, and what your website needs to do.'],
  ['Plan', 'We agree on the structure, visual direction, and scope before development begins.'],
  ['Build', 'I design and develop your website, sharing progress and incorporating your feedback.'],
  ['Launch', 'We check the details across devices and prepare your website to go live.'],
];
function SectionLabel({ number, children }) { return <p className="section-label"><span>{number}</span>{children}</p>; }

function App() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header wrap">
      <a className="wordmark" href="#" aria-label="Maxim home">maxim<span>.</span></a>
      <span className="header-role">Independent<br />Web Developer</span>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a className="nav-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a></nav>
    </header>
    <main id="main">
      <section className="hero wrap" aria-labelledby="hero-title">
        <p className="eyebrow hero-kicker"><span className="accent-rule" /> INDEPENDENT WEB DESIGN & DEVELOPMENT</p>
        <h1 id="hero-title">Built to stand out.<br /><span>Designed to work.</span></h1>
        <div className="hero-bottom"><p className="hero-note">WEB DESIGN / FRONTEND<br />FOR GROWING BUSINESSES</p><div className="hero-description"><p>I design and build responsive websites that help businesses present their services clearly and make a strong first impression.</p><div className="hero-actions"><a className="button" href="#work">Explore My Work <span aria-hidden="true">↗</span></a><a className="text-link" href="#contact">Get in Touch <span aria-hidden="true">↗</span></a></div></div></div>
        <div className="hero-foot"><span>WEB DESIGN & FRONTEND DEVELOPMENT</span><a href="#work">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
      </section>
      <section id="work" className="section wrap" aria-labelledby="work-title"><div className="section-heading"><div><SectionLabel number="01">SELECTED WORK</SectionLabel><h2 id="work-title">Selected work.</h2></div><p>Independent concepts that show my approach to design and frontend development.</p></div>{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</section>
      <section id="services" className="section services wrap" aria-labelledby="services-title"><div className="services-intro"><SectionLabel number="02">SERVICES</SectionLabel><h2 id="services-title">What I build.</h2><p>Websites and frontend work that help small businesses explain their offer and present it clearly online.</p><a className="text-link" href="#contact">Discuss Your Project <span aria-hidden="true">↗</span></a></div><div className="service-list">{services.map(([title, description], i) => <article className="service-row" key={title}><span className="row-number">0{i + 1}</span><div><h3>{title}</h3><p>{description}</p></div><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div></section>
      <section id="process" className="section process wrap" aria-labelledby="process-title"><div className="section-heading"><div><SectionLabel number="03">PROCESS</SectionLabel><h2 id="process-title">From brief to launch.</h2></div><p>A straightforward process with clear decisions at every stage.</p></div><ol className="process-grid">{steps.map(([title, description], i) => <li key={title}><div className="step-top"><span>0{i + 1}</span><span aria-hidden="true">{i < 3 ? '→' : '↗'}</span></div><h3>{title}</h3><p>{description}</p></li>)}</ol></section>
      <section id="about" className="section about wrap" aria-labelledby="about-title"><div><SectionLabel number="04">ABOUT</SectionLabel><h2 id="about-title">Independent developer.<br />Direct collaboration.</h2></div><div className="about-copy"><p className="about-lead">I’m Maxim, an independent freelance web developer building websites for small businesses.</p><p>I handle design and frontend development, with a focus on clear content, responsive layouts, and practical usability.</p><div className="communication"><span aria-hidden="true">↗</span><div><h3>Clear communication throughout.</h3><p>I work comfortably through written, asynchronous communication — so ideas, feedback, and decisions stay clear, wherever you’re based.</p></div></div></div></section>
      <section id="contact" className="contact" aria-labelledby="contact-title"><div className="wrap"><SectionLabel number="05">CONTACT</SectionLabel><div className="contact-heading"><h2 id="contact-title">Have a website<br />in mind?</h2><a className="contact-arrow" href="mailto:wolkowmaksim1437@gmail.com" aria-label="Email Maxim"><span aria-hidden="true">↗</span></a></div><div className="contact-bottom"><p>Tell me about your business, your website, and what you need it to do. A short email is enough to get started.</p><div className="contact-links"><a className="email-link" href="mailto:wolkowmaksim1437@gmail.com">wolkowmaksim1437@gmail.com <span aria-hidden="true">↗</span></a><div><a href="https://t.me/volkmaksi" target="_blank" rel="noreferrer">Telegram ↗</a><a href="https://github.com/Kybrik32" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></div></div></section>
    </main>
    <footer className="footer wrap"><a className="wordmark" href="#" aria-label="Back to top">maxim<span>.</span></a><p>© {new Date().getFullYear()} Maxim. Independently designed & built.</p><a className="back-top" href="#">BACK TO TOP ↑</a></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);

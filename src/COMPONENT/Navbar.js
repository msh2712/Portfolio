import React, { useEffect, useState, Suspense } from 'react';
import './../CSSFILE/Navbar.css';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { scrollToSection } from './../utils/scrollToSection'

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));
const Projects = React.lazy(() => import('./Projects'));
const Sidebaricon = React.lazy(() => import('./Sidebaricon'));
const Footer = React.lazy(() => import('./Footer'));
const Skill = React.lazy(() => import('./Skill'));

function Navbar() {
  const savedMode = localStorage.getItem('msh') === 'true';
  const [data, setData] = useState(savedMode);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (data) {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }

    localStorage.setItem("msh", data);
  }, [data]);

  useEffect(() => {
    const options = { root: null, threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); 
        }
      });
    }, options);

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleChange = () => setData((prevData) => !prevData);

  return (
    <div>
      <Suspense fallback={<div className='loader' ><div className="spinner-border" role="status">
        <span className="sr-only">.</span>
      </div></div>}>
        <div className="d-none d-md-flex main w-100 justify-content-center">
          <div className="nav">
          <div  className='ps-4 h4 textlogo'>Portfolio<span className='mshcolour' >msh</span></div>
            <div className="d-flex gap-4 gap-lg-5 pe-5 align-items-center">
              <h6
                className={`m-0 h6c ${activeSection === 'Home' ? 'active' : ''}`}
                onClick={() => scrollToSection('Home')} 
              >
                HOME
              </h6>
              <h6
                className={`m-0 h6c ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => scrollToSection('about')} 
              >
                ABOUT
              </h6>
              <h6
                className={`m-0 h6c ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => scrollToSection('skills')} 
              >
                SKILL
              </h6>
              <h6
                className={`m-0 h6c ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => scrollToSection('projects')} 
              >
                PROJECT
              </h6>
              <h6
                className={`m-0 h6c ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')} // Use utility function
              >
                CONTACT
              </h6>
              <h6 className="h4 hi" onClick={handleChange}>
                {data ? <MdDarkMode /> : <MdLightMode />}
              </h6>
            </div>
          </div>
        </div>
        <Home id="Home" className='position-relative' />
        <Sidebaricon />
        <About id="about" />
        <Skill id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
        <Footer id="footer" />
      </Suspense> 
    </div>
  );
}

export default Navbar;

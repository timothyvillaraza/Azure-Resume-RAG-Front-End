import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Resume: React.FC = () => {
  return (
    <div className="home">
      <img className="profile-img"src="profile.jpg" alt="Timothy Villaraza" />
      <h1>Timothy Villaraza</h1>
      
      <div className="social-links">
        <a href="mailto:timothyvillaraza@outlook.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} /> timothyvillaraza@outlook.com
        </a>
        <a href="tel:+16308499086" aria-label="Phone">
          <FontAwesomeIcon icon={faPhone} /> (630) 849-9086
        </a>
        <a href="https://www.linkedin.com/in/timothyvillaraza/" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedinIn} /> timothyvillaraza
        </a>
        <a href="https://github.com/timothyvillaraza/" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} /> timothyvillaraza
        </a>
      </div>
      
      <div>
        <Link to="/resume">Resume</Link>
      </div>
    </div>
  );
};

export default Resume;

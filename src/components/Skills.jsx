import React from 'react';
import './Skills.css';
import { FaJs, FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-item">
          <FaJs size={70} />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <FaReact size={70} />
          <p>React</p>
        </div>
        <div className="skill-item">
          <FaNodeJs size={70} />
          <p>Node.js</p>
        </div>
        <div className="skill-item">
          <FaCss3Alt size={70} />
          <p>CSS3</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

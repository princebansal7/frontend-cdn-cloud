import React from 'react';

// Define types for your data (projects and skills)
type Project = {
  title: string;
  description: string;
  link: string;
};

type Skill = {
  name: string;
  level: string;
};

// Main Portfolio Component
const Portfolio: React.FC = () => {
  // Data: Skills and Projects
  const skills: Skill[] = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
  ];

  const projects: Project[] = [
    {
      title: 'Personal Portfolio Website',
      description: 'A fully responsive portfolio website built using HTML & CSS.',
      link: 'https://princebansal7.github.io/Resume-Html-Css/',
    },
    {
      title: 'Guess My Number Game',
      description: 'A Interacting game built using HTML, CSS & JS',
      link: 'https://princebansal7.github.io/GuessMyNumber-JS/',
    },
  ];

  return (
    <div style={styles.container}>
      {/* Profile Section */}
      <section style={styles.profile}>
        <h1 style={styles.name}>Prince Bansal</h1>
        <p style={styles.bio}>
          I'm a passionate full-stack developer with expertise in building modern web applications
          using React, TypeScript, Node.js, and more. I enjoy solving complex problems and learning new technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section style={styles.skills}>
        <h2>Skills</h2>
        <ul style={styles.skillList}>
          {skills.map((skill, index) => (
            <li key={index} style={styles.skillItem}>
              {skill.name} - {skill.level}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section style={styles.projects}>
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectItem}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Check Here
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    color: 'white',
  },
  profile: {
    textAlign: 'center' as const,
    marginBottom: '40px',
  },
  name: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: '1.2rem',
  },
  skills: {
    marginBottom: '40px',
  },
  skillList: {
    listStyleType: 'none',
    padding: 0,
  },
  skillItem: {
    marginBottom: '10px',
    fontSize: '1.1rem',
  },
  projects: {
    marginBottom: '40px',
  },
  projectItem: {
    marginBottom: '20px',
  },
};

export default Portfolio;
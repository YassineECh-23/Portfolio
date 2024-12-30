import React from 'react';


const projects = [
    {
        title: 'Project 1',
        description: 'This is a short description of project 1.',
        technologies: 'React, JavaScript, CSS'
    },
    {
        title: 'Project 2',
        description: 'This is a short description of project 2.',
        technologies: 'Node.js, Express, MongoDB'
    },
    {
        title: 'Project 3',
        description: 'This is a short description of project 3.',
        technologies: 'Python, Django, PostgreSQL'
    },
    {
        title: 'Project 4',
        description: 'This is a short description of project 4.',
        technologies: 'Java, Spring Boot, MySQL'
    },
    {
        title: 'Project 5',
        description: 'This is a short description of project 5.',
        technologies: 'Angular, TypeScript, SCSS'
    },
    {
        title: 'Project 6',
        description: 'This is a short description of project 6.',
        technologies: 'Vue.js, Vuex, Vuetify'
    }
];

const Projects = () => {
    return (
        <div>
            <h2 style={styles.title}>Projects</h2>
            <div style={styles.container}>
                {projects.map((project, index) => (
                    <div key={index} style={styles.projectCard}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Technologies:</strong> {project.technologies}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    title: {
        textAlign: 'center',
        margin: '20px 0',
        fontSize: '2em'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '20px'
    },
    projectCard: {
        width: '30%',
        margin: '10px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
    }
};

export default Projects;
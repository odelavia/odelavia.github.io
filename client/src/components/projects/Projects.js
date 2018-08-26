import React, { Component } from 'react';
import data from './ProjectsData.json';
import RenderProject from './RenderProject';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.createProject  = this.createProject.bind(this);
    this.createProjects = this.createProjects.bind(this);
  }

  createProject(project, index) {
    return (
      <RenderProject
        key={`project-${index}`}
        index={index + 1}
        title={project.title}
        description={project.description}
        siteLink={project.siteLink}
        tech={project.stack}
        repoLink={project.repoLink}
        backgroundImage={project.backgroundImage}
      />
    );
  }

  createProjects(projects) {
    return projects.map((project, index) => this.createProject(project, index))
  }

  render() {
    return(
      <div className="projects-wrapper">
        <div className="projects-container">
          <div className="projects-text">
            <h3>My Work</h3>
            <hr/>
            <p>Insight, prototyping, and continuous validation inform my work.
              Creativity fuels it.<br/>
              It’s the perfect balance between design thinking and design doing.</p>
            <p>Check out my projects below.</p>
          </div>
          <div className="projects">
            {this.createProjects(data.projects)}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
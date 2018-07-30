import React, { Component } from 'react';
import data from './10RecentProjects.json';
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
        repoLink={project.repoLink}
        backgroundImage={project.backgroundImage}
      />
    );
  }

  createProjects(projects) {
    return projects.map((project, index) => this.createProject(project, index))
  }

  render() {
    console.log('projects')
    return(
      <div className="projects-wrapper">
        <div className="projects-text">
          <h3>My Work</h3>
          <p>Insight, prototyping, and continuous validation informs my work.
            Creativity fuels it.
          </p>
          <p>It’s the perfect balance between design thinking and design doing.</p>
        </div>
        <div className="projects-container">
          {this.createProjects(data.projects)}
        </div>
      </div>
    );
  }
}

export default Projects;
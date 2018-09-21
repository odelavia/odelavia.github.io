import React, { Component } from 'react';
import { connect } from 'react-redux';
import data from './ProjectsData.json';
import RenderProject from './RenderProject';
import SearchBar from './SearchBar';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.createProject  = this.createProject.bind(this);
    this.createProjects = this.createProjects.bind(this);
  }

  createProject({ title, completed, description, siteLink, stack, repoLink, backgroundImage }, index) {
    return (
      <RenderProject
        key={`project-${index}`}
        index={index + 1}
        title={title}
        completed={completed}
        description={description}
        siteLink={siteLink}
        tech={stack}
        repoLink={repoLink}
        backgroundImage={backgroundImage}
      />
    );
  }

  createProjects(projects, filter) {
    const regexp = new RegExp(filter, 'i');

    return projects.filter( project => project.stack.some(text => regexp.test(text)))
                   .map((project, index) => this.createProject(project, index))
  }

  render() {
    const { filter } = this.props;
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
          {<SearchBar />}
          <div className="projects">
            {this.createProjects(data.projects, filter)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.searchbar.filter,
  }
}

export default connect(mapStateToProps)(Projects);
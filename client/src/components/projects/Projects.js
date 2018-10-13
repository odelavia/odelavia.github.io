import React, { Component } from 'react';
import { connect } from 'react-redux';
import data from './ProjectsData.json';
import RenderProject from './RenderProject';
import SearchBar from './SearchBar';
import OptionsDropDown from './OptionsDropDown';
import options from './FilterOptions';
console.log(options)
class Projects extends Component {
  constructor(){
    super()
    this.state = {
      searchFilter: options,
    }

    this.createProject  = this.createProject.bind(this);
    this.createProjects = this.createProjects.bind(this);
    // this.toggleSelected = this.toggleSelected.bind(this);
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

  createProjects (projects, filter) {
    console.log(projects, filter)
    const regexp = new RegExp(filter, 'i');
    if (this.props.filterType === 'All') {

    } else if (this.props.filterType === 'title') {
      return projects.filter( project => regexp.test(project.title))
                      .map((project, index) => this.createProject(project, index))
    } else if (this.props.filterType === 'description') {
      return projects.filter( project => regexp.test(project.description))
                      .map((project, index) => this.createProject(project, index))
    } else if (this.props.filterType === 'tech') {
      return projects.filter( project => project.stack.some(text => regexp.test(text)))
                      .map((project, index) => this.createProject(project, index))
    } else if (this.props.filterType === 'created') {

    } else if (this.props.filterType === 'live') {

    }
  }

  toggleSelected (id, key){
    console.log ("id, key",id, key)
    let temp = this.state[key]
    this.state[key].map(x => x.selected = false)
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp,
    }, () => console.log(this.state[key]))
    // close optionsdropdownafter after clicking
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
          <SearchBar />
          {<OptionsDropDown title="Select filter" titleHelper="filter" list={this.state.searchFilter} toggleItem={this.toggleSelected.bind(this)} />}
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
    filterType: state.searchbar.type,
  }
}

export default connect(mapStateToProps)(Projects);
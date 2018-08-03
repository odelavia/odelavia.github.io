import React, { Component } from 'react';

class RenderProject extends Component {
  constructor(props) {
    super(props);
    this.createTag = this.createTag.bind(this);
    this.createTags = this.createTags.bind(this);
  }

  createTag(technology, index) {
    return (
      <span key={`tech-${index}`}>
        {technology}
      </span>
    );
  }

  createTags(technologies) {
    return technologies.map((technology, index) => this.createTag(technology, index))
  }

  render() {
    return (
      <div className="test-project">
        <div className={`img-container-${this.props.index}`}>
          <div className="project-img"
            style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
          />
      </div>
        <div className="project-description">
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
          <div className="proj-stack">
            {this.createTags(this.props.tech)}
          </div>
          <span>
            <a href={this.props.siteLink}>Live</a>
            <span className="live-repo">//</span>
            <a href={this.props.repoLink}>Repo</a>
          </span>
        </div>
      </div>
    );
  }
}

export default RenderProject;
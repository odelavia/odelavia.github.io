import React, { Component } from 'react';
import SlantedContainer from '../common/SlantedContainer';

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
    const { index, title, description, siteLink, tech, repoLink, backgroundImage } = this.props;
    return (
      <div className="test-project">
        <div className={`img-container-${index}`}>
          <div className="project-img"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
      </div>
        <div className="project-description">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="proj-stack">
            {this.createTags(tech)}
          </div>
          <span>
            {
              siteLink === "javascript:void(0); //" || ""
              ? <SlantedContainer>NOT LIVE</SlantedContainer>
              : <a href={siteLink}>Live</a>
            }
            <span className="live-repo">//</span>
            <a href={repoLink}>Repo</a>
          </span>
        </div>
      </div>
    );
  }
}

export default RenderProject;
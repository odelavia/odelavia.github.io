import React, { Component } from 'react';

class RenderProject extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="test-project">
        <div className={`project-description-${this.props.index}`}>
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
          <span>
            <a href={this.props.siteLink}>Live</a>
            <span className="live-repo">//</span>
            <a href={this.props.repoLink}>Repo</a>
          </span>
        </div>
        <div
          className="project-img"
          style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
        />
      </div>
    );
  }
}

export default RenderProject;
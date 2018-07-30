import React, { Component } from 'react';

class RenderPost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post-container">
        <div className={`post-description-${this.props.index}`}>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <div>
            <span className="author">{this.props.author}</span>
            <span className="published">{this.props.published}</span>
          </div>
          <a className="articleLink solid-button" href={this.props.postLink}>Read Article</a>
        </div>
        <div
          className="post-img"
          style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
        />
      </div>
    );
  }
}

export default RenderPost;
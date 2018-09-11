import React from 'react';

const RenderPost = ({ index, title, description, author, published, postLink, backgroundImage }) => {
  return (
    <div className="post-container">
      <div className={`post-description-${index}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <span className="author">{author}</span>
          <span className="published">{published}</span>
        </div>
        <a className="articleLink solid-button" href={postLink}>Read Article</a>
      </div>
      <div
        className="post-img"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
    </div>
  );
}

export default RenderPost;
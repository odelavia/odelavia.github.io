import React, { Component } from 'react';
import data from './BlogPostsData.json';
import RenderPost from './RenderPost';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.createPost  = this.createPost.bind(this);
    this.createPosts = this.createPosts.bind(this);
  }

  createPost(post, index) {
    return (
      <RenderPost
        key={`post-${index}`}
        index={index + 1}
        title={post.title}
        description={post.description}
        author={post.author}
        published={post.published}
        postLink={post.postLink}
        backgroundImage={post.backgroundImage}
      />
    );
  }

  createPosts(posts) {
    return posts.map((post, index) => this.createPost(post, index))
  }

  render() {
    console.log('projects')
    return(
      <div className="blog-wrapper">
        <div className="blog-text">
          <h3>The Process</h3>
          <p>MY blog stufffffff
          </p>
          <p>More of a description</p>
        </div>
        <div className="blog-container">
          {this.createPosts(data.blogposts)}
        </div>
      </div>
    );
  }
}

export default Blog;
import React, { Component, Fragment } from 'react';
import SlantedContainer from '../common/SlantedContainer';
import BannerBadge from '../common/BannerBadge';
import BannerBadgeBackground from '../common/BannerBadgeBackground';

class RenderProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      firstbanner: 'IN'
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.createTag = this.createTag.bind(this);
    this.createTags = this.createTags.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (this.state.width <= 1440) {
      this.setState({ firstbanner: 'IN PROGRESS'})
    } else if (this.state.width >= 1441) {
      this.setState({ firstbanner: 'IN'})
    }
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
    const { index, title, completed, description, siteLink, tech, repoLink, backgroundImage } = this.props;
    return (
      <div className="projectCard-wrapper">
        {
          completed === 'yes' ? null
          : <Fragment>
            <BannerBadgeBackground />
            <BannerBadge id="visible-badge">{[this.state.firstbanner,'PROGRESS']}</BannerBadge>
          </Fragment>
        }
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
      </div>
    );
  }
}

export default RenderProject;
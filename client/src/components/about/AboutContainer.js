import React, { Component } from 'react';
import FileTabs from './FileTabs';
import FileEnumeration from './FileEnumeration';
import FileBodies from './FileBodies';


class AboutContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileOne: false,
      fileTwo: false,
      fileThree: true,
      fileFour: false,
      fileFive: false,
      fileSix: false,
    }
    this.onFileSelection = this.onFileSelection.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onFileSelection);
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.onFileSelection);
  }

  onFileSelection() {
    if (event.target.id == 'fileOne') {
      this.setState({
        fileOne: true,
        fileTwo: false,
        fileThree: false,
        fileFour: false,
        fileFive: false,
        fileSix: false,
      })
    } else if (event.target.id == 'fileTwo') {
        this.setState({
          fileOne: false,
          fileTwo: true,
          fileThree: false,
          fileFour: false,
          fileFive: false,
          fileSix: false,
        })
    } else if (event.target.id == 'fileThree') {
        this.setState({
          fileOne: false,
          fileTwo: false,
          fileThree: true,
          fileFour: false,
          fileFive: false,
          fileSix: false,
        })
    } else if (event.target.id == 'fileFour') {
        this.setState({
          fileOne: false,
          fileTwo: false,
          fileThree: false,
          fileFour: true,
          fileFive: false,
          fileSix: false,
        })
    }else if (event.target.id == 'fileFive') {
        this.setState({
          fileOne: false,
          fileTwo: false,
          fileThree: false,
          fileFour: false,
          fileFive: true,
          fileSix: false,
        })
    }else if (event.target.id == 'fileSix') {
        this.setState({
          fileOne: false,
          fileTwo: false,
          fileThree: false,
          fileFour: false,
          fileFive: false,
          fileSix: true,
        })
    }
  }

  render() {
    // console.log('about')
    return (
      <div className="about-section-wrapper">
        <section className="about-text-wrapper">
          <h3>
            World Experience
          </h3>
          <hr />

          <p>
            I am a software developer with strong roots in residential painting, carpentry and oil portraiture. My passion is solving problems. My goal is to keep user experiences beautiful, clean, and intutive. I've walked and ridden my bike across 4 continents and inform my work with observations made during those adventures. Innovation is everywhere!
          </p>
          <p>Click on my text editor's file tabs below to learn more</p>
        </section>
        <section className="about-editor-wrapper">
          <div className="editor-container">
            <div className="about-btns-wrapper">
              <div className="about-btns-container">
                <button className="close-btn" onClick={()=>console.log('closed')}></button>
                <button className="min-btn" onClick={()=>console.log('minimized')}></button>
                <button className="max-btn" onClick={()=>console.log('maximized')}></button>
              </div>
            </div>
            <FileTabs {...this.state}/>
            <div id="editorbody-scroll" className="body-wrapper">
              <FileEnumeration />
              <FileBodies {...this.state} />
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default AboutContainer;
import React, { Component } from 'react';
import FileTabs from './FileTabs';
import FileEnumeration from './FileEnumeration';
import FileBodies from './FileBodies';

const initialState = {
  fileOne: false,
  fileTwo: false,
  fileThree: false,
  fileFour: false,
  fileFive: false,
  fileSix: false
};
class AboutContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { ...initialState, fileSix: true };
    this.onFileSelection = this.onFileSelection.bind(this)
  }

  componentDidMount(event) {
    document.addEventListener('mousedown', event => this.onFileSelection(event));
  }

  componentWillMount(event) {
    document.addEventListener('mousedown', event => this.onFileSelection(event));
  }

  onFileSelection({target}) {
    this.setState(() => {
        if (target.id == 'fileOne') {
          return { ...initialState, fileOne: true }
        } else if (target.id == 'fileTwo') {
            return { ...initialState, fileTwo: true }
        } else if (target.id == 'fileThree') {
            return { ...initialState, fileThree: true }
        } else if (target.id == 'fileFour') {
            return { ...initialState, fileFour: true }
        }else if (target.id == 'fileFive') {
            return { ...initialState, fileFive: true }
        }else if (target.id == 'fileSix') {
            return { ...initialState, fileSix: true
        }
      }
    });
  }

  render() {
    return (
      <div className="about-section-wrapper">
        <section className="about-text-wrapper">
          <h3>
            World Experience
          </h3>
          <hr />
          <p>
            I am a software engineer with strong roots in residential painting, carpentry and oil portraiture. My passion is solving problems. My goal is to keep user experiences beautiful, clean, and intutive. I've walked and ridden my bike across 4 continents and inform my work with observations made during those adventures. Innovation is everywhere!
          </p>
          <p>Click on my text editor's file tabs to learn more</p>
        </section>
        <section className="about-editor-wrapper">
          <div className="editor-container">
            <div className="about-btns-wrapper">
              <div className="about-btns-container">
                <button className="close-btn"></button>
                <button className="min-btn"></button>
                <button className="max-btn"></button>
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
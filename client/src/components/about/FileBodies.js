import React, { Component } from 'react';
import About from './About';
import AsyncComponent from '../common/AsyncComponent';

class FileBodies extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   component: null
    // }
  }

  render() {
    const { fileOne, fileTwo, fileThree, fileFour, fileFive, fileSix } = this.props;
    if(fileOne == true) {
      const AsyncFile1 = AsyncComponent(()=> import('./IndexTab'));
      return <AsyncFile1 />
    } else if (fileTwo == true) {
      const AsyncFile2 = AsyncComponent(()=> import('./App'));
      return <AsyncFile2 />
    } else if (fileThree == true) {
      return <About />
    } else if (fileFour == true) {
      const AsyncFile4 = AsyncComponent(()=> import('./Proficiency'));
      return <AsyncFile4 />
    } else if (fileFive == true) {
      const AsyncFile5 = AsyncComponent(()=> import('./Interests'));
      return <AsyncFile5 />
    } else if (fileSix == true) {
      const AsyncFile6 = AsyncComponent(()=> import('./README'));
      return <AsyncFile6 />
    }
  }
}

export default FileBodies;
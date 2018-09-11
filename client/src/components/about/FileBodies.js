import React from 'react';
import ReadMe from './README';
import AsyncComponent from '../common/AsyncComponent';

const FileBodies = ({ fileOne, fileTwo, fileThree, fileFour, fileFive, fileSix }) => {
  if(fileOne == true) {
    const AsyncFile1 = AsyncComponent(()=> import('./IndexTab'));
    return <AsyncFile1 />
  } else if (fileTwo == true) {
    const AsyncFile2 = AsyncComponent(()=> import('./App'));
    return <AsyncFile2 />
  } else if (fileThree == true) {
    const AsyncFile3 = AsyncComponent(()=> import('./About'));
    return <AsyncFile3 />
  } else if (fileFour == true) {
    const AsyncFile4 = AsyncComponent(()=> import('./Proficiency'));
    return <AsyncFile4 />
  } else if (fileFive == true) {
    const AsyncFile5 = AsyncComponent(()=> import('./Interests'));
    return <AsyncFile5 />
  } else if (fileSix == true) {
    return <ReadMe />
  }
}

export default FileBodies;
import React, { Component, Fragment } from 'react';
import IndexTab from './IndexTab';
import App from './App';
import About from './About';
import Proficiency from './Proficiency';
import Interests from './Interests';
import ReadMe from './ReadMe';

const FileBodies = ({ fileOne, fileTwo, fileThree, fileFour, fileFive, fileSix }) => (
 <Fragment>
  {fileOne ? <IndexTab /> : null}
  {fileTwo ? <App /> : null}
  {fileThree ? <About /> : null}
  {fileFour ? <Proficiency /> : null}
  {fileFive ? <Interests /> : null}
  {fileSix ? <ReadMe /> : null}
 </Fragment>
);

export default FileBodies;
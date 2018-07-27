import React from 'react';

const FileTabs = ({ fileOne, fileTwo, fileThree, fileFour, fileFive, fileSix }) => (
  <div className="filetab-wrapper">
    <div id="fileOne" className={fileOne ? 'filetab active' : 'filetab'}>
      index.js
    </div>
    <div id="fileTwo" className={fileTwo ? 'filetab active' : 'filetab'}>
      App.js
    </div>
    <div id="fileThree" className={fileThree ? 'filetab active' : 'filetab'}>
      About.js
    </div>
    <div id="fileFour" className={fileFour ? 'filetab active' : 'filetab'}>
      Proficiency.js
    </div>
    <div id="fileFive" className={fileFive ? 'filetab active' : 'filetab'}>
      Interests.js
    </div>
    <div id="fileSix" className={fileSix ? 'filetab active' : 'filetab'}>
      README.md
    </div>
  </div>
);

export default FileTabs;
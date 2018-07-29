import React from 'react';

const FileTabs = ({ fileOne, fileTwo, fileThree, fileFour, fileFive, fileSix }) => (
  <div className="filetab-wrapper">
    <div id="fileOne" className={fileOne ? 'filetab active scroll' : 'filetab scroll'}>
      index.js
    </div>
    <div id="fileTwo" className={fileTwo ? 'filetab active scroll' : 'filetab scroll'}>
      App.js
    </div>
    <div id="fileThree" className={fileThree ? 'filetab active scroll' : 'filetab scroll'}>
      About.js
    </div>
    <div id="fileFour" className={fileFour ? 'filetab active scroll' : 'filetab scroll'}>
      Proficiency.js
    </div>
    <div id="fileFive" className={fileFive ? 'filetab active scroll' : 'filetab scroll'}>
      Interests.js
    </div>
    <div id="fileSix" className={fileSix ? 'filetab active scroll' : 'filetab scroll'}>
      README.md
    </div>
  </div>
);

export default FileTabs;
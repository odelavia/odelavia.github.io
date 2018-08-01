import React from 'react';

const About = () => (
  <div className="body-text-container">
    <code className="line-1-text">
      <span className="html-keyword">import</span>
      React
      <span className="html-keyword pad-space">from</span>
      <span className="html-path">'react'</span>;
    </code>
    <code className="line-2-text commented-out" />

    <code className="line-3-text">
      <span className="html-keyword">
        const
        <span className="html-method pad-space">
          About
        </span>
        <span className="pad-space">
        =
        </span>
      </span>
      ()
      <span className="html-keyword pad-space"> =></span>
      (
    </code>
        <div className="line-9-text html-tag pad1">&lt;<span className="html-element">p</span>&gt;</div>
          <code className="pad2 line-10-text">
            I'm from Arlington, VA and graduated with a B.F.A in Communication Arts from V.C.U..<br/>
            Before learning to code, I worked as a project supervisor in home renovation.
            Coming from a strong visual arts background has allowed me to leverage attention to detail and creativity in everything I do.<br/>
            Whether it be figuring out how to make more intuitive user interfaces, writing crucial logic for a server or planning out a long-period savatical on a poor man's budget, I love a challenge.
          </code>
        <div className="line-11-text html-tag pad1">&lt;/<span className="html-element">p</span>&gt;</div>
    <code className="line-14-text">);</code>

    <code className="line-9-text">
      <span className="html-keyword pad-space">export default</span>
      About
    </code>
  </div>
);

export default About;
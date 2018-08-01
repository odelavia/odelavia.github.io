import React from 'react';

const Proficiency = () => (
  <div className="body-text-container">
    <code className="line-1-text">
      <span className="html-keyword">import</span>
      React, &#123; Fragment &#125;
      <span className="html-keyword pad-space">from</span>
      <span className="html-path">'react'</span>;
    </code>
    <code className="line-2-text commented-out" />

    <code className="line-3-text">
      <span className="html-keyword">
        const
        <span className="html-method pad-space">
          Proficiency
        </span>
        <span className="pad-space">
        =
        </span>
      </span>
      ()
      <span className="html-keyword pad-space"> =></span>
      (
    </code>
      <article className="pad1 line-5-text html-tag">&lt;<span className="html-element">Fragment</span>&gt;</article>
        <div className="line-9-text html-tag pad2">&lt;<span className="html-element">p</span>&gt;</div>
          <code className="pad3 line-10-text">
            Front-end - JavaScript, React, React-Native, Redux, CSS, SASS<br/>
            Back-end - Node, Express, MongoDB, PostgreSQL<br/>
            Other tools - Git, Webpack, Grunt
          </code>
        <div className="line-11-text html-tag pad2">&lt;/<span className="html-element">p</span>&gt;</div>
        <div className="line-12-text html-tag pad2">&lt;<span className="html-element">p</span>&gt;</div>
          <code className="pad3 line-13-text">
            Since I started learning to code Nov 2017, I've developed programs alone, on remote international teams, led a team, helped faciliate a community of hundreds of self-taught programmers, and tutored many other developers through pair-programming sessions.
            <br/>One could say I have a love for code.
            &#123;/*     ^_^     */&#125;
          </code>
        <div className="line-14-text html-tag pad2">&lt;/<span className="html-element">p</span>&gt;</div>
      <article className="line-15-text html-tag pad1">&lt;/<span className="html-element">Fragment</span>&gt;</article>
    <code className="line-16-text">);</code>

    <code className="line-17-text">
      <span className="html-keyword pad-space">export default</span>
      Proficiency
    </code>
  </div>
);

export default Proficiency;
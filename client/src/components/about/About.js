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
      <article className="pad1 line-5-text html-tag">&lt;<span className="html-element">article</span>&gt;</article>
        <div className="pad2 line-6-text html-tag">&lt;<span className="html-element">h1</span>&gt;</div>
          <code className="pad3 line-7-text">Hi, I'm Oliver!</code>
        <div className="line-8-text html-tag pad2">&lt;/<span className="html-element">h1</span>&gt;</div>
        <div className="line-9-text html-tag pad2">&lt;<span className="html-element">p</span>&gt;</div>
          <code className="pad3 line-10-text">
            I'm passionate about designing solutions and solving problems.
            <br/> Coming from a strong visual arts background has allowed me to leverage my attention to detail and creativity.
            <br/> Whether it be figuring out how to make a more intuitive user interface, writing crucial logic for your server or planning out a long-period savatical on a budget, I love thinking outside the box.
          </code>
        <div className="line-11-text html-tag pad2">&lt;/<span className="html-element">p</span>&gt;</div>
      <article className="line-12-text html-tag pad1">&lt;/<span className="html-element">article</span>&gt;</article>
    <code className="line-14-text">);</code>

    <code className="line-9-text">
      <span className="html-keyword pad-space">export default</span>
      About
    </code>
  </div>
);

export default About;
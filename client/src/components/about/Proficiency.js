import React from 'react';

const Proficiency = () => (
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
      <article className="pad1 line-5-text html-tag">&lt;<span className="html-element">article</span>&gt;</article>
        <div className="pad2 line-6-text html-tag">&lt;<span className="html-element">h2</span>&gt;</div>
          <code className="pad3 line-7-text">My Proficiencies:</code>
        <div className="line-8-text html-tag pad2">&lt;/<span className="html-element">h2</span>&gt;</div>
        <div className="line-9-text html-tag pad2">&lt;<span className="html-element">p</span>&gt;</div>
          <code className="pad3 line-10-text">
            I'm proficient in...
          </code>
        <div className="line-11-text html-tag pad2">&lt;/<span className="html-element">p</span>&gt;</div>
      <article className="line-12-text html-tag pad1">&lt;/<span className="html-element">article</span>&gt;</article>
    <code className="line-14-text">);</code>

    <code className="line-9-text">
      <span className="html-keyword pad-space">export default</span>
      Proficiency
    </code>
  </div>
);

export default Proficiency;
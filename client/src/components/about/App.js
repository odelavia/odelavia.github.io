import React from 'react';

const App = () => (
  <div className="body-text-container">
    <code className="line-1-text">
      <span className="html-keyword">import</span>
      React
      <span className="html-keyword pad-space">from</span>
      <span className="html-path">'react'</span>
      ;
    </code>

    <code className="line-2-text">
      <span className="html-keyword">import</span>
      About
      <span className="html-keyword pad-space">from</span>
      <span className="html-path">'./About'</span>
      ;
    </code>

    <code className="line-3-text">
      <span className="html-keyword">import</span>
      Proficiency
      <span className="html-keyword pad-space">from</span>
      <span className="html-path">'./Proficiency'</span>
      ;
    </code>

    <code className="line-4-text">
      <span className="html-keyword">import</span>
      Interests
      <span className="html-keyword pad-space">from</span>
      <span className="html-path">'./Interests'</span>
      ;
    </code>

    <code className="line-5-text commented-out" />
    <code className="line-6-text">
      <span className="html-keyword">
        const
        <span className="html-method pad-space">
          App
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
        <code className="pad3 line-7-text">About me:</code>
      <div className="line-8-text html-tag pad2">&lt;/<span className="html-element">h1</span>&gt;</div>
      <code className="pad2 line-5-text html-tag">&lt;/<span className="html-element">About</span>&gt;</code>
      <div className="pad2 line-6-text html-tag">&lt;<span className="html-element">h1</span>&gt;</div>
        <code className="pad3 line-7-text">My proficiencies:</code>
      <div className="line-8-text html-tag pad2">&lt;/<span className="html-element">h1</span>&gt;</div>
      <code className="pad2 line-5-text html-tag">&lt;/<span className="html-element">Proficiency</span>&gt;</code>
      <div className="pad2 line-6-text html-tag">&lt;<span className="html-element">h1</span>&gt;</div>
        <code className="pad3 line-7-text">My interests:</code>
      <div className="line-8-text html-tag pad2">&lt;/<span className="html-element">h1</span>&gt;</div>
      <code className="pad2 line-5-text html-tag">&lt;/<span className="html-element">Interests</span>&gt;</code>
    <article className="pad1 line-5-text html-tag">&lt;/<span className="html-element">article</span>&gt;</article>
    <code className="line-8-text">);</code>
    <code className="line-9-text">
      <span className="html-keyword pad-space">export default</span>
      App
    </code>
  </div>
);

export default App;
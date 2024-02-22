import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3 is a powerful tool for developers, designed to understand and assist with coding tasks. With a blend of algorithmic prowess and intuitive responses, it's your go-to companion in the realm of coding and problem-solving" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Engage in dynamic conversations with our advanced chatbots. Whether you're seeking coding advice, debugging tips, or just want a friendly coding chat, our chatbots are here to assist" />
      <Feature title="Knowledgebase" text="Dive into a vast reservoir of coding wisdom in our Knowledge Base. Explore in-depth articles, tutorials, and solutions to common coding challenges." />
      <Feature title="Education" text="Empower your coding journey through our educational resources. Access comprehensive courses, interactive lessons, and hands-on projects designed to enhance your skills." />
    </div>
  </div>
);

export default WhatGPT3;

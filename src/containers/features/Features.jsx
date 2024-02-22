import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Intelligent Coding Assistance',
    text: 'Experience intelligent coding assistance like never before. GPT-3 understands your code, offering real-time suggestions, auto-completions, and error detection.',
  },
  {
    title: 'Dynamic Chatbot Interaction',
    text: 'Engage in dynamic and meaningful conversations with our advanced chatbots. From coding queries to general tech discussions, our chatbots provide insightful and responsive interactions.',
  },
  {
    title: 'Knowledge Enrichment with AI',
    text: 'Unlock a world of coding knowledge with our AI-driven platform. GPT-3 powers a comprehensive knowledge base, offering deep insights and tutorials',
  },
  {
    title: 'Educational Empowerment',
    text: 'Take your coding skills to new heights through our educational features. GPT-3 facilitates personalized learning journeys with interactive courses, hands-on projects, and adaptive lessons',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

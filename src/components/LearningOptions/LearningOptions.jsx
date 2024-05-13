import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { 
      text: "Javascript", 
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { 
      text: "Data visualization", 
      handler: props.actionProvider.handleDataVisualList, 
      id: 2,
    },
    { 
      text: "APIs", 
      handler: props.actionProvider.handleAPIList, 
      id: 3,
    },
    { 
      text: "Interview prep", 
      handler: props.actionProvider.handleInterviewPrepList, 
      id: 4, 
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
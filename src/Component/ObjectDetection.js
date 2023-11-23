/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';

const ObjectDetection = ({predictions}) => {
  return (
    <div>
      <h2>Object Detection Results</h2>
      <ul>
        {predictions.map((prediction, index) => (
          <li key={index}>
            {`Object ${index + 1}: ${prediction.label}, Confidence: ${prediction.confidence.toFixed(2)}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectDetection;

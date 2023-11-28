/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-spacing */
import React from 'react';

const NLU = ({ matchedInputs}) => {
  const nluContainerStyle = {
    marginTop: '20px',
    backgroundColor: '#CCE5FF',
    padding: '10px',
    borderRadius: '8px',
    maxWidth: '70%',
  };

  const matchedInputsStyle = {
    fontWeight: 'bold',
  };

  return (
    <div style={nluContainerStyle}>
      <p><span style={matchedInputsStyle}>User  </span> {matchedInputs.join(', ')}</p>
    </div>
  );
};

export default NLU;

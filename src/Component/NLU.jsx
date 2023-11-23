/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-spacing */
import React from 'react';

const NLU = ({ matchedInputs}) => {
  const nluContainerStyle = {
    marginTop: '20px',
    backgroundColor: '#CCE5FF', // Warna latar belakang container NLU
    padding: '10px',
    borderRadius: '8px',
    maxWidth: '70%', // Lebar maksimum container NLU
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

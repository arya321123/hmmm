import React from 'react';

// eslint-disable-next-line react/prop-types
const MG = ({botResponse}) => {
  const botMessageStyle = {
    marginTop: '20px',
    backgroundColor: '#DCF8C6',
    padding: '10px',
    borderRadius: '8px',
    maxWidth: '70%',
    alignSelf: 'flex-end',
  };

  return (
    <div style={botMessageStyle}>
      <h4>Bot  </h4>
      <p>{botResponse}</p>
    </div>
  );
};

export default MG;

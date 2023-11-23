import React from 'react';

// eslint-disable-next-line react/prop-types
const MG = ({botResponse}) => {
  const botMessageStyle = {
    marginTop: '20px',
    backgroundColor: '#DCF8C6', // Warna latar belakang respons bot
    padding: '10px',
    borderRadius: '8px',
    maxWidth: '70%', // Lebar maksimum respons bot
    alignSelf: 'flex-end', // Respons bot ditempatkan di sebelah kanan
  };

  return (
    <div style={botMessageStyle}>
      <h4>Bot  </h4>
      <p>{botResponse}</p>
    </div>
  );
};

export default MG;

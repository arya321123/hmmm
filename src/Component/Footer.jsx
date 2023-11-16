import React from 'react';

const footerStyle = {
  backgroundColor: '#6b4612',
  color: '#fff',
  textAlign: 'left',
  padding: '10px 0',
  position: 'relative',
  bottom: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

const contentStyle = {
  marginBottom: '40px',
};

const copyrightStyle = {
  marginLeft: '12px',
  fontSize: '12px',
};

const socialIconStyle = {
  width: '24px',
  height: '24px',
  
  marginLeft: '10px',
};

const Footer = () => {
  return (
    <div>
      <div style={contentStyle}></div>
      <footer style={footerStyle}>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://tse2.mm.bing.net/th?id=OIP.mWX3GQBBB46ySNdY3E56MQHaHa&pid=Api&P=0&h=220" alt="Facebook" style={socialIconStyle} />
        </a>
                
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://s-media-cache-ak0.pinimg.com/736x/59/53/56/595356521a0229856e274ad00b8c4f3c.jpg" alt="Twitter" style={socialIconStyle} />
        </a>

        <p className="copyright" style={copyrightStyle}>
          &#169; {new Date().getFullYear()} CODDY. Powered and secured by 2nd Group
        </p>
      </footer>
    </div>
  );
};

export default Footer;

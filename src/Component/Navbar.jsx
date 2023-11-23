import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: 'white',
    fontFamily: 'Helvetica',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const cartLogoStyle = {
    width: '30px',
    height: 'auto',
    cursor: 'pointer',
    position: 'absolute',
    top: '60px', // Jarak dari atas
    right: '80px', // Jarak dari kanan
  };


  const logoStyle = {
    width: '100px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  };

  const listItemStyle = {
    margin: '0 65px',
    display: 'inline-block',
    borderRight: '1px solid #ccc',
    paddingRight: '120px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: '1px',
    transition: 'color 0.3s ease',
  };

  linkStyle[':hover'] = {
    color: '#87711B',
  };

  const produkListItemStyle = {
    margin: '0 95px',
    display: 'inline-block',
    paddingRight: '0',
  };

  return (
    <div>
      <img
        src="logo.jpg"
        alt="CODDY"
        style={logoStyle}
      />
      <nav style={navbarStyle}>
        <ul style={{listStyleType: 'none', margin: 0, padding: 20}}>
          <li style={listItemStyle}>
            <Link to="/" style={linkStyle}>
            Beranda
            </Link>
          </li>
          <li style={listItemStyle}>
            <Link to="tentang" style={linkStyle}>
            Tentang Kami
            </Link>
          </li>
          <li style={listItemStyle}>
            <Link to="kontak" style={linkStyle}>
            Kontak
            </Link>
          </li>
          <li style={produkListItemStyle}>
            <Link to="product" style={linkStyle}>
            Produk
            </Link>
          </li>
          <li style={produkListItemStyle}>
            <Link to="/Cart" style={linkStyle}>
              <img
                src="cart.jpg"
                alt="Cart"
                style={cartLogoStyle}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

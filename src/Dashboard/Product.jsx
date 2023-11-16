import React from 'react';
import { Link } from 'react-router-dom';
import '../product.css';

const Product = ({ product }) => {
  
  if (!product) {
    return null; 
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card-link" >
      <div className="product-card">
        <img src={product.gambar} alt={product.nama} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{product.nama}</h3>
          <p className="product-price">Rp {product.harga}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
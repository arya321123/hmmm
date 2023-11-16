
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../product.css'; 

const ProductDetail = ({ products, onBuyClick }) => {
  const navigate = useNavigate(); 

  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));
  
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p>Produk tidak ditemukan</p>;
  }

  const { nama, deskripsi, harga, gambar } = product;

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleBuyClick = () => {
    onBuyClick({ product, quantity });
    navigate('/checkout'); // Navigate to the checkout page
  };

  return (
    <div className="product-detail-container">
      <h2 className="product-title">{nama}</h2>
      <img src={gambar} alt='' className="product-image" />
      <p className="product-description">{deskripsi}</p>
      <p className="product-price">Harga: Rp {harga.toLocaleString()}</p>
      <div className="quantity-section">
        <label className="quantity-label">Jumlah:</label>
        <div className="quantity-buttons">
          <button className="quantity-button" onClick={handleDecrease}>
            Kurangi
          </button>
          <p>{quantity}</p>
          <button className="quantity-button" onClick={handleIncrease}>
            Tambah
          </button>
        </div>
      </div>
      <button className="buy-button" onClick={handleBuyClick}>
        Beli
      </button>
    </div>
  );
};

export default ProductDetail;

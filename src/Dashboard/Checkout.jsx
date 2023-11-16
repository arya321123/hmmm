import React from 'react';
import '../product.css'; // Import the Checkout.css file

const Checkout = ({ selectedProduct }) => {
  if (!selectedProduct) {
    return <p>Belum ada produk yang dipilih.</p>;
  }

  const { product, quantity } = selectedProduct;
  const { nama, harga, gambar } = product;

  const totalHarga = harga * quantity;

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="product-details">
        <img src={gambar} alt={nama} className="product-image" />
        <div className="product-info">
          <h3 className="product-title">{nama}</h3>
          <p className="product-price">Harga per unit: Rp {harga.toLocaleString()}</p>
          <p className="product-quantity">Jumlah: {quantity}</p>
        </div>
      </div>
      <p className="total-price">Total Harga: Rp {totalHarga.toLocaleString()}</p>
      <div className="checkout-buttons">
        <button className="checkout-button" onClick={() => console.log('Beli clicked')}>
          Beli
        </button>
        <button className="checkout-button" onClick={() => console.log('Batalkan Pembelian clicked')}>
          Batalkan Pembelian
        </button>
      </div>
    </div>
  );
};

export default Checkout;

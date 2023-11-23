/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import {usePurchaseContext} from '../PurchaseContext';

const PurchaseHistory = () => {
  const {purchaseHistory} = usePurchaseContext();

  return (
    <div className="purchase-history-container">
      <h2 className="purchase-history-title">History Pembelian</h2>
      {purchaseHistory.map((purchase, index) => (
        <div key={index} className="purchase-item">
          <div className="purchase-info">
            <p className="purchase-product">{purchase.product.nama}</p>
            <p className="purchase-price">Harga: Rp {purchase.product.harga.toLocaleString()}</p>
            <p className="purchase-quantity">Jumlah: {purchase.quantity}</p>
            <p className="purchase-total">Total Harga: Rp {purchase.totalHarga.toLocaleString()}</p>
          </div>
          <div className="purchase-metadata">
            <p className="purchase-time">Waktu Pembelian: {purchase.waktuPembelian}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseHistory;

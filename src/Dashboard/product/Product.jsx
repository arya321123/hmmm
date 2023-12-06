/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-deprecated */
/* eslint-disable max-len */
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import './style.css';
import productsData from './products.json';

const Product = () => {
  const [products] = useState(productsData);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [, setTotalQuantity] = useState(0);
  const listCartRef = useRef(null);

  const handleCheckoutClick = () => {
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Pembelian berhasil!');

    setCart([]);
    navigate('/ty');
  };
  useEffect(() => {
    const fetchCart = () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(storedCart);
      calculateTotalQuantity(storedCart);
    };

    fetchCart();
    document.addEventListener('click', handleCartClick);

    return () => {
      document.removeEventListener('click', handleCartClick);
    };
  }, []);

  const calculateTotalQuantity = useCallback((cartItems) => {
    let quantity = 0;
    cartItems.forEach((item) => (quantity += item.quantity));
    setTotalQuantity(quantity);
  }, []);

  const addToCart = (productId) => {
    const positionThisProductInCart = cart.findIndex((value) => value.product_id === productId);
    if (cart.length <= 0) {
      setCart([
        {
          product_id: productId,
          quantity: 1,
        },
      ]);
    } else if (positionThisProductInCart < 0) {
      setCart([...cart, {product_id: productId, quantity: 1}]);
    } else {
      const updatedCart = [...cart];
      updatedCart[positionThisProductInCart].quantity += 1;
      setCart(updatedCart);
    }
    addCartToMemory();
  };

  const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const handleCartClick = (event) => {
    const positionClick = event.target;
    if (
      positionClick.classList.contains('minus') ||
      positionClick.classList.contains('plus')
    ) {
      const productId =
        positionClick.parentElement.parentElement.dataset.id;
      let type = 'minus';
      if (positionClick.classList.contains('plus')) {
        type = 'plus';
      }
      changeQuantityCart(productId, type);
    }
  };

  const changeQuantityCart = (productId, type) => {
    const positionItemInCart = cart.findIndex(
        (value) => value.product_id === productId,
    );
    if (positionItemInCart >= 0) {
      const updatedCart = [...cart];
      switch (type) {
        case 'plus':
          updatedCart[positionItemInCart].quantity += 1;
          break;
        case 'minus':
          updatedCart[positionItemInCart].quantity -= 1;
          if (updatedCart[positionItemInCart].quantity <= 0) {
            updatedCart.splice(positionItemInCart, 1);
          }
          break;
        default:
          break;
      }
      setCart(updatedCart);
      addCartToMemory();
    }
  };

  const renderCartItems = () => {
    const newCartItems = cart.map((item) => {
      const positionProduct = products.findIndex((value) => value.id === item.product_id);
      const info = products[positionProduct];

      const totalPrice = info.price * item.quantity;
      const formattedTotalPrice = totalPrice.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });

      return (
        <div key={item.product_id} className="item" data-id={item.product_id}>
          <div className="image">
            <img src={info.image} alt="" />
          </div>
          <div className="name">{info.name}</div>
          <div className="totalPrice" title={formattedTotalPrice}>
            {formattedTotalPrice}
          </div>
          <div className="quantity">
            <span
              className="minus"
              onClick={() => changeQuantityCart(item.product_id, 'minus')}
            ></span>
            <span>{item.quantity}</span>
            <span
              className="plus"
              onClick={() => changeQuantityCart(item.product_id, 'plus')}
            ></span>
          </div>
        </div>
      );
    });

    setCartItems(newCartItems);
  };


  useEffect(() => {
    renderCartItems();
  }, [cart, products]);

  const totalQuantity =
    cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div
      className={`container ${
        document.body.classList.contains('showCart') ? 'showCart' : ''
      }`}
    >
      <header>
        <div className="title">DAFTAR PRODUK</div>
        <div
          className="icon-cart"
          onClick={() =>
            document.body.classList.toggle('showCart')
          }
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
          </svg>
          <span>{totalQuantity}</span>
        </div>
      </header>

      <div className="listProduct">
        {products.map((product) => (
          <div key={product.id} className="item">
            <img
              src={product.image}
              alt={product.name}
            />
            <h2>{product.name}</h2>
            <div className="price">IDR.{product.price}</div>
            <button
              className="addCart"
              onClick={() => addToCart(product.id)}
            >
              Tambah ke Keranjang
            </button>
          </div>
        ))}
      </div>

      <div className="cartTab">
        <h1>Keranjang</h1>
        <div className="listCart" ref={listCartRef}>
          {cartItems}
        </div>

        <div className="btn">
          <button
            className="close"
            onClick={() =>
              document.body.classList.toggle('showCart')
            }
          >
            Tutup
          </button>
          <button className="checkOut" onClick={handleCheckoutClick}>
          Beli
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

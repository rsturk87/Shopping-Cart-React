import React from 'react';
import './cart.css';
import CartItem from '../Cart-Item/cart-item.js';

function Cart() {
  return (
    <div className="cart">
        <div className="cart-title">Carrinho</div>
        <hr />
        <CartItem />
        <CartItem />
        <CartItem />
        <h4 className="total">Total: <span>R$ 300,00</span></h4>
        <button className="checkout">Checkout</button>
    </div>
  );
};

export default Cart;
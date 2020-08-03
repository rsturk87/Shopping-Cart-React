import React from 'react';
import './cart.css';
import CartItem from '../Cart-Item/cart-item.js';

const Cart = function ({ products }) {
  
  const total = products.reduce((acc, item) => acc + item.price * item.quantity, 0.0);
  const formatedTotal = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="cart">
        <div className="cart-title">Carrinho</div>
        <hr />
        {products.map((product) =>
        <CartItem key={product.id} name={product.name} price={product.price} quantity={product.quantity} removeFromCart={product.remove} />
        )}

        <h4 className="total">Total: <span>{formatedTotal}</span></h4>
        <button className="checkout">Checkout</button>
    </div>
  );
};

export default Cart;
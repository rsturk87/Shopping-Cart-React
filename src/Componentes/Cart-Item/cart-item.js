import React from 'react';
import './cart-item.css';

const CartItem = function ({name, price, quantity, updateQuantity, removeFromCart}) {
  return (
    <div className="cart-item">
        <h5 className="cart-item-name">{name}</h5>
        <h5 className="cart-item-price">R$ {price},00</h5>
        <input type="number" className="quantity" value={quantity} min="1" max="5" onChange={evt => updateQuantity(evt.target.value)} />
        <button className="remove-button" onClick={removeFromCart}>x</button>
    </div>
  );
};

export default CartItem;
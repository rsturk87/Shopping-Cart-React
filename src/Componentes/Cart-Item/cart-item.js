import React from 'react';
import './cart-item.css';

function CartItem() {
  return (
    <div className="cart-item">
        <h5 className="cart-item-name">Produto 1</h5>
        <h5 className="cart-item-price">R$ 155,00</h5>
    </div>
  );
};

export default CartItem;
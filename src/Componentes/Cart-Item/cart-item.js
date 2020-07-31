import React from 'react';
import './cart-item.css';

const CartItem = function ({ nome, preco, removerDoCarrinho}) {
  return (
    <div className="cart-item">
        <h5 className="cart-item-name">{nome}</h5>
        <h5 className="cart-item-price">R$ {preco}</h5>
        <button className="remove-button" onClick={removerDoCarrinho}>x</button>
    </div>
  );
};

export default CartItem;
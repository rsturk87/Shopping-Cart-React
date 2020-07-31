import React from 'react';
import './cart.css';
import CartItem from '../Cart-Item/cart-item.js';

const Cart = function ({ produtos }) {
  return (
    <div className="cart">
        <div className="cart-title">Carrinho</div>
        <hr />
        {produtos.map((produto, index) =>
        <CartItem key={index} nome={produto.nome} preco={produto.preco} removerDoCarrinho={produto.remover} />
        )}

        <h4 className="total">Total: <span>R$ 300,00</span></h4>
        <button className="checkout">Checkout</button>
    </div>
  );
};

export default Cart;
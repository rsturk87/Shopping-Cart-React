import React from 'react';
import './product.css';

function Product() {
  return (
    <div className="product">
        <img src={require('../../images/tenis-vermelho.jpg')} className="product-img" />
        <div className="product-info">
            <div className="product-text">
                <h1 className="product-title">Produto 1</h1>
                <h3 className="product-price">R$ 155,00</h3>
            </div>
            <button className="buy-button">Comprar</button>
        </div>
    </div>
  );
};

export default Product;
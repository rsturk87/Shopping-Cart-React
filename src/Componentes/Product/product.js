import React from 'react';
import './product.css';

const Product = function ({ nome, preco, imagem, adicionarNoCarrinho }) {
  return (
    <div className="product">
        <img src={require('../../images/tenis-vermelho.jpg')} className="product-img" />
        <div className="product-info">
            <div className="product-text">
                <h1 className="product-title">{nome}</h1>
                <h3 className="product-price">R$ {preco}</h3>
            </div>
            <button className="buy-button" onClick={adicionarNoCarrinho}>Comprar</button>
        </div>
    </div>
  );
};

export default Product;
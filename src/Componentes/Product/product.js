import React from 'react';
import './product.css';

const Product = function ({ name, price, image, addToCart }) {
  
  const imagePath = `/images/${image}`;
  const formatedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
  return (
    <div className="product">
        <img src={imagePath} className="product-img" alt={name} />
        <div className="product-info">
            <div className="product-text">
                <h1 className="product-title">{name}</h1>
                <h3 className="product-price">{formatedPrice}</h3>
            </div>
            <button className="buy-button" onClick={addToCart}>Comprar</button>
        </div>
    </div>
  );
};

export default Product
import React from 'react';
import './list.css';
import Product from '../Product/product.js';

const List = function ({ products }) {

  return (
    <div className="list">
      {products.map((product) =>
      <Product key={product.id} name={product.name} price={product.price} image={product.image} quantity={product.quantity} addToCart={product.addToCart} />
      )}
    </div>
  );
};

export default List;
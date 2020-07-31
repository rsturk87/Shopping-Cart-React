import React from 'react';
import './list.css';
import Product from '../Product/product.js';

function List() {
  return (
    <div className="list">
        <Product />
        <Product />
        <Product />
    </div>
  );
};

export default List;
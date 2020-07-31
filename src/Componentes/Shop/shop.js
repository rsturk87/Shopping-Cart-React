import React from 'react';
import './shop.css';
import List from '../List/list.js';
import Cart from '../Cart/cart.js';

function Shop() {
  return (
    <div className="shop">
        <List />
        <Cart />
    </div>
  );
};

export default Shop;
import React from 'react';
import './shop.css';
import List from '../List/list.js';
import Cart from '../Cart/cart.js';
import getProducts from '../../services/product-service';

class Shop extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      cart: []
    }
  };

  async componentDidMount() {
    const products = await getProducts();
    this.setState({ products: products });
  }

  addToCart = id => () => {
    const item = this.state.cart.find(product => product.id === id);
    if (item) {
      if (item.quantity < 5) {
        this.updateCartItemQuantity(id)(item.quantity + 1);
      }
    }
    else {
      const item = this.state.products.find(product => product.id === id);
      this.setState({ cart: [...this.state.cart, item] });
    }
  }

  updateCartItemQuantity = id => quantity => {
    quantity = parseInt(quantity);
    const cart = [...this.state.cart];
    const index = this.state.cart.findIndex(product => product.id === id);
    if (index > -1) {
      if (quantity > 0 && quantity <= 5) {
        cart[index].quantity = quantity;
        this.setState({ cart: cart });
      }
    }
  }

  removeItemFromCart = id => () => {
    const cartWithoutItem = this.state.cart.filter(product => product.id !== id);
    this.setState({ cart: cartWithoutItem });
  }

  render() {  
    const products = this.state.products.map(item => ({ ...item, addToCart: this.addToCart(item.id) }));

    const productsOnCart = this.state.cart.map(item => {
      return {
        ...item,
        updateQuantity: this.updateCartItemQuantity(item.id),
        removeFromCart: this.removeItemFromCart(item.id)
      }
    });
    
    return (
      <div className="shop">
          <List products={products} />
          <Cart products={productsOnCart} />
      </div>
    );
  };
};

export default Shop;
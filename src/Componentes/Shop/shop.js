import React from 'react';
import './shop.css';
import List from '../List/list.js';
import Cart from '../Cart/cart.js';

class Shop extends React.Component {

  constructor() {
    super();
    this.state = {
      produtos: [{ nome: 'Chuteira Copa Society', preco: '109,00', imagem: '../../images/tenis-vermelho.jpg' }, 
      { nome: 'Camiseta Essentials', preco: '70,00' }, 
      { nome: 'Moletom Warm-Up', preco: '220,00' }],
      
      carrinho: []
    }
  };

  adicionarNoCarrinho = nome => () => {
    this.setState({ carrinho: [...this.state.carrinho, { nome: nome }] });
  };

  removerDoCarrinho = nome => () => {
    const carrinhoModificado = this.state.carrinho.filter(produto => produto.nome !== nome);
    this.setState({ carrinho: carrinhoModificado });
  };

  render() {  
    const produtos = this.state.produtos.map(produto => {
      return { nome: produto.nome, preco: produto.preco, imagem: produto.imagem, adicionar: this.adicionarNoCarrinho(produto.nome) };
    });

    const produtosCarrinho = this.state.carrinho.map(produto => {
      return { nome: produto.nome, preco: produto.preco, remover: this.removerDoCarrinho(produto.nome) };
    });
    
    return (
      <div className="shop">
          <List produtos={produtos} />
          <Cart produtos={produtosCarrinho} />
      </div>
    );
  };

};

export default Shop;
import React from 'react';
import './list.css';
import Product from '../Product/product.js';

const List = function ({ produtos }) {

  return (
    <div className="list">
      {produtos.map((produto, index) =>
      <Product key={index} nome={produto.nome} preco={produto.preco} adicionarNoCarrinho={produto.adicionar} />
      )}
    </div>
  );
};

export default List;
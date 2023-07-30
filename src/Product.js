import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Preço: R$ {product.price}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Product;

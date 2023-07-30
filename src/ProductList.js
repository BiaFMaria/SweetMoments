import React from 'react';
import Product from './Product';
import { v4 as uuidv4 } from 'uuid'; // Importar a função v4 de uuid

const productsData = [
  {
    name: 'Porção de Brigadeiros Gourmet',
    price: 12,
    description: 'Contém uma porção de Brigadeiros Gourmet com 8 unidades',
    image: 'https://www.sabornamesa.com.br/media/k2/items/cache/937f929d420ab20a5c9d96a1ab9e2021_XL.jpg',
  },
  {
    name: 'Porção de Beijinhos',
    price: 10,
    description: 'Contém uma porção de beijinhos com 6 unidades',
    image: 'https://ciadereceitas.com.br/wp-content/uploads/2022/09/receita-de-beijinho-caseiro.webp',
  },
  {
    name: 'Porção de Churros',
    price: 10,
    description: 'Contém uma porção de mini churros possuindo 5 unidades',
    image: 'https://www.sabornamesa.com.br/media/k2/items/cache/ad14e3f1ea53ec7346e0758c14413a30_XL.jpg',
  },
  {
    name: 'Pudim Doçura',
    price: 8,
    description: 'Um delicioso pudim de 350g',
    image: 'https://i.ytimg.com/vi/rQq-U7vC-rg/maxresdefault.jpg',
  },
  {
    name: 'Duo Brownie',
    price: 18,
    description: 'Contém uma porção com dois quadrados grandes de brownie pesando ao todo 250g',
    image: 'https://handletheheat.com/wp-content/uploads/2017/03/Chewy-Brownies-Square-1-550x550.jpg',
  },
  {
    name: 'Duo Brownie de chocolate branco',
    price: 19,
    description: 'Contém uma porção com dois quadrados grandes de brownie pesando ao todo 250g',
    image: 'https://nacolher.com/wp-content/uploads/2022/06/receita-de-brownie-com-chocolate-branco.jpg',
  },
  {
    name: 'Fatia de Torta de Red Velvet',
    price: 12,
    description: 'Uma fatia deliciosa de torta de Red Velvet com cobertura de choconinho e morangos',
    image: 'https://img.cybercook.com.br/receitas/663/bolo-veludo-vermelho-de-beterraba-red-velvet-cake-1.jpeg',
  },
  {
    name: 'Duo Alfajor Gourmet',
    price: 14,
    description: 'Dois deliciosos Alfajores feitos de doce de leite Argentino e chocolate 60% amargo',
    image: 'https://cooknenjoy.com/wp-content/uploads/2018/03/alfajor-01.jpg',
  },
  {
    name: 'Torta de Pistache com chocolate ',
    price: 19,
    description: 'Uma maravilhosa torta de pistache e chocolate fino que derrete na boca',
    image: 'https://blog.ingredientesonline.com.br/wp-content/uploads/2021/01/torta-de-pistache.jpg',
  },
  // Adicione os outros produtos aqui...
];

// Adicionar um ID único a cada produto usando uuid
const productsWithIds = productsData.map((product) => ({
  ...product,
  id: uuidv4(),
}));

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {productsWithIds.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;

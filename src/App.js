import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import Cart from './Cart';
import CarouselD from './CarouselD';

const App = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    setTotal(total - product.price);
  };
  const carouselImages  = [
    'https://www.sabornamesa.com.br/media/k2/items/cache/937f929d420ab20a5c9d96a1ab9e2021_XL.jpg',
    
    'https://ciadereceitas.com.br/wp-content/uploads/2022/09/receita-de-beijinho-caseiro.webp',
    
    'https://www.sabornamesa.com.br/media/k2/items/cache/ad14e3f1ea53ec7346e0758c14413a30_XL.jpg',
    
    'https://i.ytimg.com/vi/rQq-U7vC-rg/maxresdefault.jpg',
    
    'https://handletheheat.com/wp-content/uploads/2017/03/Chewy-Brownies-Square-1-550x550.jpg',
    
    'https://nacolher.com/wp-content/uploads/2022/06/receita-de-brownie-com-chocolate-branco.jpg',
    
    'https://img.cybercook.com.br/receitas/663/bolo-veludo-vermelho-de-beterraba-red-velvet-cake-1.jpeg',
    
    'https://cooknenjoy.com/wp-content/uploads/2018/03/alfajor-01.jpg',
    
    'https://blog.ingredientesonline.com.br/wp-content/uploads/2021/01/torta-de-pistache.jpg',
        // Adicione mais URLs de imagens aqui...
      ];

  return (
    <div className="container">
      <h1 className="my-4 text-center">Sweet Moments</h1>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          Produtos
        </button>
        <button
          className={`tab ${activeTab === 'cart' ? 'active' : ''}`}
          onClick={() => setActiveTab('cart')}
        >
          Carrinho de Compras
        </button>
      </div>
      {/* Renderize o CarouselD na página inicial */}
      {activeTab === 'products' && (
        <div className="carousel-container">
          <CarouselD images={carouselImages} />
        </div>
      )}
      {activeTab === 'products' ? (
        <ProductList addToCart={addToCart} />
      ) : (
        <Cart cart={cart} total={total} removeFromCart={removeFromCart} />
      )}
    </div>
  );
};

export default App;

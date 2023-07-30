import React, { useState } from 'react';

const Cart = ({ cart, total, removeFromCart }) => {
  const [confirmationItemId, setConfirmationItemId] = useState(null);

  const handleRemoveFromCart = (item) => {
    setConfirmationItemId(item.id);
  };

  const handleConfirmRemoveFromCart = (item) => {
    removeFromCart(item);
    setConfirmationItemId(null);
  };

  const handleCancelRemoveFromCart = () => {
    setConfirmationItemId(null);
  };

  return (
    <div className="cart">
      <h2>Carrinho de Compras:</h2>
      {cart.length === 0 ? (
        <p>Carrinho vazio.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - R$ {item.price}
                {confirmationItemId === item.id ? (
                  <div>
                    <button onClick={() => handleConfirmRemoveFromCart(item)}>Sim</button>
                    <button onClick={handleCancelRemoveFromCart}>Não</button>
                  </div>
                ) : (
                  <button onClick={() => handleRemoveFromCart(item)}>Excluir</button>
                )}
              </li>
            ))}
          </ul>
          <p>Total: R$ {total}</p>
        </>
      )}
    </div>
  );
};

export default Cart;

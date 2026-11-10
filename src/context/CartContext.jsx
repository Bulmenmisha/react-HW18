import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CART_URL } from '../api/config.js';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // загрузка корзины с сервера при первом рендере
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(CART_URL);
        setCartItems(response.data);
      } catch (error) {
        console.error('Ошибка загрузки корзины:', error);
      }
    };
    fetchCartItems();
  }, []);

  const addToCart = async (product) => {
    try {
      const { image, name, price } = product;
      const response = await axios.post(CART_URL, { image, name, price });
      setCartItems((prev) => [...prev, response.data]);
    } catch (error) {
      console.error('Ошибка добавления в корзину:', error);
    }
  };

  const deleteFromCart = async (productId) => {
    try {
      await axios.delete(`${CART_URL}/${productId}`);
      setCartItems((prev) => prev.filter((item) => item.id !== productId));
    } catch (error) {
      console.error('Ошибка удаления из корзины:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

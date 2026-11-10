import { useEffect, useState } from 'react';
import axios from 'axios';
import News from '../News/News.jsx';
import ProductCard from '../ProductCard/ProductCard.jsx';
import { PRODUCTS_URL } from '../../api/config.js';
import styles from './Main.module.css';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(PRODUCTS_URL);
        setProducts(response.data);
      } catch (err) {
        console.error('Ошибка загрузки товаров:', err);
        setError('Не удалось загрузить товары');
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className={styles.main}>
      <News />
      <h1 className={styles.title}>Товары</h1>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Main;

import { FaPlus } from 'react-icons/fa6';
import { useCart } from '../../context/CartContext.jsx';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.image} alt={product.name} />
      <p className={styles.name}>{product.name}</p>
      <div className={styles.bottom}>
        <div>
          <span className={styles.label}>ЦЕНА:</span>
          <span className={styles.price}>{product.price} €</span>
        </div>
        <button
          className={styles.button}
          onClick={handleAddToCart}
          aria-label="Добавить в корзину"
          title="Добавить в корзину"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

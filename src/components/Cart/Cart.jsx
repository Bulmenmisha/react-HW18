import { FaRegTrashCan } from 'react-icons/fa6';
import { useCart } from '../../context/CartContext.jsx';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems, deleteFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <section className={styles.cart}>
      <h1 className={styles.title}>Корзина</h1>

      {cartItems.length === 0 ? (
        <p className={styles.empty}>Корзина пуста — добавьте товары на главной странице.</p>
      ) : (
        <div className={styles.content}>
          <ul className={styles.list}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.item}>
                <img className={styles.image} src={item.image} alt={item.name} />
                <p className={styles.name}>{item.name}</p>
                <div className={styles.priceBox}>
                  <span className={styles.label}>ЦЕНА:</span>
                  <span className={styles.price}>{item.price} €</span>
                </div>
                <button
                  className={styles.delete}
                  onClick={() => deleteFromCart(item.id)}
                  aria-label="Удалить из корзины"
                  title="Удалить"
                >
                  <FaRegTrashCan />
                </button>
              </li>
            ))}
          </ul>

          <aside className={styles.summary}>
            <h2 className={styles.summaryTitle}>Итого</h2>
            {cartItems.map((item) => (
              <p key={item.id} className={styles.summaryItem}>
                {item.name}
              </p>
            ))}
            <div className={styles.total}>
              <span className={styles.label}>ЦЕНА:</span>
              <span className={styles.price}>{total} €</span>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
};

export default Cart;

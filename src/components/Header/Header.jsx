import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import styles from './Header.module.css';

const Header = () => {
  const { cartItems } = useCart();
  const linkStyle = ({ isActive }) => ({ color: isActive ? '#FFFFFF' : '#FFFFFF80' });

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>Сникер - магазин</h1>
        <nav className={styles.nav}>
          <NavLink to="/" end style={linkStyle}>
            Главная
          </NavLink>
          <NavLink to="/cart" style={linkStyle}>
            Корзина{cartItems.length > 0 && ` (${cartItems.length})`}
          </NavLink>
          <NavLink to="/contacts" style={linkStyle}>
            Контакты
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

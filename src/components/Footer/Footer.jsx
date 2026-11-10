import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <p className={styles.title}>Контакты</p>
            <p className={styles.text}>8 800 000 00 00</p>
            <p className={styles.text}>emailexample@email.com</p>
          </div>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.text}>2024 Сникер-магазин. Все права защищены</p>
          <input className={styles.subscribe} type="email" placeholder="Введите свой email" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

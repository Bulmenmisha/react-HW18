import { useState } from 'react';
import { FaSnapchat, FaFacebook, FaXTwitter } from 'react-icons/fa6';
import styles from './Contacts.module.css';

const Contacts = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.target.reset();
  };

  return (
    <section className={styles.contacts}>
      <div className={styles.info}>
        <h1 className={styles.title}>Контакты</h1>

        <ul className={styles.list}>
          <li>8 800 000 00 00</li>
          <li>emailexample@email.com</li>
        </ul>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input className={styles.input} type="email" placeholder="Ваш email" required />
          <input className={styles.input} type="text" placeholder="Ваше имя" required />
          <input
            className={`${styles.input} ${styles.message}`}
            type="text"
            placeholder="Введите сообщение"
            required
          />
          <button className={styles.button} type="submit">
            Отправить
          </button>
          {sent && <p className={styles.success}>Спасибо! Сообщение отправлено.</p>}
        </form>
      </div>

      <div className={styles.socials}>
        <p className={styles.socialsTitle}>Найдите нас:</p>
        <div className={styles.icons}>
          <a href="#" aria-label="Snapchat" className={`${styles.icon} ${styles.snapchat}`}>
            <FaSnapchat />
          </a>
          <a href="#" aria-label="Facebook" className={`${styles.icon} ${styles.facebook}`}>
            <FaFacebook />
          </a>
          <a href="#" aria-label="X" className={`${styles.icon} ${styles.x}`}>
            <FaXTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

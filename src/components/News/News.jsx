import styles from './News.module.css';

const News = () => {
  return (
    <section className={styles.news} aria-label="Скидка до 50%">
      <div className={styles.blue} />
      <span className={`${styles.word} ${styles.one}`}>ONE</span>
      <span className={`${styles.word} ${styles.air}`}>AIR</span>
      <img className={styles.topShoes} src="/images/banner-top.png" alt="" />
      <img className={styles.bottomShoes} src="/images/banner-bottom.png" alt="" />
      <div className={styles.sale}>
        <span className={styles.upTo}>UP TO</span>
        <span className={styles.percent}>50% OFF</span>
      </div>
    </section>
  );
};

export default News;

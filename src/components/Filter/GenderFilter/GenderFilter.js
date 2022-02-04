import styles from "./GenderFilter.module.css";

const GenderFilter = () => {
  return (
    <div className={styles.filter_block}>
      <p className={styles.filter_title}>Пол</p>
      <div className={styles.button_container}>
        <button className={styles.button}>Любой</button>
        <button className={styles.button}>Женщины</button>
        <button className={styles.button}>Мужчины</button>
      </div>
    </div>
  );
};

export default GenderFilter;

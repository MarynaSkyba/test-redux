import styles from "../CommonCss/RangeFilter.module.css";

const AgeFilter = () => {
  return (
    <>
      <div className={styles.filter}>
        <div className={styles.filter_block}>
          <p className={styles.filter_title}>Возраст</p>
          <section className={styles.range_slider}>
            <input
              min="500"
              max="10000"
              step="100"
              type="range"
              className={styles.ranges}
            />
            <input
              min="500"
              max="10000"
              step="100"
              type="range"
              className={styles.range}
            />
          </section>

          <div className={styles.input_container}>
            <span className={styles.text_age}>от</span>
            <input className={styles.input} placeholder="8" type="text" />
            <span className={styles.text_age}>до</span>
            <input className={styles.input} placeholder="40" type="text" />
            <span className={styles.text_age}>лет</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgeFilter;

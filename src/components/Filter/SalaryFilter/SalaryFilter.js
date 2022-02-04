import styles from "../CommonCss/RangeFilter.module.css";

const SalaryFilter = () => {
  return (
    <div className={styles.filter_block}>
      <p className={styles.filter_title}>Желаемая зарплата</p>

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
        <input className={styles.input} placeholder="1000" type="text" />
        <span className={styles.text_age}>до</span>
        <input className={styles.input} placeholder="1000" type="text" />
        <span className={styles.text_age}>грн</span>
      </div>
      <div className={styles.toggle_container}>
        <p className={styles.text}>Не показывать без зарплаты</p>
        <label className="switch">
          <input id="toggleSwitch" type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default SalaryFilter;

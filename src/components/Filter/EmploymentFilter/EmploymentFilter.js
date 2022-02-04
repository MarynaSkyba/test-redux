import styles from "../CommonCss/CheckboxFilter.module.css";

const EmploymentFilter = () => {
  return (
    <div className={styles.filter_block}>
      <p className={styles.filter_title}>Тип занятости</p>
      <div className={styles.main_container}>
        <div className={styles.checkbox}>
          <div>
            <label>
              <input type="checkbox" className={styles.input_checkbox} />
              <span className={styles.new_checkbox}></span>
            </label>
          </div>
          <div className={styles.text_container}>
            <p className={styles.text}>Полная занятость</p>
            <p className={styles.text}>3660</p>
          </div>
        </div>
        <div className={styles.checkbox}>
          <div>
            <label>
              <input type="checkbox" className={styles.input_checkbox} />
              <span className={styles.new_checkbox}></span>
            </label>
          </div>
          <div className={styles.text_container}>
            <p className={styles.text}>Неполная занятость</p>
            <p className={styles.text}>660</p>
          </div>
        </div>
        <div className={styles.checkbox}>
          <div>
            <label>
              <input type="checkbox" className={styles.input_checkbox} />
              <span className={styles.new_checkbox}></span>
            </label>
          </div>
          <div className={styles.text_container}>
            <p className={styles.text}>Удаленная работа</p>
            <p className={styles.text}>1660</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploymentFilter;

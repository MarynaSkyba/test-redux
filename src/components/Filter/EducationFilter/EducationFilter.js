import styles from "../CommonCss/CheckboxFilter.module.css";

const EducationFilter = () => {
  return (
    <div className={styles.filter_block}>
      <p className={styles.filter_title}>Образование</p>
      <div className={styles.main_container}>
        <div className={styles.checkbox}>
          <div>
            <label>
              <input type="checkbox" className={styles.input_checkbox} />
              <span className={styles.new_checkbox}></span>
            </label>
          </div>
          <div className={styles.text_container}>
            <p className={styles.text}>Высшее</p>
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
            <p className={styles.text}>Неоконченное высшее</p>
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
            <p className={styles.text}>Средне-специальное</p>
            <p className={styles.text}>1060</p>
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
            <p className={styles.text}>Среднее</p>
            <p className={styles.text}>1260</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationFilter;

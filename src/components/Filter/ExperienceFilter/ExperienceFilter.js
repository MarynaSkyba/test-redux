import styles from "../CommonCss/CheckboxFilter.module.css";

const ExperienceFilter = () => {
  return (
    <div className={styles.filter_block}>
      <p className={styles.filter_title}>Опыт работы</p>
      <div className={styles.main_container}>
        <div className={styles.checkbox}>
          <div>
            <label>
              <input type="checkbox" className={styles.input_checkbox} />
              <span className={styles.new_checkbox}></span>
            </label>
          </div>
          <div className={styles.text_container}>
            <p className={styles.text}>Без опыта</p>
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
            <p className={styles.text}>До 1 года</p>
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
            <p className={styles.text}>От 1 до 2 лет</p>
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
            <p className={styles.text}>От 2 до 5 лет</p>
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
            <p className={styles.text}>Студенты</p>
            <p className={styles.text}>660</p>
          </div>
        </div>

        <div className="toggle-students-container">
          <div className="toggle-students-svg">
            <svg className="toggle-students" width="20" height="20"></svg>
            <p className="toggle-text">Только студенты</p>
          </div>

          <label className="switch">
            <input id="toggleSwitch" type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ExperienceFilter;

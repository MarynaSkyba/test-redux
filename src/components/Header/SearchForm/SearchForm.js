import styles from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <div className={styles.div}>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="candidate"
          autoComplete="off"
          autoFocus
          placeholder="Поиск"
        />
      </form>
      <form className={styles.form_city}>
        <input
          className={styles.input}
          type="text"
          name="city"
          autoComplete="off"
          autoFocus
          placeholder="Город"
        />
      </form>

      <button className={styles.button} type="submit">
        <span className={styles.text}>Найти кандидатов</span>
      </button>
    </div>
  );
};

export default SearchForm;

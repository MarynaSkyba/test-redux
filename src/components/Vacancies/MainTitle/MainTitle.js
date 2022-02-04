import filter from "../../../utils/svg/filter.svg";
import styles from "./MainTitle.module.css";

const MainTitle = ({ clickHandler }) => {
  return (
    <>
      <div className={styles.title_container}>
        <h2 className={styles.title}>
          Мы подобрали <span className={styles.title_number}>451 642</span>{" "}
          резюме
        </h2>
        <p className={styles.border}></p>
        <div className={styles.text_container}>
          <p className={styles.text}>
            Резюме продавец консультант во Всей Украине
          </p>

          <div className={styles.select_wrapper}>
            <div>
              <span className={styles.arrow}></span>
              <select>
                <option>за все время</option>
              </select>
            </div>
          </div>
          <div>
            <button className={styles.button} onClick={clickHandler}>
              <img className={styles.img} src={filter} alt="filter" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTitle;

import styles from "./MainNav.module.css";
import planet from "../../../utils/svg/Planet.svg";
import user from "../../../utils/svg/user.svg";

const MainNav = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navmain}>
    <ul className={styles.ul}>
    <li className={styles.link} >Соискатель</li>
    <li className={styles.link}>Работодатель</li>
    <li className={styles.link}> HR </li>
    </ul>

    <div className={styles.menu_login}>
          <div className={styles.select_menu}>
            <img className={styles.icon} src={planet} alt="network" />
            <div className={styles.select_wrapper_lang}>
              <div>
                <select className={styles.select_lang}>
                  <option>RU</option>
                  <option>UA</option>
                  <option>EN</option>
                </select>
                <span className={styles.arrow_lang}></span>
              </div>
            </div>
          </div>

          <div className={styles.select_wrapper}>
            <div>
              <span className={styles.arrow}></span>
              <select className={styles.select}>
                <option>Соискатель</option>
                <option>Работодатель</option>
                <option>HR</option>
              </select>
            </div>
          </div>
          <div className={styles.login}>
            <a>Войти</a>
          </div>
        </div>
        </div>
      </nav>
      <div className={styles.user_menu}>
        <img className={styles.img} src={user} alt="filter" />
        <p className={styles.user_text}>Юра Марченко</p>
      </div>
    </div>
  );
};

export default MainNav;

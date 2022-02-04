import styles from "../Footer/Footer.module.css";
import facebook from "../../utils/svg/facebook.svg";
import linkedin from "../../utils/svg/linkedin.svg";
import instagram from "../../utils/svg/instagram.svg";
import twitter from "../../utils/svg/twitter.svg";
import youtube from "../../utils/svg/youtube.svg";
import vk from "../../utils/svg/vk.svg";

const Footer = () => {
  return (
    <div className={styles.footer_nav}>
      <div className={styles.footer_navmain}>
        {/* <div>
          <svg className={styles.logo}></svg>
        </div> */}
        <div className={styles.footer_center}>
          <h3 className={styles.footer_title}>Другое</h3>
          <ul>
            <li className={styles.footer_text}>Про нас</li>
            <li className={styles.footer_text}>Блог</li>
          </ul>
        </div>
        <div className={styles.footer_center}>
          <h3 className={styles.footer_title}>Сотрудничество с нами</h3>
          <ul>
            <li className={styles.footer_text}>Реклама на сайте</li>
            <li className={styles.footer_text}>Партнерская программа</li>
            <li className={styles.footer_text}>Контакты</li>
          </ul>
        </div>
        <div>
          <ul className={styles.footer_site}>
            <li>
              <img className={styles.img} src={twitter} alt="filter" />
            </li>
            <li>
              <img className={styles.img} src={linkedin} alt="filter" />
            </li>
            <li>
              <img className={styles.img} src={facebook} alt="filter" />
            </li>
            <li>
              <img className={styles.img} src={instagram} alt="filter" />
            </li>
            <li>
              <img className={styles.img} src={youtube} alt="filter" />
            </li>
            <li>
              <img className={styles.img} src={vk} alt="filter" />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_policy}>
        <p className={styles.link}>Privacy Policy</p>
        <p className={styles.link}>&#169; 2021 All rights reserved</p>
        <p className={styles.link}>Terms of Use</p>
      </div>
    </div>
  );
};

export default Footer;

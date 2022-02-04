import styles from "./VacanciesItem.module.css";
import location from '../../../../utils/svg/location.svg'
import online from '../../../../utils/svg/online.svg'


const VacanciesItem = ({ id, photo, name, birthday, workexperience }) => {
  return (
    <li key={id} className={styles.about_block}>
      <div className={styles.about_info}>
      <div className={styles.mobile_container}>
      
      <div className={styles.photo_container}>
      <img  className={styles.photo} src={photo} alt={name} />
      </div>
     
     <div>
      <div className={styles.mobile_container_text}>
        <p className={styles.title}>Продавец-консультант</p>
        <div className={styles.about_name}>
          <p className={styles.first_name}>
            {name}, {birthday}
          </p>
          <img className={styles.location_svg} src={location} alt="ru"/>
          <p className={styles.location}>
            Киев
          </p>
          </div>
     
        </div>
        <ul className={styles.company_container}>
          {workexperience.map(({ id, company_name }) => (
            <li key={id} className={styles.company_name}>
              {company_name}
            </li>
          ))}
        </ul>
        <div className={styles.menu_online}>
          <p className={styles.refresh_name}>Обновлено 9 минут назад</p>
      {/* <img className={styles.online_svg} src={online} alt="ru"/>  */}
         <p className={styles.online}>
            <svg className={styles.online_svg} width="24px" height="24"></svg>
            Онлайн
          </p>
        </div>
      </div>
    </div>
    
    </div>


      <button className={styles.heart}>
        <svg className={styles.heart_svg} width="24px" height="24"></svg>
      </button>
      <button className={styles.more}>
        <svg className={styles.more_svg} width="24px" height="24"></svg>
      </button>
    </li>
  );
};
export default VacanciesItem;

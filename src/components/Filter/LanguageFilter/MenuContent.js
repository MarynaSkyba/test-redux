
import {MenuContent, Button} from './LanguageFilter.styled'
import styles from '../CommonCss/CheckboxFilter.module.css';
import s from './LanguageFilter.module.css'


const MenuContentItem = ({isContentOpen, id}) => {
console.log("id", id)

if (id === "uk") {

}

    return (
        <MenuContent open={isContentOpen} >
           <ul className={s.content}>
           <li className={s.content_main}>
           <div className={s.contnent_input}>
           <input type="radio" />
           <p className={styles.text}> (А1) – начальный</p>
           </div>
           <p className={styles.text}> 70 </p>
           </li>
            <li className={s.content_main}>
           <div className={s.contnent_input}>
           <input type="radio" />
           <p className={styles.text}> (А2) – ниже среднего</p>
           </div>
           <p className={styles.text}> 70 </p>
           </li>
            <li className={s.content_main}>
           <div className={s.contnent_input}>
           <input type="radio" />
           <p className={styles.text}> (В1) – средний</p>
           </div>
           <p className={styles.text}> 70 </p>
           </li>
            <li className={s.content_main}>
           <div className={s.contnent_input}>
           <input type="radio" />
           <p className={styles.text}> (В2) – выше среднего </p>
           </div>
           <p className={styles.text}> 70 </p>
           </li>
            <li className={s.content_main}>
           <div className={s.contnent_input}>
           <input type="radio" />
           <p className={styles.text}> (C1) – продвинутый</p>
           </div>
           <p className={styles.text}> 70 </p>
           </li>
            <li className={s.content_main}>
           <div className={s.contnent_input}>
           <input type="radio" />
           <p className={styles.text}> (C2) – профессиональный уровень владения </p>
           </div>
           <p className={styles.text}> 70 </p>
           </li>
           </ul>
           </MenuContent> 
    )
}

export default MenuContentItem;
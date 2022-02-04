import {useState} from 'react';

import styles from '../CommonCss/CheckboxFilter.module.css';
import s from './LanguageFilter.module.css'
import uk from '../../../utils/svg/flags/uk.svg'
import ru from '../../../utils/svg/flags/ru.svg'
import ua from '../../../utils/svg/flags/ua.svg'
import de from '../../../utils/svg/flags/de.svg'
import es from '../../../utils/svg/flags/es.svg'
import pl from '../../../utils/svg/flags/pl.svg'

import arrow from '../../../utils/svg/arrow-black.svg'
import {MenuContent, Button} from './LanguageFilter.styled'
import MenuContentItem from './MenuContent'


const LanguageFilter = () =>{
  const [isContentOpen, setContentOpen] = useState(false);
  const clickHandler = () => {
    setContentOpen(!isContentOpen);
  };


  return (

<div className={styles.filter_block}>
      <p className={styles.filter_title}>Владение языками</p>
      <div className={styles.main_container}>
        <div className={styles.checkbox}>
          <div>
            <label>
              <input type="checkbox" className={styles.input_checkbox} />
              <span className={styles.new_checkbox}></span>
            </label>
          </div>
          <div className={styles.text_container} name="england">
          <div className={s.flag_container} >
            <img className={s.flag} src={uk} alt="ru"/>
            <p className={styles.text}>Английский</p>
            </div>
           <div className={s.flag_container}>
            <p className={styles.text}>660</p>
          <Button onClick={clickHandler}>
          <img className={s.icon} src={arrow} alt="uk" />
          </Button>
          </div>
          </div>
        </div>

           <MenuContentItem isContentOpen={isContentOpen} />
          </div>


<div className={styles.checkbox}>
          <div>
            <label>
              <input type="checkbox" className={styles.input_checkbox} />
              <span className={styles.new_checkbox}></span>
            </label>
          </div>
          <div className={styles.text_container}>
          <div className={s.flag_container}>
          <img className={s.flag} src={ru} alt="ru"/>
            <p className={styles.text}>Русский</p>
            </div>
           <div className={s.flag_container}>
            <p className={styles.text}>660</p>
          <Button onClick={clickHandler}>
          <img className={s.icon} src={arrow} alt="arrow" />
          </Button>
          </div>
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
          <div className={s.flag_container}>
          <img className={s.flag} src={ua} alt="ua"/>
            <p className={styles.text}>Украинский</p>
            </div>
           <div className={s.flag_container}>
            <p className={styles.text}>660</p>
          <Button onClick={clickHandler}>
          <img className={s.icon} src={arrow} alt="arrow" />
          </Button>
          </div>
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
          <div className={s.flag_container}>
          <img className={s.flag} src={de} alt="de"/>
            <p className={styles.text}>Немецкий</p>
            </div>
           <div className={s.flag_container}>
            <p className={styles.text}>660</p>
          <Button onClick={clickHandler}>
          <img className={s.icon} src={arrow} alt="arrow" />
          </Button>
          </div>
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
          <div className={s.flag_container}>
          <img className={s.flag} src={pl} alt="pl"/>
            <p className={styles.text}>Польский</p>
            </div>
           <div className={s.flag_container}>
            <p className={styles.text}>660</p>
          <Button onClick={clickHandler}>
          <img className={s.icon} src={arrow} alt="arrow" />
          </Button>
          </div>
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
          <div className={s.flag_container}>
          <img className={s.flag} src={es} alt="es"/>
            <p className={styles.text}>Испанский</p>
            </div>
           <div className={s.flag_container}>
            <p className={styles.text}>660</p>
          <Button onClick={clickHandler}>
          <img className={s.icon} src={arrow} alt="arrow" />
          </Button>
          </div>
          </div>
        </div>


          </div>
          
  )
}


export default LanguageFilter;
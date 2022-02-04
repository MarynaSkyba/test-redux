// import styles from './Vacancies.module.css'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as vacanciesOperations from "../../../../redux/vacancies/vacancies-operation";
import { getVacancies } from "../../../../redux/vacancies/vacancies-selectors";
import VacanciesItem from "../VacanciesItem/VacanciesItem";
import styles from "./VacanciesList.module.css";

const VacanciesList = () => {
  const vacancies = useSelector(getVacancies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vacanciesOperations.fetchVacanciesAction());
  }, [dispatch]);

  return (
    <div className={styles.main_container_about}>
      <div className={styles.about}>
        <ul>
          {vacancies.map(
            ({ id, photo, first_name, birthday, workexperience }) => (
              <VacanciesItem
                id={id}
                photo={photo}
                name={first_name}
                birthdaty={birthday}
                workexperience={workexperience}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default VacanciesList;

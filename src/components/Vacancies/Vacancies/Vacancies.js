import { useState } from "react";
import VacanciesList from "../Vacancies/VacanciesList/VacanciesList";
import Paginations from '../../Pagination/Pagination'
import styles from "../Vacancies/VacanciesList/VacanciesList.module.css";

const Vacancies = () => {
  return (
    <div className={styles.container}>
      <VacanciesList />
      <Paginations />
    </div>
  );
};

export default Vacancies;

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as vacanciesOperations from "../../../redux/vacancies/vacancies-operation";
import close from "../../../utils/svg/close.svg";

import ToggleFilter from "../ToggleFilter/ToggleFilter";
import AgeFilter from "../AgeFilter/AgeFilter";
import GenderFilter from "../GenderFilter/GenderFilter";
import SalaryFilter from "../SalaryFilter/SalaryFilter";
import ExperienceFilter from "../ExperienceFilter/ExperienceFilter";
import EmploymentFilter from "../EmploymentFilter/EmploymentFilter";
import EducationFilter from "../EducationFilter/EducationFilter";
import LanguageFilter from '../LanguageFilter/LanguageFilterTest'
import { Container } from "./Filter.styled";

const Filter = () => {
  const [checked, setChecked] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vacanciesOperations.getFilteredVacancies(checked));
  }, [dispatch, checked]);

  return (
    <Container>
      <ToggleFilter checked={checked} onChange={setChecked} />
      <AgeFilter />
      <GenderFilter />
      <SalaryFilter />
      <ExperienceFilter />
      <LanguageFilter/>
      <EmploymentFilter />
      <EducationFilter />
    </Container>
  );
};

export default Filter;
